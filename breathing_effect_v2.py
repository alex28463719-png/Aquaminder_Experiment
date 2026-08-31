#!/usr/bin/env python3

import argparse
import asyncio
import math
import sys
import time

from bleak import BleakClient
from bleak.exc import BleakError


FFF2 = "0000fff2-0000-1000-8000-00805f9b34fb"

NAME = "Aquaminder"
NAME_HEX = NAME.encode("utf-8").hex().upper().ljust(24, "0")


# ============================================================
# SETTINGS
# ============================================================

STARTUP_WAIT = 18.0

# Conservative first test:
# 6 writes / 6 seconds = 1 write/sec
PERIOD = 6.0
STEPS = 6

MIN_LEVEL = 0.15
GAMMA = 1.8


# ============================================================
# PACKET
# ============================================================

def build_packet(r, g, b, sound=0, light=1):

    hex_string = (
        f"AA06"
        f"0{light}"
        f"{r:02X}{g:02X}{b:02X}"
        f"0{sound}"
        f"01"
        f"{NAME_HEX}"
    )

    return bytes.fromhex(hex_string)


# ============================================================
# BREATHING CURVE
# ============================================================

def build_breathing_levels(
    steps=STEPS,
    min_level=MIN_LEVEL,
    gamma=GAMMA
):

    levels = []

    for i in range(steps):

        phase = i / steps

        # Smooth 0 -> 1 -> 0 curve
        raw = (
            1.0 -
            math.cos(2.0 * math.pi * phase)
        ) / 2.0

        # Gamma correction
        level = (
            min_level +
            (1.0 - min_level) *
            (raw ** gamma)
        )

        levels.append(level)

    return levels


# ============================================================
# SEND AA06
# ============================================================

async def send_color(client, r, g, b):

    packet = build_packet(
        r,
        g,
        b,
        sound=0,
        light=1
    )

    await client.write_gatt_char(
        FFF2,
        packet,
        response=False
    )

    print(
        f"[{time.monotonic():.3f}] "
        f"RGB #{r:02X}{g:02X}{b:02X} "
        f"| {packet.hex().upper()}"
    )


# ============================================================
# BREATHING
# ============================================================

async def breathing(
    client,
    rgb,
    duration,
    period,
    steps,
    min_level,
    gamma
):

    levels = build_breathing_levels(
        steps,
        min_level,
        gamma
    )

    interval = period / steps

    print()
    print("=" * 60)
    print("MAGENTA BREATHING")
    print("=" * 60)

    print(
        f"Cycle:       {period:.2f}s"
    )

    print(
        f"Steps:       {steps}"
    )

    print(
        f"Write rate:  1 every {interval:.2f}s"
    )

    print(
        f"Minimum:     {min_level:.2f}"
    )

    print(
        f"Duration:    {duration:.1f}s"
    )

    print("=" * 60)
    print()

    start = time.monotonic()

    step = 0

    while True:

        elapsed = time.monotonic() - start

        if elapsed >= duration:
            break

        level = levels[step % steps]

        r = round(rgb[0] * level)
        g = round(rgb[1] * level)
        b = round(rgb[2] * level)

        try:

            await send_color(
                client,
                r,
                g,
                b
            )

        except BleakError as e:

            print()
            print("=" * 60)
            print("BLE CONNECTION LOST")
            print("=" * 60)
            print(e)
            print()

            return False

        step += 1

        # Absolute timing rather than simply:
        # send -> sleep -> send -> sleep
        #
        # This prevents small delays from accumulating.
        target = start + step * interval

        delay = target - time.monotonic()

        if delay > 0:
            await asyncio.sleep(delay)

    print()
    print("Breathing finished.")

    return True


# ============================================================
# STARTUP WAIT
# ============================================================

async def startup_wait():

    print()
    print("=" * 60)
    print("STARTUP WAIT")
    print("=" * 60)

    print()
    print(
        "Connected to bottle."
    )

    print(
        "No AA01."
    )

    print(
        "No AA06."
    )

    print(
        "No notifications."
    )

    print()
    print(
        "Waiting 18 seconds so the bottle's"
    )

    print(
        "native startup spectrum can finish..."
    )

    print()

    end = time.monotonic() + STARTUP_WAIT

    while True:

        remaining = end - time.monotonic()

        if remaining <= 0:
            break

        print(
            f"\rStartup remaining: "
            f"{remaining:5.1f}s",
            end="",
            flush=True
        )

        await asyncio.sleep(0.1)

    print()
    print()
    print("Startup period finished.")


# ============================================================
# MAIN
# ============================================================

async def main():

    parser = argparse.ArgumentParser()

    parser.add_argument(
        "address"
    )

    parser.add_argument(
        "--color",
        default="FF00FF"
    )

    parser.add_argument(
        "--period",
        type=float,
        default=PERIOD
    )

    parser.add_argument(
        "--steps",
        type=int,
        default=STEPS
    )

    parser.add_argument(
        "--min-level",
        type=float,
        default=MIN_LEVEL
    )

    parser.add_argument(
        "--gamma",
        type=float,
        default=GAMMA
    )

    parser.add_argument(
        "--duration",
        type=float,
        default=30.0
    )

    args = parser.parse_args()

    rgb = tuple(
        int(args.color[i:i + 2], 16)
        for i in (0, 2, 4)
    )

    interval = args.period / args.steps

    print()
    print("=" * 60)
    print("AQUAMINDER BREATHING TEST")
    print("=" * 60)

    print()
    print(
        f"Color:       #{args.color.upper()}"
    )

    print(
        f"Cycle:       {args.period:.2f}s"
    )

    print(
        f"Steps:       {args.steps}"
    )

    print(
        f"Write rate:  1 every {interval:.2f}s"
    )

    print(
        f"Duration:    {args.duration:.1f}s"
    )

    print()

    print(
        f"Connecting to {args.address}..."
    )

    try:

        async with BleakClient(args.address) as client:

            print(
                f"Connected: {client.is_connected}"
            )

            # ------------------------------------------------
            # IMPORTANT:
            #
            # No notification subscription.
            # No AA01.
            # No AA06.
            #
            # Just wait.
            # ------------------------------------------------

            await startup_wait()

            print()
            print("=" * 60)
            print("READY")
            print("=" * 60)

            print()
            print(
                "Press ENTER to start breathing."
            )

            await asyncio.to_thread(
                input
            )

            print()
            print(
                "Starting software breathing..."
            )

            success = await breathing(
                client,
                rgb,
                args.duration,
                args.period,
                args.steps,
                args.min_level,
                args.gamma
            )

            if success:

                print()
                print("=" * 60)
                print("TEST COMPLETED")
                print("=" * 60)

            else:

                print()
                print(
                    "Test stopped because BLE disconnected."
                )

    except BleakError as e:

        print()
        print("=" * 60)
        print("BLE ERROR")
        print("=" * 60)
        print(e)

    except KeyboardInterrupt:

        print()
        print("Stopped by user.")


if __name__ == "__main__":
    asyncio.run(main())