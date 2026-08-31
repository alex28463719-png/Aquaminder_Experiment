import asyncio
import sys
import time
from bleak import BleakClient

FFF2 = "0000fff2-0000-1000-8000-00805f9b34fb"
FFF1 = "0000fff1-0000-1000-8000-00805f9b34fb"

TARGET = sys.argv[1] if len(sys.argv) > 1 else None

STARTUP_WAIT = 30
DISPLAY_WAIT = 6

notifications = []
start_time = None


def now():
    return time.monotonic() - start_time


def classify(data):
    h = data.hex()

    if h == "bb0252":
        return "HEARTBEAT_52"

    if h == "bb0251":
        return "HEARTBEAT_51"

    if h.startswith("bb0600"):
        return "ACK_06"

    if h.startswith("bb0500"):
        return "ACK_05"

    if h.startswith("bb01"):
        return "DEVICE_INFO"

    if h.startswith("bb04"):
        return "SCHEDULE"

    if h.startswith("bb07"):
        return "ACK_07"

    return "OTHER"


def on_notify(handle, data):
    data = bytes(data)
    kind = classify(data)

    notifications.append((time.monotonic(), data, kind))

    # Don't spam the console with the ~1 second heartbeat.
    if kind.startswith("HEARTBEAT"):
        return

    print(
        f"[{now():7.2f}s] <-- {kind:12s} {data.hex()}"
    )


async def send(client, payload, label):
    notifications.clear()

    print()
    print("=" * 70)
    print(f"SENDING: {label}")
    print(f"HEX:     {payload.hex()}")
    print("=" * 70)

    t0 = time.monotonic()

    await client.write_gatt_char(
        FFF2,
        payload,
        response=False
    )

    # Watch specifically for 1 second after the write.
    await asyncio.sleep(1.0)

    relevant = []

    for ts, data, kind in notifications:
        delta = ts - t0

        if kind.startswith("HEARTBEAT"):
            continue

        relevant.append((delta, kind, data.hex()))

    if relevant:
        print("\nImmediate response(s):")

        for delta, kind, value in relevant:
            print(
                f"  +{delta:.3f}s  {kind:12s} {value}"
            )
    else:
        print("\nImmediate response: NONE")

    return relevant


async def wait_for_user(prompt):
    return await asyncio.to_thread(input, prompt)


async def test_index(client, index):
    payload = bytes([0xAA, 0x06, index])

    await send(
        client,
        payload,
        f"AA 06 {index:02X}"
    )

    print(
        f"\nWait {DISPLAY_WAIT}s so the bottle can finish "
        f"its ~4-5 second light/beep sequence."
    )

    await asyncio.sleep(DISPLAY_WAIT)

    color = await wait_for_user(
        f"\nCOLOR for index 0x{index:02X}? "
        "(type color, or 'none'): "
    )

    return color.strip()


async def main():

    global start_time

    if not TARGET:
        print("Usage:")
        print(
            "python diagnostic_06.py "
            "67:2E:A9:4C:A7:67"
        )
        return

    start_time = time.monotonic()

    async with BleakClient(TARGET) as client:

        print(
            f"[{now():.2f}s] Connected: "
            f"{client.is_connected}"
        )

        await client.start_notify(
            FFF1,
            on_notify
        )

        print(
            f"[{now():.2f}s] Notifications enabled."
        )

        # ---------------------------------------------------------
        # HANDSHAKE
        # ---------------------------------------------------------

        print("\nSending known handshake:")
        print("AA 01 6A 90 5B BE")

        await client.write_gatt_char(
            FFF2,
            bytes.fromhex("aa016a905bbe"),
            response=False
        )

        # ---------------------------------------------------------
        # STARTUP ANIMATION
        # ---------------------------------------------------------

        print()
        print("=" * 70)
        print(
            f"WAITING {STARTUP_WAIT}s FOR STARTUP "
            "COLOR ANIMATION TO FINISH"
        )
        print("=" * 70)

        await asyncio.sleep(STARTUP_WAIT)

        print(
            "\nStartup wait finished."
        )

        print(
            "We now begin controlled AA 06 tests."
        )

        # ---------------------------------------------------------
        # PASS 1
        # ---------------------------------------------------------

        indexes = [
            0x00,
            0x01,
            0x02,
            0x03,
            0x04,
            0x05,
            0x06,
            0x07,
        ]

        results = []

        print()
        print("=" * 70)
        print("PASS 1")
        print("=" * 70)

        for index in indexes:

            color = await test_index(
                client,
                index
            )

            results.append(
                (1, index, color)
            )

        # ---------------------------------------------------------
        # PASS 2
        # ---------------------------------------------------------

        print()
        print("=" * 70)
        print("PASS 2")
        print("Same indexes, same order, fresh observations.")
        print("=" * 70)

        for index in indexes:

            color = await test_index(
                client,
                index
            )

            results.append(
                (2, index, color)
            )

        # ---------------------------------------------------------
        # SUMMARY
        # ---------------------------------------------------------

        print()
        print()
        print("=" * 70)
        print("RESULT SUMMARY")
        print("=" * 70)

        print(
            f"{'INDEX':<8} {'PASS 1':<20} {'PASS 2':<20}"
        )

        print("-" * 70)

        for index in indexes:

            p1 = next(
                (
                    color
                    for p, i, color in results
                    if p == 1 and i == index
                ),
                "?"
            )

            p2 = next(
                (
                    color
                    for p, i, color in results
                    if p == 2 and i == index
                ),
                "?"
            )

            print(
                f"0x{index:02X}    "
                f"{p1:<20} "
                f"{p2:<20}"
            )

        print()
        print("Interpretation:")
        print()
        print(
            "If the same index repeatedly produces the same "
            "color -> index is probably meaningful."
        )
        print()
        print(
            "If colors move through a sequence regardless "
            "of index -> bottle probably has an internal "
            "color/state counter."
        )

        print()
        print("Disconnecting...")


if __name__ == "__main__":
    asyncio.run(main())