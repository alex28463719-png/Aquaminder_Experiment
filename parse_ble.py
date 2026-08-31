import struct
import sys

path = sys.argv[1]
data = open(path, "rb").read()

print("File:", path)
print("Size:", len(data))
print("Header:", data[:16].hex())

offset = 16
record_no = 0

print("\n=== BLE ATT packets ===")

while offset + 24 <= len(data):

    orig_len, incl_len, flags, drops, timestamp = struct.unpack(
        ">IIIIq", data[offset:offset+24]
    )

    offset += 24

    packet = data[offset:offset+incl_len]
    offset += incl_len

    record_no += 1

    if not packet:
        continue

    # HCI packet type
    hci_type = packet[0]

    if hci_type != 0x02:
        continue

    if len(packet) < 9:
        continue

    # HCI ACL header
    acl_header = struct.unpack("<H", packet[1:3])[0]
    acl_length = struct.unpack("<H", packet[3:5])[0]

    acl_payload = packet[5:5+acl_length]

    if len(acl_payload) < 4:
        continue

    # L2CAP header
    l2cap_length, cid = struct.unpack(
        "<HH", acl_payload[:4]
    )

    l2cap_payload = acl_payload[4:4+l2cap_length]

    # ATT CID
    if cid != 0x0004:
        continue

    if not l2cap_payload:
        continue

    opcode = l2cap_payload[0]

    # ATT operations we're interested in
    names = {
        0x12: "WRITE REQUEST",
        0x52: "WRITE COMMAND",
        0x1b: "NOTIFICATION",
        0x1d: "INDICATION",
        0x0a: "READ REQUEST",
        0x0b: "READ RESPONSE",
        0x08: "READ BY TYPE REQUEST",
        0x09: "READ BY TYPE RESPONSE",
        0x02: "EXCHANGE MTU REQUEST",
        0x03: "EXCHANGE MTU RESPONSE",
    }

    name = names.get(opcode)

    if name is None:
        continue

    direction = "RX" if (flags & 1) else "TX"

    print(
        f"\nRecord {record_no} | {direction} | {name}"
    )

    print(
        "ATT:",
        l2cap_payload.hex()
    )

    if opcode in (0x12, 0x52, 0x1b, 0x1d):

        if len(l2cap_payload) >= 3:

            handle = struct.unpack(
                "<H",
                l2cap_payload[1:3]
            )[0]

            value = l2cap_payload[3:]

            print(
                f"Handle: 0x{handle:04x}"
            )

            print(
                f"Value:  {value.hex()}"
            )

print("\n=== Done ===")