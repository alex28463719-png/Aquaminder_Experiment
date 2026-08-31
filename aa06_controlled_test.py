import asyncio
import sys
import time
import csv
from bleak import BleakClient

FFF2 = "0000fff2-0000-1000-8000-00805f9b34fb"
FFF1 = "0000fff1-0000-1000-8000-00805f9b34fb"

DISPLAY_WAIT = 6
REPEATS = 5

# Test the SAME value repeatedly before moving to the next.
TEST_VALUES = [
    0x00,
    0x01,
    0x02,
]

notifications = []
start_time = None


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
        (
            time.monotonic(),
            data,
            kind
        )
    )

    # Only display meaningful responses.
    # Do NOT spam the console with BB0251/BB0252.
    if kind not in ("HEARTBEAT_51", "HEARTBEAT_52"):
        print(
            f"[{elapsed():7.2f}s] <-- "
            f"{kind:12s} {data.hex()}"
        )


async def async_input(prompt):
    return await asyncio.to_thread(input, prompt)


async def send_test(client, value, run_number):

    global notifications

    notifications.clear()

    payload = bytes([
        0xAA,
        0x06,
        value
    ])

    print()
    print("=" * 70)
    print(
        f"TEST {run_number}    "
        f"AA 06 {value:02X}"
    )
    print("=" * 70)

    write_time = time.monotonic()

    print(
        f"[{elapsed():7.2f}s] --> writing "
        f"{payload.hex()}"
    )

    await client.write_gatt_char(
        FFF2,
        payload,
        response=False
    )

    # Give the bottle time to send its immediate ACK.
    await asyncio.sleep(1.0)

    # Find meaningful responses after this write.
    responses = []

    for timestamp, data, kind in notifications:

        if kind in (
            "HEARTBEAT_51",
            "HEARTBEAT_52"
        ):
            continue

        responses.append(
            (
                timestamp - write_time,
                kind,
                data.hex()
            )
        )

    print()

    if responses:
        print("Response to this write:")

        for delta, kind, data in responses:
            print(
                f"  +{delta:.3f}s  "
                f"{kind:12s} "
                f"{data}"
            )
    else:
        print(
            "Response to this write: NONE"
        )

    # Wait long enough for the bottle's light
    # and three-beep sequence to completely finish.
    print()
    print(
        f"Waiting {DISPLAY_WAIT}s for "
        "light/beep sequence to finish..."
    )

    await asyncio.sleep(DISPLAY_WAIT)

    color = await async_input(
        f"\nObserved color for "
        f"AA 06 {value:02X}, run {run_number}: "
    )

    return {
        "run": run_number,
        "index": f"{value:02X}",
        "command": payload.hex(),
        "ack": any(
            kind == "ACK_06"
            for _, kind, _ in responses
        ),
        "response": ";".join(
            f"{kind}:{data}"
            for _, kind, data in responses
        ),
        "color": color.strip(),
    }


async def main():

    global start_time

    if len(sys.argv) < 2:
        print(
            "Usage:\n"
            "python aa06_controlled_test.py "
            "67:2E:A9:4C:A7:67"
        )
        return

    address = sys.argv[1]

    start_time = time.monotonic()

    results = []

    async with BleakClient(address) as client:

        print(
            f"[{elapsed():.2f}s] Connected: "
            f"{client.is_connected}"
        )

        # ------------------------------------------------------
        # Subscribe to FFF1
        # ------------------------------------------------------

        await client.start_notify(
            FFF1,
            notification_handler
        )

        print(
            f"[{elapsed():.2f}s] "
            "Subscribed to FFF1."
        )

        # ------------------------------------------------------
        # Known handshake
        # ------------------------------------------------------

        print()
        print("=" * 70)
        print("Sending known handshake")
        print("AA 01 6A 90 5B BE")
        print("=" * 70)

        await client.write_gatt_char(
            FFF2,
            bytes.fromhex(
                "aa016a905bbe"
            ),
            response=False
        )

        # ------------------------------------------------------
        # IMPORTANT:
        #
        # The bottle automatically runs its spectrum animation
        # after connection. Give it enough time to finish.
        # ------------------------------------------------------

        print()
        print("=" * 70)
        print("WAITING 30 SECONDS FOR STARTUP ANIMATION")
        print("=" * 70)

        await asyncio.sleep(30)

        print()
        print(
            "Startup animation should now be finished."
        )

        print()
        print("=" * 70)
        print("CONTROLLED AA 06 TEST")
        print("=" * 70)

        print(
            "\nEach value will be sent 5 times."
        )

        print(
            "There will be a 6-second wait after "
            "every trigger."
        )

        print(
            "\nTest groups:"
        )

        print(
            "  AA 06 00  x5"
        )

        print(
            "  AA 06 01  x5"
        )

        print(
            "  AA 06 02  x5"
        )

        print()

        run_number = 1

        # ------------------------------------------------------
        # Controlled experiment
        # ------------------------------------------------------

        for value in TEST_VALUES:

            print()
            print("#" * 70)
            print(
                f"STARTING GROUP: AA 06 {value:02X}"
            )
            print("#" * 70)

            for repetition in range(1, REPEATS + 1):

                result = await send_test(
                    client,
                    value,
                    run_number
                )

                result["repetition"] = repetition

                results.append(result)

                run_number += 1

        # ------------------------------------------------------
        # Save CSV
        # ------------------------------------------------------

        output_file = "aa06_results.csv"

        with open(
            output_file,
            "w",
            newline="",
            encoding="utf-8"
        ) as f:

            writer = csv.DictWriter(
                f,
                fieldnames=[
                    "run",
                    "repetition",
                    "index",
                    "command",
                    "ack",
                    "response",
                    "color",
                ]
            )

            writer.writeheader()

            writer.writerows(results)

        # ------------------------------------------------------
        # Final summary
        # ------------------------------------------------------

        print()
        print()
        print("=" * 70)
        print("FINAL RESULT")
        print("=" * 70)

        print()

        for value in TEST_VALUES:

            group = [
                r for r in results
                if r["index"] == f"{value:02X}"
            ]

            print(
                f"AA 06 {value:02X}"
            )

            for r in group:

                print(
                    f"  Run {r['repetition']}: "
                    f"{r['color']}"
                )

            print()

        print("=" * 70)
        print(
            f"Results saved to: {output_file}"
        )
        print("=" * 70)


if __name__ == "__main__":
    asyncio.run(main())