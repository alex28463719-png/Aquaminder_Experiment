import os
import re
import sys

if len(sys.argv) < 2:
    print("Usage: python mine_protocol_v2.py <aquaminder_modules>")
    sys.exit(1)

ROOT = sys.argv[1]
OUT = "mined_protocol_report_v2.txt"
CONTEXT = 4

patterns = {
    "AA_COMMANDS": re.compile(r"aa0[1-9a-f]", re.I),

    "AA_LITERAL": re.compile(r"\baa0", re.I),

    "BLE_WRITE": re.compile(
        r"writeCharacteristic|writeWithoutResponse|writeWithResponse|"
        r"writeBLE|CharacteristicValue",
        re.I
    ),

    "MODULE_646": re.compile(
        r"module_646|callback\s*\(\s*646\s*\)|646",
        re.I
    ),

    "LIGHT_STATE": re.compile(
        r"light_status|led_color|sound_status",
        re.I
    ),

    "CYCLE": re.compile(
        r"buildCycleByte|getCycleInfo|createScheduleCommand|"
        r"syncSchedulesToDevice",
        re.I
    ),

    "EFFECT": re.compile(
        r"fade|fadein|fadeout|breath|breathing|pulse|"
        r"rainbow|spectrum|effect|pattern|brightness|"
        r"intensity|speed|period",
        re.I
    ),

    "TIMING": re.compile(
        r"duration|timeout|timer|delay|interval|"
        r"milliseconds|seconds|onTime|offTime",
        re.I
    ),

    "TIMING_NUMBERS": re.compile(
        r"\b(1000|2000|3000|4000|5000|5500|6000|10000|15000|"
        r"20000|30000|60000)\b"
    ),
}

results = {name: [] for name in patterns}

js_files = []

for root, dirs, files in os.walk(ROOT):
    for filename in files:
        if filename.lower().endswith(".js"):
            js_files.append(os.path.join(root, filename))

print(f"Scanning {len(js_files)} JS files...")

for path in js_files:

    try:
        with open(path, "r", encoding="utf-8", errors="replace") as f:
            lines = f.readlines()
    except Exception as e:
        print(f"Could not read {path}: {e}")
        continue

    for i, line in enumerate(lines):

        for name, pattern in patterns.items():

            if pattern.search(line):

                start = max(0, i - CONTEXT)
                end = min(len(lines), i + CONTEXT + 1)

                results[name].append({
                    "file": path,
                    "line": i + 1,
                    "context": "".join(lines[start:end])
                })

with open(OUT, "w", encoding="utf-8") as out:

    out.write("AQUAMINDER PROTOCOL MINING REPORT\n")
    out.write("=" * 80 + "\n")
    out.write(f"Scanned JS files: {len(js_files)}\n\n")

    for name, hits in results.items():

        # unique file/line
        unique = {}
        for hit in hits:
            key = (hit["file"], hit["line"])
            unique[key] = hit

        out.write("\n")
        out.write("=" * 80 + "\n")
        out.write(f"{name} ({len(unique)} hits)\n")
        out.write("=" * 80 + "\n")

        for hit in unique.values():

            out.write("\n")
            out.write(
                f"--- {hit['file']}:{hit['line']} ---\n"
            )
            out.write(hit["context"])

print()
print("=" * 60)
print("DONE")
print("=" * 60)

for name, hits in results.items():

    unique_files = len(set(h["file"] for h in hits))

    print(
        f"{name:20s}: "
        f"{len(hits):5d} hits / "
        f"{unique_files:4d} files"
    )

print()
print(f"Report: {OUT}")