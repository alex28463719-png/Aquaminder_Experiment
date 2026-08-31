#!/usr/bin/env python3
"""
Fires AA 06 01 (no RGB payload) repeatedly and lets you log what color/behavior
you see each time, in order. Purpose: find out whether the bottle is cycling
through a fixed internal preset sequence (independent of what we send) rather
than reading our bytes as an RGB value.

Run: python repeat_trigger.py 67:2E:A9:4C:A7:67
Then optionally: python repeat_trigger.py 67:2E:A9:4C:A7:67 aa0501   (to test cmd 05 instead)
"""

import asyncio
import sys
import time
from bleak import BleakClient

FFF2 = "0000fff2-0000-1000-8000-00805f9b34fb"
FFF1 = "0000fff1-0000-1000-8000-00805f9b34fb"
HANDSHAKE = bytes.fromhex("aa016a905bbe")

START = time.monotonic()
def ts():
    return f"{time.monotonic() - START:6.2f}s"

async def ainput(prompt):
    return await asyncio.to_thread(input, prompt)

async def main():
    target = sys.argv[1]
    payload_hex = sys.argv[2] if len(sys.argv) > 2 else "aa0601"
    payload = bytes.fromhex(payload_hex)

    async with BleakClient(target) as client:
        print(f"[{ts()}] Connected: {client.is_connected}")

        def on_notify(_h, data):
            print(f"[{ts()}]     <-- notify: {data.hex()}")
        await client.start_notify(FFF1, on_notify)

        await client.write_gatt_char(FFF2, HANDSHAKE, response=False)
        await asyncio.sleep(1.0)

        print(f"\nWill repeatedly send {payload.hex()} to FFF2.")
        print("After each trigger, type the color you saw (e.g. 'red') and press Enter.")
        print("Type 'q' to stop.\n")

        i = 0
        log = []
        while True:
            i += 1
            print(f"[{ts()}] --- trigger #{i}: writing {payload.hex()} ---")
            await client.write_gatt_char(FFF2, payload, response=False)
            await asyncio.sleep(0.8)
            seen = await ainput(f"    what color/behavior did you see for #{i}? > ")
            if seen.strip().lower() == "q":
                break
            log.append(seen.strip())

        print("\n=== Sequence observed, in order ===")
        for idx, color in enumerate(log, 1):
            print(f"  {idx}: {color}")

if __name__ == "__main__":
    asyncio.run(main())