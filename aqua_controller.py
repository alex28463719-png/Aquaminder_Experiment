import asyncio
import sys
import time
from bleak import BleakClient

FFF2 = "0000fff2-0000-1000-8000-00805f9b34fb"

NAME = "Aquaminder"

# Observed bottle light duration: roughly 5.2–5.5 seconds.
# Send the next command slightly before that expires.
REFRESH_INTERVAL = 5.29

# Spectrum transition speed.
EFFECT_STEP = 0.20


def build_packet(r, g, b, sound=0, light=1):
    """
    AA06 packet:

    AA 06 [LIGHT] [RR GG BB] [SOUND] 01 [12-byte name]
    """

    name_hex = NAME[:12].encode("utf-8").hex().upper()
    name_hex = name_hex.ljust(24, "0")

    hex_string = (
        f"AA06"
        f"0{light}"
        f"{r:02X}{g:02X}{b:02X}"
        f"0{sound}"
        f"01"
        f"{name_hex}"
    )

    return bytes.fromhex(hex_string)


def hsv_to_rgb(h, s=1.0, v=1.0):
    h = h % 1.0

    i = int(h * 6)
    f = h * 6 - i

    p = v * (1 - s)
    q = v * (1 - f * s)
    t = v * (1 - (1 - f) * s)

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
        f"Sent #{r:02X}{g:02X}{b:02X}"
        f" | sound={'ON' if sound else 'OFF'}"
    )


async def permanent_color(client, r, g, b):
    """
    Keep one color alive by refreshing just before
    the bottle's observed ~5-second timeout.
    """

    print()
    print("=" * 60)
    print(
        f"PERMANENT #{r:02X}{g:02X}{b:02X}"
    )
    print("=" * 60)
    print(
        f"Refreshing every {REFRESH_INTERVAL:.1f} seconds."
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

        # Sleep until the planned next transmission.
        # This avoids accumulating the execution time of each BLE write.
        delay = next_send - time.monotonic()

        if delay > 0:
            try:
                await asyncio.sleep(delay)
            except asyncio.CancelledError:
                return
        else:
            # If Bluetooth temporarily takes too long,
            # immediately resynchronize the timing.
            next_send = time.monotonic()


async def spectrum_effect(client):
    """
    Software-generated spectrum.

    First command has sound ON.
    Subsequent refreshes have sound OFF.
    """

    print()
    print("=" * 60)
    print("SPECTRUM EFFECT")
    print("=" * 60)
    print("Press ENTER to stop.")
    print()

    hue = 0.83

    # First command: spectrum starts + sound ON.
    r, g, b = hsv_to_rgb(hue)

    await send_packet(
        client,
        r,
        g,
        b,
        sound=1
    )

    # Keep effect alive.
    next_refresh = time.monotonic() + REFRESH_INTERVAL

    while True:

        # Change the hue gradually.
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

        # The color changes don't need to be sent every
        # REFRESH_INTERVAL; the bottle itself turns off
        # after ~5 seconds. Keep the visual animation
        # reasonably smooth while ensuring it is refreshed.
        await asyncio.sleep(EFFECT_STEP)


async def stop_task(task):
    task.cancel()

    try:
        await task
    except asyncio.CancelledError:
        pass


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
    print("=" * 60)
    print("AQUAMINDER CUSTOM CONTROLLER")
    print("=" * 60)
    print()
    print(f"Connecting to {address}...")

    async with BleakClient(address) as client:

        print(
            f"Connected: {client.is_connected}"
        )

        # NO AA01 TIME SYNC.
        # NO 18-second startup wait.
        #
        # We intentionally connect and immediately
        # take control with our own AA06 command.

        print()
        print("Time sync: SKIPPED")
        print("Startup wait: SKIPPED")
        print("Ready.")

        while True:

            print()
            print("=" * 60)
            print("AQUAMINDER CONTROLLER")
            print("=" * 60)
            print()
            print("1. Permanent MAGENTA")
            print("2. Permanent RED")
            print("3. Permanent BLUE")
            print("4. Permanent GREEN")
            print("5. Spectrum + sound")
            print("6. MAGENTA once")
            print("7. Exit")
            print()

            choice = await asyncio.to_thread(
                input,
                "Select: "
            )

            choice = choice.strip()

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

                print("\nStopped.")

            elif choice == "2":

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

                print("\nStopped.")

            elif choice == "3":

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

                print("\nStopped.")

            elif choice == "4":

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

                print("\nStopped.")

            elif choice == "5":

                task = asyncio.create_task(
                    spectrum_effect(client)
                )

                await asyncio.to_thread(
                    input,
                    "\nPress ENTER to stop spectrum..."
                )

                await stop_task(task)

                print()
                print("Returning to MAGENTA...")

                await send_packet(
                    client,
                    255,
                    0,
                    255,
                    sound=0
                )

                print("Magenta restored.")

            elif choice == "6":

                await send_packet(
                    client,
                    255,
                    0,
                    255,
                    sound=0
                )

                print("Magenta sent.")

            elif choice == "7":

                print()
                print("Exiting.")
                break

            else:

                print()
                print("Invalid choice.")


if __name__ == "__main__":
    asyncio.run(main())