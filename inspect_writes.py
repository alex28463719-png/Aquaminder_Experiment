import struct
import sys
from datetime import datetime, timezone

path = sys.argv[1]
data = open(path, "rb").read()

offset = 16
record_no = 0

writes = []

while offset + 24 <= len(data):

    orig_len, incl_len, flags, drops, timestamp = struct.unpack(
        ">IIIIq", data[offset:offset+24]
    )

    offset += 24

    packet = data[offset:offset+incl_len]
    offset += incl_len

    record_no += 1

    if not packet or packet[0] != 0x02:
        continue

    if len(packet) < 9:
        continue

    acl_length = struct.unpack("<H", packet[3:5])[0]
    acl_payload = packet[5:5+acl_length]

    if len(acl_payload) < 4:
        continue

    l2cap_length, cid = struct.unpack("<HH", acl_payload[:4])

    if cid != 0x0004:
        continue

    att = acl_payload[4:4+l2cap_length]

    if len(att) < 3:
        continue

    opcode = att[0]

    if opcode not in (0x12, 0x52):
        continue

    handle = struct.unpack("<H", att[1:3])[0]
    value = att[3:]

    direction = "RX" if flags & 1 else "TX"

    writes.append(
        (record_no, timestamp, direction, opcode, handle, value)
    )

print("=== BLE WRITE OPERATIONS ===")

for record, timestamp, direction, opcode, handle, value in writes:

    name = "WRITE REQUEST" if opcode == 0x12 else "WRITE COMMAND"

    print(
        f"Record {record:4d} | "
        f"{direction} | "
        f"{name:14s} | "
        f"Handle 0x{handle:04x} | "
        f"Value {value.hex()} | "
        f"Timestamp {timestamp}"
    )

print()
print("=== WRITE SEQUENCE ===")

previous_ts = None

for record, timestamp, direction, opcode, handle, value in writes:

    if previous_ts is None:
        delta = 0
    else:
        delta = timestamp - previous_ts

    print(
        f"{record:4d}  "
        f"{direction}  "
        f"0x{handle:04x}  "
        f"{value.hex():20s}  "
        f"delta={delta}"
    )

    previous_ts = timestamp