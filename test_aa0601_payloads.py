import asyncio
import sys
import time
from bleak import BleakClient

FFF2 = "0000fff2-0000-1000-8000-00805f9b34fb"
FFF1 = "0000fff1-0000-1000-8000-00805f9b34fb"

HANDSHAKE = bytes.fromhex("aa016a905bbe")

# ------------------------------------------------------------
# ONLY ONE VARIABLE: bytes after AA 06 01
# ------------------------------------------------------------

TESTS = [
    ("BASE - no payload",       "aa0601"),

    ("RED RGB",                 "aa0601ff0000"),
    ("GREEN RGB",               "aa060100ff00"),
    ("BLUE RGB",                "aa06010000ff"),

    ("WHITE RGB",               "aa0601ffffff"),
    ("BLACK RGB",               "aa0601000000"),

    ("RED + 00",                "aa0601ff000000"),
    ("GREEN + 00",              "aa060100ff0000"),
    ("BLUE + 00",               "aa06010000ff00"),

    ("RED + FF",                "aa0601ff0000ff"),
    ("GREEN + FF",              "aa060100ff00ff"),
    ("BLUE + FF",               "aa06010000ffff"),
]


START = time.monotonic()


def log(msg):
    print(f"[{time.monotonic() - START:7.2f}s] {msg}")


async def main():

    if len(sys.argv) < 2:
        print("Usage:")
        print("  python test_aa0601_payloads.py 67:2E:A9:4C:A7:67")
        return

    address = sys.argv[1]

    async with BleakClient(address) as client:

        log(f"Connected: {client.is_connected}")

        def notification_handler(sender, data):
            h = data.hex()

            if h == "bb0600":
                log("    <-- ACK_06  bb0600")
            elif h.startswith("bb01"):
                log(f"    <-- DEVICE_INFO {h}")
            else:
                log(f"    <-- notify {h}")

        await client.start_notify(FFF1, notification_handler)
        log("Subscribed to FFF1")

        # ----------------------------------------------------
        # HANDSHAKE
        # ----------------------------------------------------

        print()
        print("=" * 70)
        print("HANDSHAKE")
        print("=" * 70)

        log(f"--> {HANDSHAKE.hex()}")
        await client.write_gatt_char(
            FFF2,
            HANDSHAKE,
            response=False
        )

        await asyncio.sleep(2)

        # ----------------------------------------------------
        # IMPORTANT:
        # DO NOT wait 30 sec here.
        #
        # We want to test the commands in the same connection
        # and avoid another startup cycle interfering.
        # ----------------------------------------------------

        print()
        print("=" * 70)
        print("AA 06 01 PAYLOAD ISOLATION TEST")
        print("=" * 70)

        print("""
For every test:

1. Look at the bottle.
2. The command is sent ONCE.
3. Wait until the light/beeps completely finish.
4. Enter what you actually observed.

Use descriptions like:
  red
  dark red
  light red
  purple
  light purple
  cyan
  light blue
  green
  light green
  grey
  white
  no light

If you are unsure, say "uncertain".
""")

        results = []

        for number, (label, hex_string) in enumerate(TESTS, 1):

            payload = bytes.fromhex(hex_string)

            print()
            print("#" * 70)
            print(f"TEST {number}/{len(TESTS)}")
            print(f"{label}")
            print(f"WRITE: {hex_string}")
            print("#" * 70)

            log(f"--> {hex_string}")

            ack_received = False

            def make_handler():
                nonlocal ack_received

                def handler(sender, data):
                    nonlocal ack_received

                    h = data.hex()

                    if h == "bb0600":
                        ack_received = True
                        log("    <-- ACK_06  bb0600")
                    elif h.startswith("bb01"):
                        log(f"    <-- DEVICE_INFO {h}")
                    else:
                        log(f"    <-- notify {h}")

                return handler

            # Replace handler so ACK belongs to this test.
            await client.stop_notify(FFF1)
            await client.start_notify(FFF1, make_handler())

            await client.write_gatt_char(
                FFF2,
                payload,
                response=False
            )

            # Give ACK time to arrive.
            await asyncio.sleep(0.8)

            print()
            print("Waiting 7 seconds for the light/beep sequence...")
            await asyncio.sleep(7)

            color = input(
                f"Observed result for {hex_string}: "
            ).strip()

            results.append(
                (number, label, hex_string, color, ack_received)
            )

        # ----------------------------------------------------
        # RESULTS
        # ----------------------------------------------------

        print()
        print("=" * 70)
        print("FINAL RESULTS")
        print("=" * 70)

        print(
            f"{'#':<4} "
            f"{'TEST':<25} "
            f"{'COMMAND':<18} "
            f"{'ACK':<8} "
            f"OBSERVATION"
        )

        print("-" * 70)

        for number, label, command, color, ack in results:
            print(
                f"{number:<4} "
                f"{label:<25} "
                f"{command:<18} "
                f"{'YES' if ack else 'NO':<8} "
                f"{color}"
            )

        print()
        print("Disconnecting...")


if __name__ == "__main__":
    asyncio.run(main())