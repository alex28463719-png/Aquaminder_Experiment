import asyncio
import sys
import time
import csv
from bleak import BleakClient

FFF2 = "0000fff2-0000-1000-8000-00805f9b34fb"
FFF1 = "0000fff1-0000-1000-8000-00805f9b34fb"

TARGET = sys.argv[1] if len(sys.argv) > 1 else None

REPEATS = 10
STARTUP_WAIT = 30
DISPLAY_WAIT = 6

start_time = None
notifications = []


def elapsed():
    return time.monotonic() - start_time


def classify(data):
    h = data.hex()

    if h == "bb0252":
        return "HEARTBEAT_52"

    if h == "bb0251":
        return "HEARTBEAT_51"

    if h == "bb0600":
        return "ACK_06"

    if h.startswith("bb01"):
        return "DEVICE_INFO"

    if h.startswith("bb04"):
        return "SCHEDULE"

    if h.startswith("bb07"):
        return "ACK_07"

    return "OTHER"


def notification_handler(handle, data):
    data = bytes(data)
    kind = classify(data)

    notifications.append(
        (time.monotonic(), data, kind)
    )

    # Ignore the continuous heartbeat messages.
    if kind in ("HEARTBEAT_51", "HEARTBEAT_52"):
        return

    print(
        f"[{elapsed():7.2f}s] <-- "
        f"{kind:12s} {data.hex()}"
    )


async def async_input(prompt):
    return await asyncio.to_thread(input, prompt)


async def main():

    global start_time

    if TARGET is None:
        print("Usage:")
        print(
            "python repeat_aa0601.py "
            "67:2E:A9:4C:A7:67"
        )
        return

    start_time = time.monotonic()

    results = []

    async with BleakClient(TARGET) as client:

        print()
        print(
            f"[{elapsed():.2f}s] Connected: "
            f"{client.is_connected}"
        )

        await client.start_notify(
            FFF1,
            notification_handler
        )

        print(
            f"[{elapsed():.2f}s] "
            "Subscribed to FFF1."
        )

        # --------------------------------------------------
        # Known handshake
        # --------------------------------------------------

        print()
        print("=" * 70)
        print("SENDING KNOWN HANDSHAKE")
        print("=" * 70)

        handshake = bytes.fromhex(
            "aa016a905bbe"
        )

        print(
            f"[{elapsed():.2f}s] --> "
            f"{handshake.hex()}"
        )

        await client.write_gatt_char(
            FFF2,
            handshake,
            response=False
        )

        await asyncio.sleep(1)

        # --------------------------------------------------
        # Let startup spectrum finish
        # --------------------------------------------------

        print()
        print("=" * 70)
        print("WAITING FOR STARTUP ANIMATION")
        print("=" * 70)

        print(
            f"Waiting {STARTUP_WAIT} seconds..."
        )

        await asyncio.sleep(STARTUP_WAIT)

        print()
        print(
            "Startup animation should now be finished."
        )

        # --------------------------------------------------
        # THE ACTUAL EXPERIMENT
        # --------------------------------------------------

        print()
        print("=" * 70)
        print("AA 06 01 REPEAT TEST")
        print("=" * 70)

        print()
        print(
            f"We will send AA 06 01 exactly "
            f"{REPEATS} times."
        )

        print(
            "There will be a 6-second wait after "
            "each trigger."
        )

        print()
        print(
            "Watch the bottle carefully and enter "
            "the observed color."
        )

        print()

        for run in range(1, REPEATS + 1):

            payload = bytes.fromhex("aa0601")

            notifications.clear()

            print()
            print("#" * 70)
            print(
                f"RUN {run}/{REPEATS}"
            )
            print("#" * 70)

            write_time = time.monotonic()

            print(
                f"[{elapsed():7.2f}s] --> "
                f"AA 06 01"
            )

            await client.write_gatt_char(
                FFF2,
                payload,
                response=False
            )

            # Give ACK time to arrive.
            await asyncio.sleep(1)

            # Look for meaningful responses.
            ack_found = False
            response_list = []

            for timestamp, data, kind in notifications:

                if kind in (
                    "HEARTBEAT_51",
                    "HEARTBEAT_52"
                ):
                    continue

                delta = timestamp - write_time

                response_list.append(
                    (
                        round(delta, 3),
                        kind,
                        data.hex()
                    )
                )

                if kind == "ACK_06":
                    ack_found = True

            print()

            if ack_found:
                print(
                    "ACK: BB 06 00 received"
                )
            else:
                print(
                    "ACK: NOT RECEIVED"
                )

            # --------------------------------------------------
            # Wait for complete light/beep sequence.
            # --------------------------------------------------

            print()
            print(
                f"Waiting {DISPLAY_WAIT} seconds "
                "for the bottle to finish..."
            )

            await asyncio.sleep(DISPLAY_WAIT)

            # --------------------------------------------------
            # Ask user what they saw.
            # --------------------------------------------------

            print()
            color = await async_input(
                f"Observed color for RUN {run}: "
            )

            color = color.strip()

            beep = ""

            # Optional beep information.
            # User can type things like:
            #
            # purple, 3 beeps
            # cyan
            # none
            #
            # We keep exactly what they type.

            results.append({
                "run": run,
                "command": "aa0601",
                "ack": "BB0600" if ack_found else "NONE",
                "response": ";".join(
                    f"{kind}:{data}"
                    for _, kind, data in response_list
                ),
                "observation": color,
            })

        # --------------------------------------------------
        # Save CSV
        # --------------------------------------------------

        filename = "aa0601_results.csv"

        with open(
            filename,
            "w",
            newline="",
            encoding="utf-8"
        ) as f:

            writer = csv.DictWriter(
                f,
                fieldnames=[
                    "run",
                    "command",
                    "ack",
                    "response",
                    "observation",
                ]
            )

            writer.writeheader()
            writer.writerows(results)

        # --------------------------------------------------
        # Final summary
        # --------------------------------------------------

        print()
        print()
        print("=" * 70)
        print("FINAL AA 06 01 RESULTS")
        print("=" * 70)

        print()

        for result in results:

            print(
                f"Run {result['run']:2d}: "
                f"{result['observation']}"
            )

        print()
        print("=" * 70)
        print(
            f"Saved to: {filename}"
        )
        print("=" * 70)

        print()
        print(
            "Experiment complete."
        )


if __name__ == "__main__":
    try:
        asyncio.run(main())

    except KeyboardInterrupt:
        print()
        print("Stopped by user.")