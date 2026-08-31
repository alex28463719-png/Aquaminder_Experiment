import struct

path = r"bugreport\FS\data\misc\bluetooth\logs\btsnooz_hci.log"

data = open(path, "rb").read()

print("File size:", len(data))
print("Header:", data[:16].hex())
print()

offset = 16
record = 0

while offset + 24 <= len(data):
    orig_len, incl_len, flags, drops, ts = struct.unpack(
        ">IIIIq", data[offset:offset + 24]
    )
    offset += 24

    pkt = data[offset:offset + incl_len]
    offset += incl_len

    record += 1

    print(
        f"Record {record}: "
        f"len={incl_len} "
        f"flags=0x{flags:08x} "
        f"packet={pkt[:40].hex()}"
    )

    if record >= 30:
        break

print()
print("Total records inspected:", record)