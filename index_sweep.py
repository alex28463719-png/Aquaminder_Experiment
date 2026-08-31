#!/usr/bin/env python3
"""
Tests whether the byte after AA 06 controls WHICH color shows up, or whether
the bottle just auto-advances through an internal sequence regardless of what
we send.

Sends AA 06 <i> for i = 0..19, one at a time, 3s apart, and asks you to log
the color each time. Run it TWICE in a row (without restarting/reconnecting
in between if possible, or even fresh reconnects both times) and compare:

  - If the same index byte produces the SAME color both times  -> the byte
    IS selecting the color. Great news, means we can pick colors directly.
  - If colors just keep advancing regardless of which index you send        -> confirms
    it's an internal auto-incrementing counter, unrelated to payload content.

Run: python index_sweep.py 67:2E:A9:4C:A7:67
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

    async with BleakClient(target) as client:
        print(f"[{ts()}] Connected: {client.is_connected}")

        def on_notify(_h, data):
            print(f"[{ts()}]     <-- notify: {data.hex()}")
        await client.start_notify(FFF1, on_notify)

        await client.write_gatt_char(FFF2, HANDSHAKE, response=False)
        await asyncio.sleep(1.0)

        print("\nSweeping AA 06 <index> for index = 0..19.")
        print("Log the color you see each time. 'q' to stop early.\n")

        log = {}
        for i in range(20):
            payload = bytes([0xAA, 0x06, i])
            print(f"[{ts()}] --- index {i}: writing {payload.hex()} ---")
            await client.write_gatt_char(FFF2, payload, response=False)
            print("    (waiting 6s for the full ~4-5s display to finish...)")
            await asyncio.sleep(6.0)
            seen = await ainput(f"    color for index {i}? > ")
            if seen.strip().lower() == "q":
                break
            log[i] = seen.strip()

        print("\n=== index -> color map ===")
        for i, color in log.items():
            print(f"  {i:2d}: {color}")

if __name__ == "__main__":
    asyncio.run(main())