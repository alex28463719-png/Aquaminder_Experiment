#!/usr/bin/env python3
"""
Run this LOCALLY against your full aquaminder_modules folder (not something
you upload to me -- it's meant to scan all ~700 files at once and produce a
short report you can share back).

Usage:
  python mine_protocol.py "E:\\3 Nikhil Personal File\\Nikhil file\\Aquaminder_Experiment\\aquaminder_modules"

What it looks for (structural, not English-keyword-based):
  1. Literal "AA0" substrings -- every known command header (AA01/AA05/AA06)
     is built this way. Catches unknown command IDs the same way.
  2. Every call site of sendHexCommand( / writeBLECharacteristicValue( --
     the two functions ALL BLE writes funnel through, regardless of what
     the surrounding feature is called internally.
  3. Every file that imports module 646 (the BLE transport layer) -- i.e.
     every file capable of sending a BLE command at all, whether or not
     it's reachable from the current UI.

Output: mined_protocol_report.txt in the current directory, plus a summary
printed to the console.
"""

import sys
import os
import re

if len(sys.argv) < 2:
    print("Usage: python mine_protocol.py <path to aquaminder_modules folder>")
    sys.exit(1)

ROOT = sys.argv[1]
OUT_PATH = "mined_protocol_report.txt"

CONTEXT_LINES = 3

patterns = {
    "AA0_literal": re.compile(r'AA0'),
    "sendHexCommand_call": re.compile(r'sendHexCommand\s*\('),
    "writeBLE_call": re.compile(r'writeBLECharacteristicValue\s*\('),
    "module_646_import": re.compile(r'(callback\(646\)|module_646|"module_646"|from "module_646")'),
    "buildCycleByte_call": re.compile(r'buildCycleByte\s*\('),
    "getCycleInfo_call": re.compile(r'getCycleInfo\s*\('),
}

results = {key: [] for key in patterns}

js_files = []
for dirpath, _, filenames in os.walk(ROOT):
    for fn in filenames:
        if fn.endswith(".js"):
            js_files.append(os.path.join(dirpath, fn))

print(f"Scanning {len(js_files)} .js files under {ROOT} ...")

for path in js_files:
    try:
        with open(path, "r", encoding="utf-8", errors="replace") as f:
            lines = f.readlines()
    except Exception as e:
        print(f"  (skipping {path}: {e})")
        continue

    for i, line in enumerate(lines):
        for key, pat in patterns.items():
            if pat.search(line):
                start = max(0, i - CONTEXT_LINES)
                end = min(len(lines), i + CONTEXT_LINES + 1)
                context = "".join(lines[start:end])
                results[key].append({
                    "file": os.path.basename(path),
                    "line": i + 1,
                    "context": context,
                })

with open(OUT_PATH, "w", encoding="utf-8") as out:
    for key, hits in results.items():
        out.write(f"\n{'='*70}\n{key}  ({len(hits)} hit(s))\n{'='*70}\n")
        # de-dup identical (file, line) shown from overlapping patterns is fine,
        # but avoid literally identical repeated context blocks in the same file.
        seen = set()
        for hit in hits:
            sig = (hit["file"], hit["line"])
            if sig in seen:
                continue
            seen.add(sig)
            out.write(f"\n--- {hit['file']}:{hit['line']} ---\n")
            out.write(hit["context"])
            out.write("\n")

print(f"\nDone. Report written to {OUT_PATH}\n")
print("Summary:")
for key, hits in results.items():
    unique_files = len(set(h["file"] for h in hits))
    print(f"  {key:28s} {len(hits):4d} hit(s) across {unique_files} file(s)")

print(f"\nOpen {OUT_PATH} and look especially at:")
print("  - AA0_literal hits from files OTHER than 646/789/790 (those are")
print("    already understood -- anything new here is your AA07/AA08 lead)")
print("  - sendHexCommand_call / writeBLE_call hits in files you haven't")
print("    looked at yet -- each one is a distinct BLE command in the app")
