#!/usr/bin/env python3
"""
AquaMinder bottle BLE brute-force helper -- v2 (fixed notification timing).

The v1 script used blocking input() inside an asyncio program, which stalled
the event loop and caused notifications to queue up and print in bursts that
were NOT actually correlated with the write that appeared to trigger them.
This version runs input() in a background thread so notifications print in
real time, with a timestamp (seconds since script start) on every line so
you can literally see whether a response came within ~100ms of a write
(real reaction) or was just ambient/queued (heartbeat).

Requires: pip install bleak
Run:      python bottle_bruteforce_v2.py 67:2E:A9:4C:A7:67
"""

import asyncio
import sys
import time
from bleak import BleakClient, BleakScanner

FFF2 = "0000fff2-0000-1000-8000-00805f9b34fb"
FFF1 = "0000fff1-0000-1000-8000-00805f9b34fb"

HANDSHAKE = bytes.fromhex("aa016a905bbe")

START = time.monotonic()

def ts():
    return f"{time.monotonic() - START:7.3f}s"

CANDIDATES = [
    ("replay handshake (sanity check)", "aa016a905bbe"),

    # known-real-but-non-color opcodes, for calibration -- expect the SAME
    # kind of reply as before (info / schedule), confirms nothing has drifted
    ("cmd 01 (known: device info)", "aa01"),
    ("cmd 04 (known: schedule dump)", "aa0401ff0000"),

    # short guesses at a static-color opcode
    ("cmd 02, red",   "aa02ff0000"),
    ("cmd 02, green", "aa0200ff00"),
    ("cmd 02, blue",  "aa020000ff"),
    ("cmd 03, red",   "aa03ff0000"),

    # try 05/06 (the REAL light commands) truncated short -- on the chance
    # the firmware accepts a short form or at least reacts differently
    ("cmd 05, short (red guess)", "aa0501ff0000"),
    ("cmd 06, short (red guess)", "aa0601ff0000"),
    ("cmd 05, minimal (just cmd+01)", "aa0501"),
    ("cmd 06, minimal (just cmd+01)", "aa0601"),

    # off-guesses
    ("cmd 00", "aa0000"),
    ("cmd 0a", "aa0aff0000"),
    ("cmd 0b", "aa0bff0000"),
]


def hexclean(s: str) -> bytes:
    return bytes.fromhex(s.replace(" ", ""))


async def ainput(prompt: str) -> str:
    return await asyncio.to_thread(input, prompt)


async def main():
    target = sys.argv[1] if len(sys.argv) > 1 else None
    if target is None:
        print("No address given -- scanning for a device advertising 'Aquaminder'...")
        device = await BleakScanner.find_device_by_filter(
            lambda d, ad: d.name and "aqua" in d.name.lower(),
            timeout=15.0,
        )
        if device is None:
            print("Not found via scan. Re-run with the MAC address directly.")
            return
        target = device.address
        print(f"Found: {device.name} @ {target}")

    async with BleakClient(target) as client:
        print(f"[{ts()}] Connected: {client.is_connected}")

        def on_notify(_handle, data: bytearray):
            print(f"[{ts()}]     <-- notify: {data.hex()}")

        try:
            await client.start_notify(FFF1, on_notify)
            print(f"[{ts()}] Subscribed to FFF1 notifications.")
        except Exception as e:
            print(f"[{ts()}] (could not subscribe: {e})")

        print(f"\n[{ts()}] Sending known handshake...")
        await client.write_gatt_char(FFF2, HANDSHAKE, response=False)
        await asyncio.sleep(1.5)  # let event loop run so queued notifies print now

        print("\nStarting candidate sweep (non-blocking now -- notification")
        print("timestamps below are trustworthy relative to each write).\n")

        for label, hex_payload in CANDIDATES:
            payload = hexclean(hex_payload)
            print(f"[{ts()}] --> [{label}] writing: {payload.hex()}")
            await client.write_gatt_char(FFF2, payload, response=False)
            await asyncio.sleep(1.0)  # real-time window to observe + let notifies print
            cmd = await ainput("    (Enter=next, q=quit, note anything you saw) > ")
            if cmd.strip().lower() == "q":
                break

        print(f"\n[{ts()}] Done. Disconnecting.")


if __name__ == "__main__":
    asyncio.run(main())