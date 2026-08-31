import asyncio
import sys
from bleak import BleakClient

FFF2 = "0000fff2-0000-1000-8000-00805f9b34fb"
FFF1 = "0000fff1-0000-1000-8000-00805f9b34fb"

HANDSHAKE = bytes.fromhex("aa016a905bbe")

COLORS = [
    ("RED",     "ff0000"),
    ("GREEN",   "00ff00"),
    ("BLUE",    "0000ff"),
    ("YELLOW",  "ffff00"),
    ("CYAN",    "00ffff"),
    ("MAGENTA", "ff00ff"),
    ("WHITE",   "ffffff"),
]


async def main():

    if len(sys.argv) < 2:
        print("Usage:")
        print("python verify_rgb.py 67:2E:A9:4C:A7:67")
        return

    address = sys.argv[1]

    async with BleakClient(address) as client:

        print("Connected:", client.is_connected)

        def notify_handler(handle, data):
            print(f"    <-- notify {bytes(data).hex()}")

        await client.start_notify(FFF1, notify_handler)

        print("\nSending handshake...")
        await client.write_gatt_char(
            FFF2,
            HANDSHAKE,
            response=False
        )

        await asyncio.sleep(3)

        print("\n" + "=" * 70)
        print("RGB VERIFICATION TEST")
        print("=" * 70)

        print("""
For each test:

1. Look at the bottle.
2. The command will be sent ONCE.
3. Wait for the light/beep sequence to finish.
4. Compare the actual color with the EXPECTED color.
5. Type exactly what you observed.
""")

        results = []

        for number, (name, rgb) in enumerate(COLORS, 1):

            payload = bytes.fromhex("aa0601" + rgb)

            print("\n" + "-" * 70)
            print(f"TEST {number}/7")
            print(f"EXPECTED COLOR : {name}")
            print(f"RGB            : #{rgb.upper()}")
            print(f"COMMAND        : {payload.hex()}")
            print("-" * 70)

            input("Press ENTER to send...")

            print(f"--> Sending {payload.hex()}")

            await client.write_gatt_char(
                FFF2,
                payload,
                response=False
            )

            print("Waiting 7 seconds...")
            await asyncio.sleep(7)

            observed = input(
                f"What did you actually see for {name}? "
            ).strip()

            results.append(
                (number, name, rgb.upper(), observed)
            )

        print("\n")
        print("=" * 70)
        print("FINAL VERIFICATION")
        print("=" * 70)

        print(
            f"{'TEST':<6}"
            f"{'EXPECTED':<12}"
            f"{'RGB':<10}"
            f"OBSERVED"
        )

        print("-" * 70)

        for number, expected, rgb, observed in results:
            print(
                f"{number:<6}"
                f"{expected:<12}"
                f"#{rgb:<9}"
                f"{observed}"
            )

        print("\nVerification complete.")


if __name__ == "__main__":
    asyncio.run(main())