import asyncio
import sys
import time
from bleak import BleakClient

FFF2 = "0000fff2-0000-1000-8000-00805f9b34fb"
FFF1 = "0000fff1-0000-1000-8000-00805f9b34fb"

HANDSHAKE = bytes.fromhex("aa016a905bbe")

# Keep RGB FIXED at RED.
# Only change the byte after 06.
TEST_VALUES = [0x00, 0x01, 0x02, 0x03, 0x04, 0x05]


async def ainput(prompt):
    return await asyncio.to_thread(input, prompt)


async def main():

    if len(sys.argv) < 2:
        print("Usage:")
        print("python duration_test.py 67:2E:A9:4C:A7:67")
        return

    address = sys.argv[1]

    start_time = time.monotonic()

    def elapsed():
        return time.monotonic() - start_time

    async with BleakClient(address) as client:

        print(f"[{elapsed():.2f}s] Connected: {client.is_connected}")

        def notification_handler(sender, data):
            hexdata = data.hex()

            if hexdata.startswith("bb0600"):
                print(
                    f"[{elapsed():.2f}s] <-- ACK_06 {hexdata}"
                )
            elif hexdata.startswith("bb0120"):
                print(
                    f"[{elapsed():.2f}s] <-- DEVICE_INFO {hexdata}"
                )

        await client.start_notify(
            FFF1,
            notification_handler
        )

        print()
        print("=" * 70)
        print("HANDSHAKE")
        print("=" * 70)

        await client.write_gatt_char(
            FFF2,
            HANDSHAKE,
            response=False
        )

        await asyncio.sleep(2)

        print()
        print("=" * 70)
        print("DURATION TEST")
        print("=" * 70)
        print()
        print("RGB is FIXED to RED: FF 00 00")
        print()
        print("We will test:")
        print()
        print("AA 06 XX FF 00 00")
        print("      ^^")
        print("      duration/mode candidate")
        print()
        print("For each test:")
        print("  1. The red light will turn on.")
        print("  2. Watch it carefully.")
        print("  3. The moment it turns OFF, press Enter.")
        print()
        print("IMPORTANT: Do NOT press Enter until the light actually")
        print("turns off.")
        print()

        results = []

        for i, value in enumerate(TEST_VALUES, 1):

            payload = bytes([
                0xAA,
                0x06,
                value,
                0xFF,
                0x00,
                0x00
            ])

            print()
            print("=" * 70)
            print(f"TEST {i}/{len(TEST_VALUES)}")
            print("=" * 70)

            print(
                f"Command: {payload.hex(' ').upper()}"
            )

            # Small gap between tests.
            await asyncio.sleep(2)

            print()
            print("Sending RED...")
            await client.write_gatt_char(
                FFF2,
                payload,
                response=False
            )

            light_start = time.monotonic()

            print()
            print("🔴 RED IS ON")
            print()
            print("WAIT until the light turns OFF.")
            print("Then press ENTER.")
            print()

            await ainput("> ")

            measured = time.monotonic() - light_start

            print()
            print(
                f"Measured duration: {measured:.2f} seconds"
            )

            results.append(
                (value, measured)
            )

        print()
        print("=" * 70)
        print("FINAL DURATION RESULTS")
        print("=" * 70)
        print()
        print("VALUE     COMMAND              DURATION")
        print("-" * 70)

        for value, duration in results:

            command = (
                f"AA 06 {value:02X} FF 00 00"
            )

            print(
                f"0x{value:02X}      "
                f"{command:<20} "
                f"{duration:.2f}s"
            )

        print()
        print("=" * 70)

        # Find whether duration changes significantly.
        durations = [d for _, d in results]

        if max(durations) - min(durations) > 1.0:

            print(
                "RESULT: Duration changes significantly "
                "between values."
            )
            print(
                "The 3rd byte may control duration/mode."
            )

        else:

            print(
                "RESULT: Duration is approximately the same."
            )
            print(
                "The 3rd byte probably is NOT the duration."
            )

        print()


if __name__ == "__main__":
    asyncio.run(main())