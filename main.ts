// SPDX-License-Identifier: MIT
// Last Text at One Percent — the final text a dying phone sends at 1%.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke: the phone treats its own death like a will — last wishes for
// its search history and its charger — then lands the turn: the thing it
// loved most in life was ignoring the owner's alarms. Specific, in the
// phone's own voice, and short enough to read as a real text.
const LINE =
  "1% left. Delete my search history, tell the charger I loved it, and tell everyone I died doing what I loved: ignoring your alarms.";

function codePoints(text: string): number {
  return [...text].length;
}

function main(): void {
  const count = codePoints(LINE);
  if (count < 1 || count > 200 || LINE.trim().length === 0) {
    throw new Error(`entry must be 1-200 code points, got ${count}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
