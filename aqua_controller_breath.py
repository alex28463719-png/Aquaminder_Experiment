import asyncio
import math
import sys
import time

from bleak import BleakClient


FFF2 = "0000fff2-0000-1000-8000-00805f9b34fb"

NAME = "Aquaminder"

# ------------------------------------------------------------
# BOTTLE TIMING
# ------------------------------------------------------------

# Your measured tests show that ~5.3 seconds works well
# for keeping the light continuously active.
REFRESH_INTERVAL = 5.30


# ------------------------------------------------------------
# PACKET
# ------------------------------------------------------------

def build_packet(r, g, b, sound=0, light=1):

    name_hex = (
        NAME[:12]
        .encode("utf-8")
        .hex()
        .upper()
        .ljust(24, "0")
    )

    packet = (
        f"AA06"
        f"0{light}"
        f"{r:02X}{g:02X}{b:02X}"
        f"0{sound}"
        f"01"
        f"{name_hex}"
    )

    return bytes.fromhex(packet)


# ------------------------------------------------------------
# SEND
# ------------------------------------------------------------

async def send_packet(client, r, g, b, sound=0):

    packet = build_packet(
        r,
        g,
        b,
        sound=sound
    )

    await client.write_gatt_char(
        FFF2,
        packet,
        response=False
    )

    print(
        f"\rRGB #{r:02X}{g:02X}{b:02X}"
        f" | Sound={'ON' if sound else 'OFF'}"
        f" | {packet.hex().upper()}",
        end="",
        flush=True
    )


# ------------------------------------------------------------
# PERMANENT SOLID COLOR
# ------------------------------------------------------------

async def permanent_color(client, r, g, b):

    print()
    print("=" * 65)
    print(
        f"PERMANENT #{r:02X}{g:02X}{b:02X}"
    )
    print("=" * 65)
    print()
    print(
        f"Refresh interval: {REFRESH_INTERVAL:.2f}s"
    )
    print("Press ENTER to stop.")
    print()

    next_send = time.monotonic()

    while True:

        await send_packet(
            client,
            r,
            g,
            b,
            sound=0
        )

        next_send += REFRESH_INTERVAL

        delay = (
            next_send -
            time.monotonic()
        )

        if delay > 0:
            try:
                await asyncio.sleep(delay)
            except asyncio.CancelledError:
                return
        else:
            next_send = time.monotonic()


# ------------------------------------------------------------
# MAGENTA BREATHING
# ------------------------------------------------------------

async def magenta_breathing(client):

    print()
    print("=" * 65)
    print("MAGENTA BREATHING")
    print("=" * 65)
    print()
    print("Software-generated breathing effect.")
    print()
    print("Bright → dim → bright")
    print("Color remains MAGENTA.")
    print("Sound OFF.")
    print()
    print("Press ENTER to stop.")
    print()

    # --------------------------------------------------------
    # IMPORTANT
    #
    # We cannot control LED brightness directly.
    #
    # Instead we change the RGB intensity:
    #
    # FF00FF = maximum magenta
    # 990099 = medium magenta
    # 330033 = dim magenta
    #
    # The bottle receives normal AA06 commands.
    # --------------------------------------------------------

    # Minimum brightness.
    MIN_BRIGHTNESS = 0.25

    # Maximum brightness.
    MAX_BRIGHTNESS = 1.0

    # One complete breathing cycle.
    BREATH_PERIOD = 10.0

    # How often we change the brightness.
    # This is intentionally MUCH slower than 0.2s.
    STEP = 0.50

    start = time.monotonic()

    # The important part:
    #
    # Every AA06 resets the bottle's ~5.3 second
    # light timer, so make sure we never go beyond
    # REFRESH_INTERVAL.
    #
    # We therefore send brightness updates every
    # STEP seconds.
    #
    # This is an experimental effect rather than
    # a firmware-native breathing mode.

    while True:

        now = time.monotonic()

        elapsed = now - start

        # 0 → 2π
        phase = (
            elapsed /
            BREATH_PERIOD *
            2 *
            math.pi
        )

        # Smooth sine wave.
        sine = (
            math.sin(phase - math.pi / 2) +
            1
        ) / 2

        brightness = (
            MIN_BRIGHTNESS +
            (
                MAX_BRIGHTNESS -
                MIN_BRIGHTNESS
            ) * sine
        )

        r = int(
            255 *
            brightness
        )

        g = 0

        b = int(
            255 *
            brightness
        )

        await send_packet(
            client,
            r,
            g,
            b,
            sound=0
        )

        await asyncio.sleep(STEP)


# ------------------------------------------------------------
# SPECTRUM
# ------------------------------------------------------------

def hsv_to_rgb(h, s=1.0, v=1.0):

    h = h % 1.0

    i = int(h * 6)

    f = (
        h * 6 -
        i
    )

    p = v * (1 - s)

    q = v * (
        1 - f * s
    )

    t = v * (
        1 - (1 - f) * s
    )

    i %= 6

    if i == 0:
        r, g, b = v, t, p

    elif i == 1:
        r, g, b = q, v, p

    elif i == 2:
        r, g, b = p, v, t

    elif i == 3:
        r, g, b = p, q, v

    elif i == 4:
        r, g, b = t, p, v

    else:
        r, g, b = v, p, q

    return (
        int(r * 255),
        int(g * 255),
        int(b * 255)
    )


async def spectrum_effect(client):

    print()
    print("=" * 65)
    print("SPECTRUM EFFECT")
    print("=" * 65)
    print()
    print("Software-generated spectrum.")
    print("Sound ON for first command only.")
    print("Press ENTER to stop.")
    print()

    hue = 0.83

    # Initial reminder command.
    r, g, b = hsv_to_rgb(hue)

    await send_packet(
        client,
        r,
        g,
        b,
        sound=1
    )

    # Use a relatively slow effect step.
    #
    # This is deliberately not 0.2s.
    #
    # Each command restarts the bottle's light timer.
    EFFECT_STEP = 0.75

    while True:

        await asyncio.sleep(
            EFFECT_STEP
        )

        hue += 0.008

        r, g, b = hsv_to_rgb(
            hue,
            s=1.0,
            v=1.0
        )

        await send_packet(
            client,
            r,
            g,
            b,
            sound=0
        )


# ------------------------------------------------------------
# STOP TASK
# ------------------------------------------------------------

async def stop_task(task):

    task.cancel()

    try:
        await task

    except asyncio.CancelledError:
        pass


# ------------------------------------------------------------
# MAIN
# ------------------------------------------------------------

async def main():

    if len(sys.argv) < 2:

        print()
        print("Usage:")
        print()
        print(
            "python aqua_controller.py "
            "67:2E:A9:4C:A7:67"
        )
        print()

        return

    address = sys.argv[1]

    print()
    print("=" * 65)
    print("AQUAMINDER CUSTOM CONTROLLER")
    print("=" * 65)
    print()

    print(
        f"Connecting to {address}..."
    )

    async with BleakClient(address) as client:

        print(
            f"Connected: {client.is_connected}"
        )

        # ----------------------------------------------------
        # NO TIME SYNC
        # NO NOTIFICATION HANDLER
        # NO 18 SECOND WAIT
        #
        # We deliberately do not subscribe to FFF1 here.
        #
        # This keeps the console clean and, more importantly,
        # we're not using notifications for control.
        # ----------------------------------------------------

        print()
        print("AA01 time sync: SKIPPED")
        print("Startup wait:   SKIPPED")
        print()
        print("Ready.")
        print()

        while True:

            print("=" * 65)
            print("AQUAMINDER CONTROLLER")
            print("=" * 65)
            print()

            print("1. Permanent MAGENTA")
            print("2. MAGENTA BREATHING")
            print("3. Permanent RED")
            print("4. Permanent BLUE")
            print("5. Permanent GREEN")
            print("6. Spectrum + sound")
            print("7. MAGENTA once")
            print("8. Exit")
            print()

            choice = await asyncio.to_thread(
                input,
                "Select: "
            )

            choice = choice.strip()

            # ------------------------------------------------
            # MAGENTA
            # ------------------------------------------------

            if choice == "1":

                task = asyncio.create_task(
                    permanent_color(
                        client,
                        255,
                        0,
                        255
                    )
                )

                await asyncio.to_thread(
                    input,
                    "\nPress ENTER to stop..."
                )

                await stop_task(task)

                print()
                print("Stopped.")

            # ------------------------------------------------
            # BREATHING
            # ------------------------------------------------

            elif choice == "2":

                task = asyncio.create_task(
                    magenta_breathing(client)
                )

                await asyncio.to_thread(
                    input,
                    "\nPress ENTER to stop breathing..."
                )

                await stop_task(task)

                print()
                print("Breathing stopped.")

                # Restore full magenta.
                await send_packet(
                    client,
                    255,
                    0,
                    255,
                    sound=0
                )

                print()
                print("Full MAGENTA restored.")

            # ------------------------------------------------
            # RED
            # ------------------------------------------------

            elif choice == "3":

                task = asyncio.create_task(
                    permanent_color(
                        client,
                        255,
                        0,
                        0
                    )
                )

                await asyncio.to_thread(
                    input,
                    "\nPress ENTER to stop..."
                )

                await stop_task(task)

                print()
                print("Stopped.")

            # ------------------------------------------------
            # BLUE
            # ------------------------------------------------

            elif choice == "4":

                task = asyncio.create_task(
                    permanent_color(
                        client,
                        0,
                        0,
                        255
                    )
                )

                await asyncio.to_thread(
                    input,
                    "\nPress ENTER to stop..."
                )

                await stop_task(task)

                print()
                print("Stopped.")

            # ------------------------------------------------
            # GREEN
            # ------------------------------------------------

            elif choice == "5":

                task = asyncio.create_task(
                    permanent_color(
                        client,
                        0,
                        255,
                        0
                    )
                )

                await asyncio.to_thread(
                    input,
                    "\nPress ENTER to stop..."
                )

                await stop_task(task)

                print()
                print("Stopped.")

            # ------------------------------------------------
            # SPECTRUM
            # ------------------------------------------------

            elif choice == "6":

                task = asyncio.create_task(
                    spectrum_effect(client)
                )

                await asyncio.to_thread(
                    input,
                    "\nPress ENTER to stop spectrum..."
                )

                await stop_task(task)

                print()
                print()
                print(
                    "Returning to MAGENTA..."
                )

                await send_packet(
                    client,
                    255,
                    0,
                    255,
                    sound=0
                )

                print()
                print("Magenta restored.")

            # ------------------------------------------------
            # MAGENTA ONCE
            # ------------------------------------------------

            elif choice == "7":

                await send_packet(
                    client,
                    255,
                    0,
                    255,
                    sound=0
                )

                print()
                print("Magenta sent.")

            # ------------------------------------------------
            # EXIT
            # ------------------------------------------------

            elif choice == "8":

                print()
                print("Exiting.")

                break

            else:

                print()
                print("Invalid choice.")


if __name__ == "__main__":
    asyncio.run(main())