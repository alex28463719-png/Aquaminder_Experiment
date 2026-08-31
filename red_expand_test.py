import asyncio
import sys
import time
from bleak import BleakClient

FFF2 = "0000fff2-0000-1000-8000-00805f9b34fb"
FFF1 = "0000fff1-0000-1000-8000-00805f9b34fb"

HANDSHAKE = bytes.fromhex("aa016a905bbe")
RED = bytes.fromhex("aa0601ff0000")

STARTUP_WAIT = 18
SEND_INTERVAL = 0.20
TEST_DURATION = 60.0


async def ainput(prompt):
    return await asyncio.to_thread(input, prompt)


async def main():

    if len(sys.argv) < 2:
        print("Usage:")
        print("python red_keepalive_test.py 67:2E:A9:4C:A7:67")
        return

    address = sys.argv[1]

    program_start = time.monotonic()

    def elapsed():
        return time.monotonic() - program_start

    async with BleakClient(address) as client:

        print(f"[{elapsed():.2f}s] Connected: {client.is_connected}")

        def notification_handler(sender, data):
            h = data.hex()

            if h.startswith("bb06"):
                print(
                    f"[{elapsed():.2f}s] <-- ACK_06 {h}"
                )

            elif h.startswith("bb0120"):
                print(
                    f"[{elapsed():.2f}s] <-- DEVICE_INFO {h}"
                )

        await client.start_notify(
            FFF1,
            notification_handler
        )

        # =========================================================
        # HANDSHAKE
        # =========================================================

        print()
        print("=" * 70)
        print("HANDSHAKE")
        print("=" * 70)

        await client.write_gatt_char(
            FFF2,
            HANDSHAKE,
            response=False
        )

        print(
            f"[{elapsed():.2f}s] --> AA 01 6A 90 5B BE"
        )

        await asyncio.sleep(2)

        # =========================================================
        # STARTUP WAIT
        # =========================================================

        print()
        print("=" * 70)
        print("WAITING FOR STARTUP SPECTRUM")
        print("=" * 70)
        print()

        print(f"Waiting {STARTUP_WAIT} seconds...")
        print("Do NOT press anything.")
        print()

        for remaining in range(STARTUP_WAIT, 0, -1):

            print(
                f"\rStartup wait: {remaining:2d}s remaining",
                end="",
                flush=True
            )

            await asyncio.sleep(1)

        print()
        print()
        print("Startup spectrum should now be finished.")

        # =========================================================
        # PREPARE TEST
        # =========================================================

        print()
        print("=" * 70)
        print("RED KEEP-ALIVE TEST")
        print("=" * 70)

        print()
        print("Command:")
        print()
        print("    AA 06 01 FF 00 00")
        print()
        print("Color: RED")
        print()
        print(f"Sending every {SEND_INTERVAL} seconds.")
        print(f"Total sending period: {TEST_DURATION} seconds.")
        print()
        print("During this period:")
        print()
        print("  🔴 The bottle should remain RED.")
        print()
        print("After 30 seconds:")
        print()
        print("  • We STOP sending commands.")
        print("  • Watch the bottle.")
        print("  • When RED finally turns OFF, press ENTER.")
        print()
        print("This tells us whether repeated commands")
        print("continuously reset/extend the ~5.5s timer.")
        print()

        await ainput("Press ENTER to start the test...")

        # =========================================================
        # SEND RED REPEATEDLY
        # =========================================================

        test_start = time.monotonic()
        send_count = 0

        print()
        print("=" * 70)
        print("SENDING RED")
        print("=" * 70)
        print()

        while True:

            now = time.monotonic()
            elapsed_test = now - test_start

            if elapsed_test >= TEST_DURATION:
                break

            send_count += 1

            await client.write_gatt_char(
                FFF2,
                RED,
                response=False
            )

            print(
                f"[{elapsed():.2f}s] "
                f"RED #{send_count} "
                f"(test +{elapsed_test:.2f}s)"
            )

            # Wait until next transmission.
            await asyncio.sleep(SEND_INTERVAL)

        last_send_time = time.monotonic()

        print()
        print("=" * 70)
        print("STOPPED SENDING")
        print("=" * 70)

        print()
        print(f"Total RED commands sent: {send_count}")
        print()
        print("🔴 WATCH THE BOTTLE.")
        print()
        print("NO MORE COMMANDS WILL BE SENT.")
        print()
        print("Wait until the RED light turns OFF.")
        print("Then press ENTER.")
        print()

        await ainput("> ")

        off_time = time.monotonic()

        total_test_time = off_time - test_start
        after_last_command = off_time - last_send_time

        # =========================================================
        # RESULT
        # =========================================================

        print()
        print("=" * 70)
        print("RESULT")
        print("=" * 70)

        print()
        print(f"Commands sent:              {send_count}")
        print(f"Sending period:             {TEST_DURATION:.2f}s")
        print()
        print(
            f"Last command → light OFF:   "
            f"{after_last_command:.2f}s"
        )

        print(
            f"First command → light OFF:  "
            f"{total_test_time:.2f}s"
        )

        print()
        print("=" * 70)
        print("INTERPRETATION")
        print("=" * 70)

        print()

        if after_last_command <= 7:

            print(
                "The light turned OFF approximately "
                "5–7 seconds after the final command."
            )

            print()
            print(
                "This strongly suggests each AA 06 command "
                "resets the normal ~5.5s timer."
            )

            print()
            print(
                "Therefore repeated AA 06 commands can be "
                "used as a keep-alive mechanism."
            )

        else:

            print(
                "The light remained ON significantly longer "
                "than the normal ~5.5s period after the final command."
            )

            print()
            print(
                "This suggests there may be another timing/state "
                "mechanism involved."
            )

        print()


if __name__ == "__main__":
    asyncio.run(main())