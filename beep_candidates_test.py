import asyncio
import sys
import time
import csv
from bleak import BleakClient

FFF2 = "0000fff2-0000-1000-8000-00805f9b34fb"
FFF1 = "0000fff1-0000-1000-8000-00805f9b34fb"

HANDSHAKE = bytes.fromhex("aa016a905bbe")

# Candidates that produced NO BEEP in the previous sweep
CANDIDATES = [
    0x00,
    0x02,
    0x04,
    0x06,
    0x0A,
    0x0B,
    0x0E,
    0x0F,
]

RUNS_PER_VALUE = 5

STARTUP_WAIT = 25
BETWEEN_TESTS = 2

RGB = bytes.fromhex("ff0000")

RESULT_FILE = "beep_candidates_results.csv"


async def ainput(prompt):
    return await asyncio.to_thread(input, prompt)


async def main():

    if len(sys.argv) < 2:
        print()
        print("Usage:")
        print()
        print("python beep_candidates_test.py 67:2E:A9:4C:A7:67")
        print()
        return

    address = sys.argv[1]

    program_start = time.monotonic()

    def elapsed():
        return time.monotonic() - program_start

    results = []

    ack_event = asyncio.Event()

    def notification_handler(sender, data):

        h = data.hex()
        now = elapsed()

        if h.startswith("bb06"):
            print(
                f"[{now:7.2f}s] <-- ACK_06 {h}"
            )
            ack_event.set()

        elif h.startswith("bb0120"):
            print(
                f"[{now:7.2f}s] <-- DEVICE_INFO {h}"
            )

        # Ignore bb0250/bb0251/bb0252 heartbeat messages.

    print()
    print("=" * 72)
    print("AQUAMINDER — BEEP CANDIDATE TEST")
    print("=" * 72)
    print()
    print("RGB is FIXED to RED:")
    print()
    print("    FF 00 00")
    print()
    print("Testing only the third byte:")
    print()
    print("    AA 06 XX FF 00 00")
    print()
    print("Candidates:")
    print()
    print("    00  02  04  06  0A  0B  0E  0F")
    print()
    print(f"Each value will be tested {RUNS_PER_VALUE} times.")
    print()
    print("Goal:")
    print("  Find a value that consistently produces")
    print("  RED without the bottle beeping.")
    print()

    async with BleakClient(address) as client:

        print(
            f"[{elapsed():.2f}s] Connected: {client.is_connected}"
        )

        await client.start_notify(
            FFF1,
            notification_handler
        )

        print(
            f"[{elapsed():.2f}s] Subscribed to FFF1."
        )

        # =====================================================
        # HANDSHAKE
        # =====================================================

        print()
        print("=" * 72)
        print("HANDSHAKE")
        print("=" * 72)

        print(
            f"[{elapsed():.2f}s] --> "
            "AA 01 6A 90 5B BE"
        )

        await client.write_gatt_char(
            FFF2,
            HANDSHAKE,
            response=False
        )

        await asyncio.sleep(2)

        # =====================================================
        # STARTUP WAIT
        # =====================================================

        print()
        print("=" * 72)
        print("WAITING FOR STARTUP SPECTRUM")
        print("=" * 72)
        print()

        print(
            f"Waiting {STARTUP_WAIT} seconds..."
        )
        print(
            "Do NOT press anything."
        )
        print(
            "Let the entire startup colour spectrum finish."
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
        print("Startup spectrum finished.")

        # =====================================================
        # READY
        # =====================================================

        print()
        print("=" * 72)
        print("READY")
        print("=" * 72)
        print()
        print(
            "For every test the RGB will be RED."
        )
        print()
        print(
            "Only XX changes."
        )
        print()
        print(
            "When the light turns OFF, press ENTER."
        )
        print(
            "Then enter whether it beeped."
        )
        print()

        await ainput(
            "Press ENTER to begin..."
        )

        # =====================================================
        # TEST LOOP
        # =====================================================

        test_number = 0

        for value in CANDIDATES:

            print()
            print()
            print("#" * 72)
            print(
                f"TESTING XX = 0x{value:02X}"
            )
            print("#" * 72)
            print()

            print(
                f"Packet:"
            )
            print()
            print(
                f"    AA 06 {value:02X} FF 00 00"
            )
            print()

            for run in range(1, RUNS_PER_VALUE + 1):

                test_number += 1

                packet = bytes([
                    0xAA,
                    0x06,
                    value,
                    0xFF,
                    0x00,
                    0x00
                ])

                print()
                print("-" * 72)
                print(
                    f"TEST {test_number} | "
                    f"XX = 0x{value:02X} | "
                    f"RUN {run}/{RUNS_PER_VALUE}"
                )
                print("-" * 72)

                print()

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

                # Wait for ACK
                try:

                    await asyncio.wait_for(
                        ack_event.wait(),
                        timeout=1.5
                    )

                except asyncio.TimeoutError:

                    print(
                        "No BB0600 ACK received."
                    )

                ack_delay = (
                    time.monotonic() - send_time
                )

                print(
                    f"ACK wait: {ack_delay:.3f}s"
                )

                # =================================================
                # OBSERVE
                # =================================================

                print()
                print("WATCH THE BOTTLE.")
                print()
                print("Expected color: RED")
                print()
                print(
                    "Wait until the RED light turns OFF."
                )
                print()

                observation_start = time.monotonic()

                await ainput(
                    "Press ENTER when the light is OFF..."
                )

                observation_end = time.monotonic()

                duration = (
                    observation_end -
                    observation_start
                )

                print()
                print(
                    f"Measured observation time: "
                    f"{duration:.2f}s"
                )

                # =================================================
                # BEEP
                # =================================================

                beep = await ainput(
                    "Did it beep? (yes/no/unknown): "
                )

                notes = await ainput(
                    "Notes (optional): "
                )

                results.append({
                    "XX": f"{value:02X}",
                    "Run": run,
                    "Command": (
                        f"AA06{value:02X}FF0000"
                    ),
                    "Duration": f"{duration:.2f}",
                    "Beep": beep.strip(),
                    "Notes": notes.strip()
                })

                # =================================================
                # BETWEEN RUNS
                # =================================================

                if run < RUNS_PER_VALUE:

                    print()
                    print(
                        f"Waiting {BETWEEN_TESTS}s..."
                    )

                    await asyncio.sleep(
                        BETWEEN_TESTS
                    )

            # =====================================================
            # SUMMARY FOR THIS XX
            # =====================================================

            subset = [
                r for r in results
                if r["XX"] == f"{value:02X}"
            ]

            print()
            print("=" * 72)
            print(
                f"SUMMARY FOR XX = 0x{value:02X}"
            )
            print("=" * 72)

            for r in subset:

                print(
                    f"Run {r['Run']}: "
                    f"{r['Duration']}s | "
                    f"Beep={r['Beep']} | "
                    f"{r['Notes']}"
                )

    # ==========================================================
    # SAVE CSV
    # ==========================================================

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
                "Run",
                "Command",
                "Duration",
                "Beep",
                "Notes"
            ]
        )

        writer.writeheader()
        writer.writerows(results)

    # ==========================================================
    # FINAL SUMMARY
    # ==========================================================

    print()
    print()
    print("=" * 72)
    print("FINAL RESULTS")
    print("=" * 72)
    print()

    print(
        "XX     RUN   DURATION    BEEP       NOTES"
    )

    print("-" * 72)

    for r in results:

        print(
            f"{r['XX']:>4}   "
            f"{r['Run']:>3}   "
            f"{r['Duration']:>7}s   "
            f"{r['Beep']:<10} "
            f"{r['Notes']}"
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