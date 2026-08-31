#!/usr/bin/env python3
"""
AquaMinder bottle BLE brute-force helper.

Connects to the bottle, sends the known handshake, then walks through a list
of candidate command bytes to FFF2 (write-without-response), pausing after
each one so you can look at the bottle and note what happened. Any
notification the bottle sends back on FFF1 is printed automatically -- a
different ack byte for "understood" vs "ignored" commands is a strong signal
even before you know what the command does visually.

Requires: pip install bleak
Run:      python3 bottle_bruteforce.py            (scans for "Aquaminder")
      or  python3 bottle_bruteforce.py AA:BB:CC:DD:EE:FF   (connect directly)

Confirmed from packet capture (do not need to guess these):
  Service            : 0000FE00-0000-1000-8000-00805F9B34FB
  Write char (FFF2)  : 0000FFF2-0000-1000-8000-00805F9B34FB  (write w/o response)
  Notify char (FFF1) : 0000FFF1-0000-1000-8000-00805F9B34FB
  Known handshake     : AA 01 6A 90 5B BE   (sent by the real app on connect)
"""

import asyncio
import sys
from bleak import BleakClient, BleakScanner

FFF2 = "0000fff2-0000-1000-8000-00805f9b34fb"
FFF1 = "0000fff1-0000-1000-8000-00805f9b34fb"

HANDSHAKE = bytes.fromhex("aa016a905bbe")

# ---------------------------------------------------------------------------
# Candidate list. Edit freely -- add/remove/reorder as you learn things.
# Each entry: (label, hex_string). Keep hex_string as a plain hex string,
# spaces optional.
# ---------------------------------------------------------------------------
CANDIDATES = [
    # --- sanity check: replay the known handshake, should do nothing visible ---
    ("replay handshake (sanity check, expect no color change)", "aa016a905bbe"),

    # --- guesses assuming a short "set static color" opcode we haven't seen yet ---
    # structure guess: AA <cmd> R G B
    ("cmd 02, red",   "aa02ff0000"),
    ("cmd 02, green", "aa0200ff00"),
    ("cmd 02, blue",  "aa020000ff"),
    ("cmd 03, red",   "aa03ff0000"),
    ("cmd 03, green", "aa0300ff00"),
    ("cmd 03, blue",  "aa0300ff00"),
    ("cmd 04, red",   "aa04ff0000"),

    # structure guess: AA <cmd> 01 R G B   (extra "01" like the known aa0501/aa0601 start)
    ("cmd 02 +01, red",   "aa0201ff0000"),
    ("cmd 03 +01, red",   "aa0301ff0000"),
    ("cmd 07 +01, red",   "aa0701ff0000"),
    ("cmd 08 +01, red",   "aa0801ff0000"),

    # structure guess: AA <cmd> R G B <checksum-ish trailing byte>
    ("cmd 02, red + 00 tail",  "aa02ff000000"),
    ("cmd 02, red + ff tail",  "aa02ff0000ff"),

    # off / static-off guesses
    ("cmd 00 (maybe 'off')", "aa0000"),
    ("cmd 01 short (no payload)", "aa01"),

    # brightness-style guesses (single value 0-255)
    ("cmd 09, value 0xff (maybe brightness)", "aa09ff"),
    ("cmd 09, value 0x80", "aa0980"),
]


def hexclean(s: str) -> bytes:
    return bytes.fromhex(s.replace(" ", ""))


async def main():
    target = sys.argv[1] if len(sys.argv) > 1 else None

    if target is None:
        print("No address given -- scanning for a device advertising 'Aquaminder'...")
        device = await BleakScanner.find_device_by_filter(
            lambda d, ad: d.name and "aqua" in d.name.lower(),
            timeout=15.0,
        )
        if device is None:
            print("Could not find it via scan. Re-run with the MAC address:")
            print("  python3 bottle_bruteforce.py AA:BB:CC:DD:EE:FF")
            return
        target = device.address
        print(f"Found: {device.name} @ {target}")

    async with BleakClient(target) as client:
        print(f"Connected: {client.is_connected}")

        def on_notify(_handle, data: bytearray):
            print(f"    <-- notification from bottle: {data.hex()}")

        try:
            await client.start_notify(FFF1, on_notify)
            print("Subscribed to notifications on FFF1.")
        except Exception as e:
            print(f"(could not subscribe to notifications: {e})")

        print("\nSending known handshake first...")
        await client.write_gatt_char(FFF2, HANDSHAKE, response=False)
        await asyncio.sleep(1.0)

        print("\nStarting candidate sweep. Watch the bottle after each write.")
        print("Press Enter to send the next candidate, or type 'q' + Enter to stop.\n")

        for label, hex_payload in CANDIDATES:
            payload = hexclean(hex_payload)
            print(f"--> [{label}] writing: {payload.hex()}")
            await client.write_gatt_char(FFF2, payload, response=False)
            await asyncio.sleep(0.3)  # give a notification time to arrive
            cmd = input("    (Enter=next, q=quit, note anything you saw) > ").strip()
            if cmd.lower() == "q":
                break

        print("\nDone. Disconnecting.")


if __name__ == "__main__":
    asyncio.run(main())