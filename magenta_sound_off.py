import asyncio
import sys
import time
from bleak import BleakClient

FFF2 = "0000fff2-0000-1000-8000-00805f9b34fb"
FFF1 = "0000fff1-0000-1000-8000-00805f9b34fb"

STARTUP_WAIT = 18
COLOR = "FF00FF"
NAME = "Aquaminder"


def build_packet():
    # AA 06 [LIGHT] [RGB] [SOUND] 01 [NAME]
    name_hex = NAME[:12].encode("utf-8").hex().upper()
    name_hex = name_hex.ljust(24, "0")

    return bytes.fromhex(
        f"AA0601{COLOR}00 01 {name_hex}".replace(" ", "")
    )


async def main():
    if len(sys.argv) < 2:
        print("Usage:")
        print("python magenta_sound_off.py 67:2E:A9:4C:A7:67")
        return

    address = sys.argv[1]

    async with BleakClient(address) as client:

        print(f"Connected: {client.is_connected}")

        def notify(sender, data):
            print(f"[NOTIFY] {data.hex().upper()}")

        await client.start_notify(FFF1, notify)

        # Time sync
        timestamp = int(time.time())
        sync = bytes.fromhex(
            f"AA01{timestamp:08X}"
        )

        print(f"Time sync: {sync.hex().upper()}")

        await client.write_gatt_char(
            FFF2, sync, response=False
        )

        await asyncio.sleep(1)

        # Startup spectrum
        print()
        print(f"Waiting {STARTUP_WAIT} seconds for startup spectrum...")

        for i in range(STARTUP_WAIT, 0, -1):
            print(
                f"\rStartup wait: {i:2d}s",
                end="",
                flush=True
            )
            await asyncio.sleep(1)

        print()
        print("Startup finished.")

        packet = build_packet()

        print()
        print("=" * 70)
        print("MAGENTA — SOUND OFF")
        print("=" * 70)
        print()
        print(f"Packet: {packet.hex().upper()}")
        print("Color:   MAGENTA (#FF00FF)")
        print("Light:   ON")
        print("Sound:   OFF")
        print()

        input("Press ENTER to send the command...")

        start = time.monotonic()

        await client.write_gatt_char(
            FFF2,
            packet,
            response=False
        )

        print()
        print("MAGENTA SENT.")
        print()
        print("Watch the bottle.")
        print("There should be NO beep.")
        print()
        print("When the MAGENTA light turns OFF, press ENTER.")
        print()

        await asyncio.to_thread(input, "> ")

        duration = time.monotonic() - start

        print()
        print("=" * 70)
        print("RESULT")
        print("=" * 70)
        print()
        print(f"Magenta duration: {duration:.2f} seconds")
        print("Sound: OFF")
        print()


if __name__ == "__main__":
    asyncio.run(main())