#!/usr/bin/env python3
"""
Phased firmware protocol probe. Run ONE phase at a time, observe carefully,
then move to the next -- this is deliberately not a blind fuzzer.

Usage:
  python probe_protocol.py <address> --phase 1
  python probe_protocol.py <address> --phase 2
  ... etc, in order. Each phase prints what to watch for.

Phases:
  1  Baseline sanity check (known-good magenta command)
  2  AA07 / AA08 bare (no payload) -- read/GET hypothesis
  3  Trailing byte after the real 20-byte AA06 packet -- duration hypothesis
  4  Byte 2 high-nibble sweep (light_status byte) -- hidden mode/effect bits
  5  Byte 6 high-nibble sweep (sound_status byte) -- hidden mode/effect bits
  6  Byte 7 sweep (the always-01 constant) -- version/effect/multiplier hypothesis
  7  Other command IDs (02,03,04,09-0F), bare and full-length forms
"""

import argparse
import asyncio
import time
from bleak import BleakClient

FFF2 = "0000fff2-0000-1000-8000-00805f9b34fb"
FFF1 = "0000fff1-0000-1000-8000-00805f9b34fb"

NAME_HEX = "Aquaminder".encode("utf-8").hex().upper().ljust(24, "0")

START = time.monotonic()
def ts():
    return f"{time.monotonic() - START:6.2f}s"

def settings_packet(light, r, g, b, sound, byte7="01", extra=""):
    return f"AA060{light}{r:02X}{g:02X}{b:02X}0{sound}{byte7}{NAME_HEX}{extra}"

async def ainput(prompt):
    return await asyncio.to_thread(input, prompt)

async def send_and_wait(client, hex_payload, wait=6.0, label=""):
    payload = bytes.fromhex(hex_payload)
    print(f"[{ts()}] --> {label} ({len(payload)}B): {payload.hex()}")
    await client.write_gatt_char(FFF2, payload, response=False)
    await asyncio.sleep(wait)

async def phase_1(client):
    print("\n=== PHASE 1: baseline sanity ===")
    print("Confirms our known-good packet still behaves as expected before")
    print("we start varying anything. Expect: magenta light, no beep, ~5s.\n")
    await send_and_wait(client, settings_packet(1, 0xFF, 0x00, 0xFF, 0), label="baseline magenta, sound off")
    ans = await ainput("What did you observe (color/duration/beep)? > ")
    print(f"Logged: {ans}")

async def phase_2(client):
    print("\n=== PHASE 2: AA07 / AA08 bare (no payload) ===")
    print("Testing whether these are GET/read-style commands. Watch the")
    print("notification closely -- if it's LONGER than a short ack, that's")
    print("a lead (could be current stored state, possibly with extra")
    print("fields we haven't seen in any write command).\n")
    await send_and_wait(client, "AA07", label="bare AA07")
    ans = await ainput("Notification content / anything visible? > ")
    print(f"Logged: {ans}")
    await send_and_wait(client, "AA08", label="bare AA08")
    ans = await ainput("Notification content / anything visible? > ")
    print(f"Logged: {ans}")

async def phase_3(client):
    print("\n=== PHASE 3: trailing byte after the real 20-byte AA06 packet ===")
    print("Testing whether firmware reads beyond the 20 bytes the app sends.")
    print("Each candidate is one extra byte appended, trying it as a")
    print("duration-in-seconds guess. Watch specifically for the light")
    print("staying on LONGER or SHORTER than the normal ~5s baseline.\n")
    candidates = {
        "00": "duration=0 guess",
        "01": "duration=1 guess",
        "0A": "duration=10 guess",
        "1E": "duration=30 guess",
        "3C": "duration=60 guess",
        "FF": "duration=max/persistent guess",
    }
    for extra, desc in candidates.items():
        pkt = settings_packet(1, 0xFF, 0x00, 0xFF, 0, extra=extra)
        await send_and_wait(client, pkt, label=f"trailing byte {extra} ({desc})")
        ans = await ainput(f"Duration/behavior for extra byte {extra}? > ")
        print(f"Logged [{extra}]: {ans}")

async def phase_4(client):
    print("\n=== PHASE 4: byte 2 (light_status) high-nibble sweep ===")
    print("App always sends 0X (X=0 or 1) here. Testing X0 values -- keeping")
    print("low nibble at 1 (light on) so the light should still turn on if")
    print("the firmware even looks at this byte as a single unit vs nibbles.\n")
    for hi in range(0, 0x100, 0x10):
        light_byte = f"{hi + 1:02X}"  # high nibble varies, low nibble fixed at 1
        hex_str = f"AA06{light_byte}FF00FF00{'01'}{NAME_HEX}"
        await send_and_wait(client, hex_str, label=f"byte2={light_byte}")
        ans = await ainput(f"Behavior for byte2={light_byte}? (Enter to skip logging) > ")
        if ans.strip():
            print(f"Logged [{light_byte}]: {ans}")

async def phase_5(client):
    print("\n=== PHASE 5: byte 6 (sound_status) high-nibble sweep ===")
    print("Same idea as phase 4, applied to the sound byte.\n")
    for hi in range(0, 0x100, 0x10):
        sound_byte = f"{hi + 0:02X}"  # keep sound "off" in low nibble, vary high
        hex_str = f"AA060 1FF00FF0{sound_byte}01{NAME_HEX}".replace(" ", "")
        await send_and_wait(client, hex_str, label=f"byte6={sound_byte}")
        ans = await ainput(f"Behavior for byte6={sound_byte}? (Enter to skip logging) > ")
        if ans.strip():
            print(f"Logged [{sound_byte}]: {ans}")

async def phase_6(client):
    print("\n=== PHASE 6: byte 7 sweep (always '01' in real packets) ===")
    print("CAUTION: this byte might be a strict magic/version check. Start")
    print("close to 01 and watch for the packet being silently ignored")
    print("(no light change at all) vs a real behavior difference.\n")
    for b7 in ["00", "02", "03", "0A", "FF"]:
        hex_str = f"AA0601FF00FF00{b7}{NAME_HEX}"
        await send_and_wait(client, hex_str, label=f"byte7={b7}")
        ans = await ainput(f"Behavior for byte7={b7}? (did the light even respond?) > ")
        print(f"Logged [{b7}]: {ans}")

async def phase_7(client):
    print("\n=== PHASE 7: other command IDs (bare + full-length forms) ===")
    ids = ["02", "03", "04", "09", "0A", "0B", "0C", "0D", "0E", "0F"]
    for cmd in ids:
        await send_and_wait(client, f"AA{cmd}", label=f"bare AA{cmd}")
        ans = await ainput(f"Bare AA{cmd}: anything? > ")
        if ans.strip():
            print(f"Logged bare [{cmd}]: {ans}")

        full = f"AA{cmd}01FF00FF0001{NAME_HEX}"
        await send_and_wait(client, full, label=f"full-length AA{cmd}")
        ans = await ainput(f"Full AA{cmd}: anything? > ")
        if ans.strip():
            print(f"Logged full [{cmd}]: {ans}")

PHASES = {1: phase_1, 2: phase_2, 3: phase_3, 4: phase_4, 5: phase_5, 6: phase_6, 7: phase_7}

async def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("address")
    ap.add_argument("--phase", type=int, required=True, choices=PHASES.keys())
    args = ap.parse_args()

    async with BleakClient(args.address) as client:
        print(f"[{ts()}] Connected: {client.is_connected}")

        def on_notify(_h, data):
            print(f"[{ts()}]     <-- notify: {data.hex()}")
        await client.start_notify(FFF1, on_notify)

        ts_hex = format(int(time.time()), "08x").upper()
        sync = bytes.fromhex(f"AA01{ts_hex}")

        print(f"Time sync: {sync.hex().upper()}")
        await client.write_gatt_char(FFF2, sync, response=False)

        print("\nWaiting 18 seconds for startup spectrum to finish...")

        for i in range(18, 0, -1):
            print(f"\rStartup wait: {i:2d}s", end="", flush=True)
            await asyncio.sleep(1)

        print("\nStartup spectrum finished.")

        await PHASES[args.phase](client)
        print(f"\n[{ts()}] Phase {args.phase} done.")

if __name__ == "__main__":
    asyncio.run(main())
