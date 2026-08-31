import asyncio
import sys
import time
from bleak import BleakClient
from bleak.exc import BleakError

FFF2 = "0000fff2-0000-1000-8000-00805f9b34fb"
FFF1 = "0000fff1-0000-1000-8000-00805f9b34fb"

HANDSHAKE = bytes.fromhex("aa016a905bbe")

# AA 05 01 + RGB
# Magenta = FF 00 FF
MAGENTA = bytes.fromhex("aa0501ff00ff")

STARTUP_WAIT = 25.0
SEND_INTERVAL = 0.2
TEST_DURATION = 60.0


async def main():

    if len(sys.argv) < 2:
        print("Usage:")
        print(
            "python test_aa05_magenta.py "
            "67:2E:A9:4C:A7:67"
        )
        return

    address = sys.argv[1]

    program_start = time.monotonic()

    def elapsed():
        return time.monotonic() - program_start

    print()
    print("=" * 70)
    print("AQUAMINDER — AA 05 MAGENTA TEST")
    print("=" * 70)
    print()

    print("Command:")
    print("    AA 05 01 FF 00 FF")
    print()
    print("RGB:")
    print("    FF 00 FF = MAGENTA")
    print()
    print(f"Startup wait:   {STARTUP_WAIT:.0f}s")
    print(f"Send interval:  {SEND_INTERVAL:.2f}s")
    print(f"Test duration:  {TEST_DURATION:.0f}s")
    print()

    try:

        async with BleakClient(address) as client:

            print(
                f"[{elapsed():6.2f}s] "
                f"Connected: {client.is_connected}"
            )

            # ----------------------------------------------------
            # Notifications
            # ----------------------------------------------------

            def notification_handler(sender, data):

                h = data.hex()

                # ACK for command 05
                if h.startswith("bb05"):
                    print(
                        f"[{elapsed():6.2f}s] "
                        f"<-- ACK_05 {h}"
                    )

                # Device information
                elif h.startswith("bb0120"):
                    print(
                        f"[{elapsed():6.2f}s] "
                        f"<-- DEVICE_INFO {h}"
                    )

                # Ignore BB0251 / BB0252 heartbeat

            await client.start_notify(
                FFF1,
                notification_handler
            )

            print(
                f"[{elapsed():6.2f}s] "
                "Subscribed to FFF1."
            )

            # ====================================================
            # HANDSHAKE
            # ====================================================

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
                f"[{elapsed():6.2f}s] "
                "--> AA 01 6A 90 5B BE"
            )

            await asyncio.sleep(2)

            # ====================================================
            # STARTUP WAIT
            # ====================================================

            print()
            print("=" * 70)
            print("WAITING FOR STARTUP SPECTRUM")
            print("=" * 70)
            print()

            print(
                f"Waiting {STARTUP_WAIT:.0f} seconds..."
            )
            print(
                "Do NOT press anything during this period."
            )
            print()

            end_wait = (
                time.monotonic() +
                STARTUP_WAIT
            )

            while True:

                remaining = (
                    end_wait -
                    time.monotonic()
                )

                if remaining <= 0:
                    break

                print(
                    f"\rStartup wait: "
                    f"{remaining:5.1f}s remaining",
                    end="",
                    flush=True
                )

                await asyncio.sleep(
                    min(1.0, remaining)
                )

            print()
            print()
            print("Startup spectrum finished.")

            # ====================================================
            # TEST
            # ====================================================

            print()
            print("=" * 70)
            print("STARTING AA 05 MAGENTA TEST")
            print("=" * 70)
            print()

            print(
                "The script will repeatedly send:"
            )
            print()
            print(
                "    AA 05 01 FF 00 FF"
            )
            print()
            print(
                "    every 0.2 seconds"
            )
            print(
                "    for 60 seconds"
            )
            print()

            print(
                "Watch the bottle carefully."
            )

            print()

            input(
                "Press ENTER to start the test..."
            )

            # ----------------------------------------------------
            # Start test
            # ----------------------------------------------------

            test_start = time.monotonic()

            next_send = test_start

            send_count = 0
            ack_count = 0

            disconnected = False

            print()
            print("=" * 70)
            print("SENDING AA 05 MAGENTA")
            print("=" * 70)
            print()

            while True:

                now = time.monotonic()

                test_elapsed = (
                    now -
                    test_start
                )

                if test_elapsed >= TEST_DURATION:
                    break

                # Check connection

                if not client.is_connected:

                    print()
                    print(
                        f"[{elapsed():6.2f}s] "
                        "!!! BLE CONNECTION LOST !!!"
                    )

                    disconnected = True
                    break

                # ------------------------------------------------
                # Send MAGENTA
                # ------------------------------------------------

                try:

                    await client.write_gatt_char(
                        FFF2,
                        MAGENTA,
                        response=False
                    )

                    send_count += 1

                    print(
                        f"[{elapsed():6.2f}s] "
                        f"MAGENTA #{send_count:03d} "
                        f"(+{test_elapsed:5.2f}s)"
                    )

                except BleakError as e:

                    print()
                    print(
                        f"[{elapsed():6.2f}s] "
                        f"WRITE FAILED: {e}"
                    )

                    disconnected = True
                    break

                # ------------------------------------------------
                # Fixed-rate scheduling
                # ------------------------------------------------

                next_send += SEND_INTERVAL

                delay = (
                    next_send -
                    time.monotonic()
                )

                if delay > 0:
                    await asyncio.sleep(delay)

            actual_duration = (
                time.monotonic() -
                test_start
            )

            # ====================================================
            # RESULTS
            # ====================================================

            print()
            print("=" * 70)

            if disconnected:
                print("TEST STOPPED — BLE DISCONNECTED")
            else:
                print("TEST COMPLETE")
            
            print("=" * 70)
            print()

            print(
                f"Commands successfully sent: "
                f"{send_count}"
            )

            print(
                f"Actual test duration: "
                f"{actual_duration:.2f}s"
            )

            if actual_duration > 0:

                actual_rate = (
                    send_count /
                    actual_duration
                )

                print(
                    f"Actual send rate: "
                    f"{actual_rate:.2f} writes/sec"
                )

            print()

            print("=" * 70)
            print("OBSERVATION")
            print("=" * 70)
            print()

            print(
                "Record what happened to the bottle:"
            )
            print()
            print("  • Did it turn MAGENTA?")
            print("  • Did it remain continuously MAGENTA?")
            print("  • Did it beep?")
            print("  • Did it beep repeatedly?")
            print("  • Did the light turn OFF despite the writes?")
            print("  • Did the BLE connection drop?")
            print()

    except BleakError as e:

        print()
        print("=" * 70)
        print("BLE ERROR")
        print("=" * 70)
        print()
        print(e)
        print()
        print(
            "Make sure the bottle is powered on "
            "and visible in a BLE scan."
        )


if __name__ == "__main__":
    asyncio.run(main())