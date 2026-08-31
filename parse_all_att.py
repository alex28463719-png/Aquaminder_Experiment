import struct
import sys

path = sys.argv[1]
data = open(path, "rb").read()

offset = 16
record_no = 0

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

    if not att:
        continue

    opcode = att[0]

    names = {
        0x01: "ERROR RESPONSE",
        0x02: "EXCHANGE MTU REQUEST",
        0x03: "EXCHANGE MTU RESPONSE",
        0x08: "READ BY TYPE REQUEST",
        0x09: "READ BY TYPE RESPONSE",
        0x0a: "READ REQUEST",
        0x0b: "READ RESPONSE",
        0x12: "WRITE REQUEST",
        0x13: "WRITE RESPONSE",
        0x1b: "NOTIFICATION",
        0x1d: "INDICATION",
        0x52: "WRITE COMMAND",
    }

    name = names.get(opcode)

    if name is None:
        continue

    direction = "RX" if flags & 1 else "TX"

    print(
        f"Record {record_no:4d} | {direction} | "
        f"{name:20s} | {att.hex()}"
    )