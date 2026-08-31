import asyncio
import sys
import time
from bleak import BleakClient

FFF2 = "0000fff2-0000-1000-8000-00805f9b34fb"
FFF1 = "0000fff1-0000-1000-8000-00805f9b34fb"

HANDSHAKE = bytes.fromhex("aa016a905bbe")

# Same RED color for both commands
TESTS = [
    ("CMD 05 - RED", bytes.fromhex("aa0501ff0000")),
    ("CMD 06 - RED", bytes.fromhex("aa0601ff0000")),
]


async def ainput(prompt):
    return await asyncio.to_thread(input, prompt)


async def main():

    if len(sys.argv) < 2:
        print("Usage:")
        print("python compare_05_06.py 67:2E:A9:4C:A7:67")
        return

    address = sys.argv[1]
    start = time.monotonic()

    def elapsed():
        return time.monotonic() - start

    async with BleakClient(address) as client:

        print(f"[{elapsed():.2f}s] Connected: {client.is_connected}")

        def notification_handler(sender, data):
            h = data.hex()

            if h.startswith("bb05"):
                print(f"[{elapsed():.2f}s] <-- ACK_05 {h}")

            elif h.startswith("bb06"):
                print(f"[{elapsed():.2f}s] <-- ACK_06 {h}")

            elif h.startswith("bb0120"):
                print(f"[{elapsed():.2f}s] <-- DEVICE_INFO {h}")

        await client.start_notify(FFF1, notification_handler)

        print()
        print("=" * 70)
        print("HANDSHAKE")
        print("=" * 70)

        print(f"[{elapsed():.2f}s] --> AA 01 6A 90 5B BE")

        await client.write_gatt_char(
            FFF2,
            HANDSHAKE,
            response=False
        )

        await asyncio.sleep(2)

        print()
        print("=" * 70)
        print("IMPORTANT: WAITING FOR STARTUP SPECTRUM")
        print("=" * 70)
        print()
        print("The bottle may cycle through its startup colors.")
        print("DO NOT enter anything.")
        print()
        print("Waiting a full 30 seconds...")
        print()

        for remaining in range(30, 0, -1):

            print(
                f"\rStartup wait: {remaining:2d}s remaining",
                end="",
                flush=True
            )

            await asyncio.sleep(1)

        print()
        print()
        print("Startup animation should now be finished.")
        print()

        results = []

        for number, (label, payload) in enumerate(TESTS, 1):

            print()
            print("=" * 70)
            print(f"TEST {number}/{len(TESTS)}")
            print("=" * 70)

            print(f"{label}")
            print(f"Command: {payload.hex(' ').upper()}")
            print()

            # Make sure previous display has settled.
            print("Waiting 2 seconds before sending...")
            await asyncio.sleep(2)

            print()
            print(
                f"[{elapsed():.2f}s] --> "
                f"{payload.hex(' ').upper()}"
            )

            send_time = time.monotonic()

            await client.write_gatt_char(
                FFF2,
                payload,
                response=False
            )

            print()
            print("WATCH THE BOTTLE.")
            print()
            print("Wait until the TEST light turns OFF.")
            print("Then press ENTER.")
            print()

            observation = await ainput("> ")

            duration = time.monotonic() - send_time

            print()
            print(f"Measured duration: {duration:.2f}s")
            print(f"Observation: {observation}")

            results.append(
                (
                    label,
                    payload.hex().upper(),
                    duration,
                    observation
                )
            )

            # Give the bottle plenty of time before next command.
            print()
            print("Waiting 6 seconds before next test...")
            await asyncio.sleep(6)

        print()
        print("=" * 70)
        print("FINAL RESULTS")
        print("=" * 70)
        print()

        print(
            "TEST              COMMAND                 DURATION    OBSERVATION"
        )
        print("-" * 70)

        for label, command, duration, observation in results:

            print(
                f"{label:<18} "
                f"{command:<23} "
                f"{duration:>7.2f}s    "
                f"{observation}"
            )

        print()
        print("=" * 70)
        print("TEST COMPLETE")
        print("=" * 70)


if __name__ == "__main__":
    asyncio.run(main())