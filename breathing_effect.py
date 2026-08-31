#!/usr/bin/env python3
"""
AquaMinder software breathing effect -- built entirely on the known AA06
command, no native firmware support assumed. Optimized for the fewest BLE
writes that still look smooth, using a gamma-corrected raised-cosine
brightness curve on a fixed hue.

Run:
  python breathing_effect.py 67:2E:A9:4C:A7:67
  python breathing_effect.py 67:2E:A9:4C:A7:67 --color FF00FF --period 4.0 --steps 14
  python breathing_effect.py 67:2E:A9:4C:A7:67 --duration 20   # breathe 20s then hold steady
"""

import argparse
import asyncio
import math
import time
from bleak import BleakClient
from bleak.exc import BleakError

FFF2 = "0000fff2-0000-1000-8000-00805f9b34fb"
FFF1 = "0000fff1-0000-1000-8000-00805f9b34fb"
NAME_HEX = "Aquaminder".encode("utf-8").hex().upper().ljust(24, "0")


def settings_packet(light, r, g, b, sound):
    return bytes.fromhex(f"AA060{light}{r:02X}{g:02X}{b:02X}0{sound}01{NAME_HEX}")


def breathing_curve(steps: int, min_level: float = 0.15, gamma: float = 1.8):
    """
    One full breath cycle's worth of brightness levels (0..1), precomputed.

    Raised cosine gives the classic "ease in/out at both ends" shape with
    few steps. Gamma correction (>1) compresses the low end and expands the
    high end so the fade LOOKS evenly paced to the eye instead of rushing
    through bright and lingering dim -- costs nothing extra in BLE traffic,
    just changes the numbers we send.
    """
    levels = []
    for i in range(steps):
        phase = i / steps
        raw = (1 - math.cos(2 * math.pi * phase)) / 2       # 0..1, smooth
        level = min_level + (1 - min_level) * (raw ** gamma)
        levels.append(level)
    return levels


class Breather:
    def __init__(self, client: BleakClient, rgb=(0xFF, 0x00, 0xFF),
                 period=4.0, steps=14, min_level=0.15, gamma=1.8):
        self.client = client
        self.rgb = rgb
        self.period = period
        self.steps = steps
        self.interval = period / steps
        self.levels = breathing_curve(steps, min_level, gamma)
        self._stop = asyncio.Event()
        self._consecutive_failures = 0

    async def _write(self, r, g, b, sound=0, light=1):
        try:
            await self.client.write_gatt_char(
                FFF2, settings_packet(light, r, g, b, sound), response=False
            )
            self._consecutive_failures = 0
        except BleakError as e:
            self._consecutive_failures += 1
            print(f"  write failed ({self._consecutive_failures} in a row): {e}")
            if self._consecutive_failures >= 3:
                print("  3 failures in a row -- stopping effect, connection likely dropped.")
                self._stop.set()
                raise

    async def run(self, duration=None, cycles=None):
        """
        Run the breathing loop. Stops after `duration` seconds, or after
        `cycles` full breaths, or indefinitely until stop() is called --
        whichever condition is set and hit first.
        """
        start = time.monotonic()
        i = 0
        n_cycles = 0
        while not self._stop.is_set():
            level = self.levels[i % self.steps]
            r = round(self.rgb[0] * level)
            g = round(self.rgb[1] * level)
            b = round(self.rgb[2] * level)
            await self._write(r, g, b)

            i += 1
            if i % self.steps == 0:
                n_cycles += 1
                if cycles is not None and n_cycles >= cycles:
                    return
            if duration is not None and (time.monotonic() - start) >= duration:
                return

            try:
                await asyncio.wait_for(self._stop.wait(), timeout=self.interval)
            except asyncio.TimeoutError:
                pass

    def stop(self):
        self._stop.set()


async def sustain(client: BleakClient, rgb=(0xFF, 0x00, 0xFF), refresh=5.0, stop_event=None):
    """Hold a solid color indefinitely with minimal traffic (~1 write/5s)."""
    r, g, b = rgb
    stop_event = stop_event or asyncio.Event()
    while not stop_event.is_set():
        await client.write_gatt_char(FFF2, settings_packet(1, r, g, b, 0), response=False)
        try:
            await asyncio.wait_for(stop_event.wait(), timeout=refresh)
        except asyncio.TimeoutError:
            pass


async def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("address")
    ap.add_argument("--color", default="FF00FF", help="hex RGB, e.g. FF00FF for magenta")
    ap.add_argument("--period", type=float, default=4.0, help="seconds per full breath cycle")
    ap.add_argument("--steps", type=int, default=14, help="writes per breath cycle")
    ap.add_argument("--min-level", type=float, default=0.15, help="floor brightness 0..1")
    ap.add_argument("--gamma", type=float, default=1.8, help="perceptual curve correction")
    ap.add_argument("--duration", type=float, default=None,
                     help="breathe for N seconds then hold steady (default: breathe forever)")
    args = ap.parse_args()

    rgb = tuple(int(args.color[i:i + 2], 16) for i in (0, 2, 4))

    print(f"Interval per write: {args.period / args.steps:.3f}s "
          f"(this is the conservative default -- run probe_write_rate first "
          f"if you haven't, and tighten --steps/--period once you know your "
          f"bottle's safe floor)")

    async with BleakClient(args.address) as client:
        print(f"Connected: {client.is_connected}")

        def on_notify(_h, _data):
            pass
        await client.start_notify(FFF1, on_notify)

        ts_hex = format(int(time.time()), "08x").upper()
        await client.write_gatt_char(FFF2, bytes.fromhex(f"AA01{ts_hex}"), response=False)
        await asyncio.sleep(1.0)

        breather = Breather(client, rgb=rgb, period=args.period, steps=args.steps,
                             min_level=args.min_level, gamma=args.gamma)

        try:
            if args.duration is not None:
                print(f"Breathing for {args.duration}s, then holding steady...")
                await breather.run(duration=args.duration)
                print("Switching to steady sustain (Ctrl+C to stop)...")
                await sustain(client, rgb=rgb)
            else:
                print("Breathing indefinitely (Ctrl+C to stop)...")
                await breather.run()
        except KeyboardInterrupt:
            pass
        except BleakError:
            print("Stopped due to a connection error.")


if __name__ == "__main__":
    asyncio.run(main())
