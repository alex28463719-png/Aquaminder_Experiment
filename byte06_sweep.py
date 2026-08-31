import asyncio
import sys
import time
import csv
from bleak import BleakClient

FFF2 = "0000fff2-0000-1000-8000-00805f9b34fb"
FFF1 = "0000fff1-0000-1000-8000-00805f9b34fb"

HANDSHAKE = bytes.fromhex("aa016a905bbe")

# ============================================================
# SETTINGS
# ============================================================

STARTUP_WAIT = 25
POST_TEST_WAIT = 2

# Test 00 through 0F
VALUES = range(0x00, 0x10)

# RGB stays FIXED at RED
RGB = bytes.fromhex("ff0000")

RESULT_FILE = "byte06_sweep_results.csv"


async def ainput(prompt):
    return await asyncio.to_thread(input, prompt)


async def main():

    if len(sys.argv) < 2:
        print()
        print("Usage:")
        print()
        print("python byte06_sweep.py 67:2E:A9:4C:A7:67")
        print()
        return

    address = sys.argv[1]

    program_start = time.monotonic()

    def elapsed():
        return time.monotonic() - program_start

    results = []

    # Used to record ACK timing
    ack_events = []
    ack_event = asyncio.Event()

    def notification_handler(sender, data):

        h = data.hex()
        now = elapsed()

        if h.startswith("bb06"):
            print(
                f"[{now:7.2f}s] <-- ACK_06  {h}"
            )

            ack_events.append({
                "time": now,
                "data": h
            })

            ack_event.set()

        elif h.startswith("bb0120"):
            print(
                f"[{now:7.2f}s] <-- DEVICE_INFO  {h}"
            )

        # Ignore the normal heartbeat/status messages.
        # We don't want bb0250/bb0251/bb0252 flooding the screen.

    print()
    print("=" * 72)
    print("AQUAMINDER — AA 06 THIRD-BYTE SWEEP")
    print("=" * 72)
    print()
    print("RGB is FIXED:")
    print()
    print("    FF 00 00 = RED")
    print()
    print("Only this byte will change:")
    print()
    print("    AA 06 XX FF 00 00")
    print()
    print("XX = 00 through 0F")
    print()
    print("Goal:")
    print("  Determine whether XX controls beep, duration,")
    print("  mode/effect, or some other behavior.")
    print()

    async with BleakClient(address) as client:

        print(f"[{elapsed():.2f}s] Connected: {client.is_connected}")

        await client.start_notify(
            FFF1,
            notification_handler
        )

        print(
            f"[{elapsed():.2f}s] Subscribed to FFF1."
        )

        # ====================================================
        # HANDSHAKE
        # ====================================================

        print()
        print("=" * 72)
        print("HANDSHAKE")
        print("=" * 72)

        print(
            f"[{elapsed():.2f}s] --> AA 01 6A 90 5B BE"
        )

        await client.write_gatt_char(
            FFF2,
            HANDSHAKE,
            response=False
        )

        await asyncio.sleep(2)

        # ====================================================
        # STARTUP WAIT
        # ====================================================

        print()
        print("=" * 72)
        print("WAITING FOR STARTUP SPECTRUM")
        print("=" * 72)
        print()

        print(
            f"Waiting {STARTUP_WAIT} seconds."
        )
        print(
            "Do NOT press anything during this time."
        )
        print(
            "Let the complete startup colour spectrum finish."
        )
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

        # ====================================================
        # TEST INFORMATION
        # ====================================================

        print()
        print("=" * 72)
        print("TEST PLAN")
        print("=" * 72)
        print()

        print(
            "Every test uses RED RGB:"
        )

        print(
            "    FF 00 00"
        )

        print()

        print(
            "Only XX changes:"
        )

        print(
            "    AA 06 XX FF 00 00"
        )

        print()

        print(
            "For each test:"
        )
        print(
            "  1. Command is sent once."
        )
        print(
            "  2. Watch the bottle."
        )
        print(
            "  3. When the light turns OFF, press ENTER."
        )
        print(
            "  4. Enter whether it beeped."
        )
        print(
            "  5. Enter any useful observation."
        )

        print()
        print(
            "IMPORTANT: Do NOT press ENTER until the light"
        )
        print(
            "has actually turned OFF."
        )
        print()

        await ainput(
            "Press ENTER when you are ready to begin..."
        )

        # ====================================================
        # SWEEP
        # ====================================================

        for value in VALUES:

            packet = bytes([
                0xAA,
                0x06,
                value,
                0xFF,
                0x00,
                0x00
            ])

            packet_hex = packet.hex()

            print()
            print()
            print("#" * 72)
            print(
                f"TEST XX = 0x{value:02X}"
            )
            print("#" * 72)

            print()
            print(
                f"Command:"
            )
            print()
            print(
                f"    AA 06 {value:02X} FF 00 00"
            )
            print()
            print(
                "RGB: RED"
            )
            print(
                f"XX: 0x{value:02X}"
            )
            print()

            # Clear ACK event
            ack_event.clear()

            send_time = time.monotonic()

            print(
                f"[{elapsed():.2f}s] --> "
                f"AA 06 {value:02X} FF 00 00"
            )

            await client.write_gatt_char(
                FFF2,
                packet,
                response=False
            )

            # Wait briefly for ACK
            try:
                await asyncio.wait_for(
                    ack_event.wait(),
                    timeout=1.5
                )
            except asyncio.TimeoutError:
                pass

            ack_time = None

            for event in reversed(ack_events):

                if event["time"] >= elapsed() - 2:

                    ack_time = event["time"]
                    break

            if ack_time is not None:

                print()
                print(
                    f"ACK received after "
                    f"{ack_time - elapsed() + 0:.3f}s "
                    f"(approximately)"
                )

            else:

                print()
                print(
                    "No BB06 ACK detected."
                )

            # =================================================
            # MANUAL OBSERVATION
            # =================================================

            print()
            print("WATCH THE BOTTLE.")
            print()
            print(
                "Wait until the RED light turns OFF."
            )
            print()

            observation_start = time.monotonic()

            user_input = await ainput(
                "When OFF, press ENTER. "
                "If nothing happened, type NONE: "
            )

            observation_end = time.monotonic()

            duration = (
                observation_end -
                observation_start
            )

            observation = user_input.strip()

            if not observation:
                observation = "light off"

            print()
            print(
                f"Measured observation time: "
                f"{duration:.2f}s"
            )

            # =================================================
            # EXTRA BEEP INFORMATION
            # =================================================

            beep = await ainput(
                "Beep? (yes/no/unknown): "
            )

            notes = await ainput(
                "Additional notes (optional): "
            )

            results.append({
                "XX": f"{value:02X}",
                "Command": packet_hex.upper(),
                "RGB": "FF0000",
                "Duration": f"{duration:.2f}",
                "Beep": beep.strip(),
                "Observation": observation,
                "Notes": notes.strip()
            })

            # =================================================
            # BETWEEN TESTS
            # =================================================

            if value != 0x0F:

                print()
                print(
                    f"Waiting {POST_TEST_WAIT}s "
                    f"before next test..."
                )

                await asyncio.sleep(POST_TEST_WAIT)

    # ========================================================
    # SAVE RESULTS
    # ========================================================

    with open(
        RESULT_FILE,
        "w",
        newline="",
        encoding="utf-8"
    ) as f:

        writer = csv.DictWriter(
            f,
            fieldnames=[
                "XX",
                "Command",
                "RGB",
                "Duration",
                "Beep",
                "Observation",
                "Notes"
            ]
        )

        writer.writeheader()
        writer.writerows(results)

    # ========================================================
    # SUMMARY
    # ========================================================

    print()
    print()
    print("=" * 72)
    print("FINAL RESULTS")
    print("=" * 72)
    print()

    print(
        "XX     COMMAND                 DURATION   BEEP     OBSERVATION"
    )
    print("-" * 72)

    for r in results:

        print(
            f"{r['XX']:>4}   "
            f"{r['Command']:<24} "
            f"{r['Duration']:>7}s   "
            f"{r['Beep']:<8} "
            f"{r['Observation']}"
        )

    print()
    print("=" * 72)
    print()
    print(
        f"Saved to: {RESULT_FILE}"
    )
    print()


if __name__ == "__main__":
    asyncio.run(main())