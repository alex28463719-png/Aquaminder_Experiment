AquaMinder Experiment
=====================

DEVICE
-------
Name: Aquaminder
MAC: 67:2E:A9:4C:A7:67


1. FIND / CONNECT TO BOTTLE
---------------------------

First turn the bottle ON.

Scan for the bottle:

python -c "import asyncio; from bleak import BleakScanner; print(asyncio.run(BleakScanner.discover(timeout=10)))"

Look for:

BLEDevice(67:2E:A9:4C:A7:67, Aquaminder)

The Python scripts connect automatically using the MAC address.
Do NOT manually connect through Windows Bluetooth settings.


2. RUN MAGENTA + SOUND ON
--------------------------

python magenta_sound_on.py 67:2E:A9:4C:A7:67

The script:
- Connects to the bottle
- Sends time synchronization
- Waits for startup spectrum
- Sends MAGENTA (#FF00FF)
- Light = ON
- Sound = ON
- Measures how long the light stays on

When the MAGENTA light turns OFF, press ENTER.


3. RUN MAGENTA + SOUND OFF
---------------------------

python magenta_sound_off.py 67:2E:A9:4C:A7:67

The script:
- Connects to the bottle
- Sends time synchronization
- Waits for startup spectrum
- Sends MAGENTA (#FF00FF)
- Light = ON
- Sound = OFF
- Measures how long the light stays on

When the MAGENTA light turns OFF, press ENTER.


IMPORTANT
---------

If the bottle is not found:

1. Turn the bottle OFF/ON.
2. Wait a few seconds.
3. Run the BLE scan again.

Example:

python -c "import asyncio; from bleak import BleakScanner; print(asyncio.run(BleakScanner.discover(timeout=10)))"


CURRENT MAGENTA PACKET
----------------------

Sound ON:

AA 06 01 FF 00 FF 01 01
+ device name

Sound OFF:

AA 06 01 FF 00 FF 00 01
+ device name

RGB:
FF 00 FF = MAGENTA

Light:
01 = ON

Sound:
01 = ON
00 = OFF