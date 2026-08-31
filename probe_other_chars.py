#!/usr/bin/env python3
"""
Tests the three write-capable characteristics we found in GATT discovery but
NEVER actually wrote to: AE01, AE03 (service 0xAE30) and AE3B (third service).
These are plausibly the raw vendor-SDK control surface, separate from
AquaMinder's own AA06 protocol on FFF2 -- possibly hosting the real effect
engine responsible for the startup spectrum.

Also subscribes to their notify counterparts (AE02, AE3C) which we've also
never listened to.

Run: python probe_other_chars.py 67:2E:A9:4C:A7:67
"""

import asyncio
import sys
import time
from bleak import BleakClient

AE01 = "0000ae01-0000-1000-8000-00805f9b34fb"
AE02 = "0000ae02-0000-1000-8000-00805f9b34fb"
AE03 = "0000ae03-0000-1000-8000-00805f9b34fb"
AE3B = "0000ae3b-0000-1000-8000-00805f9b34fb"
AE3C = "0000ae3c-0000-1000-8000-00805f9b34fb"

START = time.monotonic()
def ts():
    return f"{time.monotonic() - START:6.2f}s"

async def ainput(prompt):
    return await asyncio.to_thread(input, prompt)

# A handful of plausible payload shapes to try on each characteristic.
# Not exhaustive -- just enough variety to see if ANYTHING reacts.
CANDIDATES = [
    ("known-good AA06 magenta (echo test)", "AA0601FF00FF0001417175616D696E6465720000"),
    ("magic-home-style set-color (0x56 R G B W 0xF0 0xAA)", "56FF00FF00F0AA"),
    ("magic-home-style turn-on (0x71 0x23 0x0F)", "71230F"),
    ("short mode byte guess: breathing=02", "020200FF00FF"),
    ("short mode byte guess: spectrum=03", "03"),
    ("bare single byte 01", "01"),
]

async def probe_char(client, write_uuid, notify_uuid, label):
    print(f"\n=== Probing {label} (write={write_uuid[:8]}, notify={notify_uuid[:8]}) ===")
    try:
        def on_notify(_h, data):
            print(f"[{ts()}]     <-- {label} notify: {data.hex()}")
        await client.start_notify(notify_uuid, on_notify)
        print(f"Subscribed to {label} notify.")
    except Exception as e:
        print(f"(could not subscribe to {label} notify: {e})")

    for desc, hexstr in CANDIDATES:
        payload = bytes.fromhex(hexstr)
        print(f"[{ts()}] --> {label}: {desc} ({payload.hex()})")
        try:
            await client.write_gatt_char(write_uuid, payload, response=False)
        except Exception as e:
            print(f"    write failed: {e}")
            continue
        await asyncio.sleep(2.0)
        ans = await ainput(f"    anything visible on the bottle? > ")
        if ans.strip():
            print(f"    Logged: {ans}")

async def main():
    target = sys.argv[1]
    async with BleakClient(target) as client:
        print(f"[{ts()}] Connected: {client.is_connected}")
        await probe_char(client, AE01, AE02, "AE01/AE02")
        await probe_char(client, AE03, AE02, "AE03/AE02")
        await probe_char(client, AE3B, AE3C, "AE3B/AE3C")
        print(f"\n[{ts()}] Done.")

if __name__ == "__main__":
    asyncio.run(main())
