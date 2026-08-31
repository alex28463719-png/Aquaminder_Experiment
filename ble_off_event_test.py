import asyncio
import sys
import time
from bleak import BleakClient

FFF2 = "0000fff2-0000-1000-8000-00805f9b34fb"
FFF1 = "0000fff1-0000-1000-8000-00805f9b34fb"

NAME = "Aquaminder"


def build_magenta_packet():
    name_hex = NAME[:12].encode("utf-8").hex().upper()
    name_hex = name_hex.ljust(24, "0")

    # AA 06 01 FF 00 FF 00 01 [Aquaminder]
    return bytes.fromhex(
        f"AA0601FF00FF0001{name_hex}"
    )


async def main():

    if len(sys.argv) < 2:
        print()
        print("Usage:")
        print(
            "python ble_off_event_test.py "
            "67:2E:A9:4C:A7:67"
        )
        print()
        return

    address = sys.argv[1]

    program_start = time.perf_counter()
    command_sent_time = None

    def elapsed():
        return time.perf_counter() - program_start

    print()
    print("=" * 70)
    print("AQUAMINDER LED OFF-EVENT DIAGNOSTIC")
    print("=" * 70)
    print()
    print("This test will:")
    print("  1. Connect")
    print("  2. NOT send AA01 time sync")
    print("  3. NOT send any other commands")
    print("  4. Wait 18 seconds for startup behavior")
    print("  5. Send ONE magenta AA06 command")
    print("  6. Timestamp every notification")
    print("  7. You press ENTER when the magenta LED actually turns OFF")
    print()
    print("Do NOT press ENTER until the LED visibly turns OFF.")
    print()

    async with BleakClient(address) as client:

        print(
            f"[{elapsed():8.3f}s] Connected: "
            f"{client.is_connected}"
        )

        async def notification_handler(sender, data):
            now = elapsed()

            if command_sent_time is None:
                relative = "before AA06"
            else:
                relative = (
                    f"{now - command_sent_time:7.3f}s "
                    "after AA06"
                )

            print(
                f"\n[{now:8.3f}s] "
                f"RX: {data.hex().upper():<60} "
                f"({relative})"
            )

        await client.start_notify(
            FFF1,
            notification_handler
        )

        print()
        print("Notifications enabled.")
        print()
        print("Waiting 18 seconds for startup behavior...")
        print()

        for i in range(18, 0, -1):
            print(
                f"\rStartup wait: {i:2d}s",
                end="",
                flush=True
            )
            await asyncio.sleep(1)

        print()
        print()
        print("Startup wait finished.")
        print()

        packet = build_magenta_packet()

        print("=" * 70)
        print("SENDING ONE MAGENTA COMMAND")
        print("=" * 70)
        print()
        print(
            f"Packet: {packet.hex().upper()}"
        )
        print("Color:  #FF00FF")
        print("Light:  ON")
        print("Sound:  OFF")
        print()

        input(
            "Press ENTER when ready to send the ONE command..."
        )

        command_sent_time = elapsed()

        print()
        print(
            f"[{command_sent_time:8.3f}s] "
            f"TX: {packet.hex().upper()}"
        )
        print()

        await client.write_gatt_char(
            FFF2,
            packet,
            response=False
        )

        print("=" * 70)
        print("NOW WATCH THE BOTTLE")
        print("=" * 70)
        print()
        print("The magenta light should come on.")
        print()
        print(
            "When the magenta light ACTUALLY TURNS OFF,"
        )
        print(
            "immediately press ENTER."
        )
        print()

        await asyncio.to_thread(
            input,
            "LED OFF → press ENTER: "
        )

        off_time = elapsed()
        duration = off_time - command_sent_time

        print()
        print("=" * 70)
        print("RESULT")
        print("=" * 70)
        print()
        print(
            f"AA06 sent:       "
            f"{command_sent_time:8.3f}s"
        )
        print(
            f"LED OFF pressed: "
            f"{off_time:8.3f}s"
        )
        print(
            f"Measured duration: "
            f"{duration:.3f} seconds"
        )
        print()
        print(
            "Review the RX timestamps above and see "
            "which notification occurred closest to the "
            "actual LED-OFF time."
        )
        print()
        print("Test complete.")


if __name__ == "__main__":
    asyncio.run(main())