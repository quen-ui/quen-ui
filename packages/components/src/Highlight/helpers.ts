import type { IHighlightProps, TMatchChunk, TMatch } from "./types";

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function normalizeRanges(
  ranges: Array<{ start: number; end: number }>,
  textLength: number
): TMatch[] {
  const cleaned = ranges
    .map((r) => ({
      start: Math.max(0, Math.min(textLength, r.start)),
      end: Math.max(0, Math.min(textLength, r.end)),
    }))
    .filter((r) => r.end > r.start)
    .sort((a, b) => a.start - b.start);

  if (cleaned.length === 0) return [];

  const merged: TMatch[] = [];
  let prev = cleaned[0];

  for (let i = 1; i < cleaned.length; i++) {
    const cur = cleaned[i];
    if (cur.start <= prev.end) {
      prev.end = Math.max(prev.end, cur.end);
    } else {
      merged.push({ ...prev, text: "" });
      prev = cur;
    }
  }
  merged.push({ ...prev, text: "" });

  return merged;
}


export function buildChunksFromRanges(text: string, ranges: TMatch[], maxChunks: number): TMatchChunk[] {
  const chunks: TMatchChunk[] = [];
  let cursor = 0;
  let matchesUsed = 0;

  for (const r of ranges) {
    if (cursor < r.start) {
      chunks.push({ type: "text", text: text.slice(cursor, r.start) });
    }

    if (matchesUsed < maxChunks) {
      chunks.push({
        type: "match",
        text: text.slice(r.start, r.end),
        start: r.start,
        end: r.end,
      });
      matchesUsed++;
    } else {
      chunks.push({ type: "text", text: text.slice(r.start, text.length) });
      cursor = text.length;
      break;
    }

    cursor = r.end;
  }

  if (cursor < text.length) {
    chunks.push({ type: "text", text: text.slice(cursor) });
  }

  return chunks;
}


/**
 * Build regex from query prop.
 * Returns a RegExp or null (if no queries).
 */
export function buildRegexFromQuery(
  query: string | string[] | RegExp | null | undefined,
  {
    caseSensitive = false,
    escapeQuery = true,
    splitByWords = false
  }: Pick<IHighlightProps, "caseSensitive" | "escapeQuery" | "splitByWords">
): RegExp | null {
  if (!query) return null;

  if (query instanceof RegExp) {
    const flags = query.flags || "";
    // Ensure we respect caseSensitive param: if caseSensitive === false, add 'i'
    const finalFlags = caseSensitive
      ? flags.replace("i", "")
      : flags.includes("i")
        ? flags
        : flags + "i";
    try {
      return new RegExp(query.source, finalFlags);
    } catch {
      return null;
    }
  }
  const arr = Array.isArray(query) ? query.filter(Boolean) : [query];

  const tokens = arr
    .map((t) => (escapeQuery ? escapeRegExp(t) : t))
    .filter((t) => t.length > 0)
    .map((t) => (splitByWords ? `\\b${t}\\b` : t));

  if (tokens.length === 0) return null;

  const pattern = tokens.join("|");
  try {
    return new RegExp(pattern, caseSensitive ? "g" : "gi");
  } catch {
    return null;
  }
}

/**
 * Resolve overlaps by preferring earlier matches and longer matches.
 * Strategy:
 *  - sort by start asc, length desc
 *  - iterate and keep if it doesn't overlap with previously kept
 */
function resolveOverlaps(matches: Array<{ start: number; end: number; text: string }>) {
  // sort by start asc, length desc (so longer matches at same start preferred)
  const sorted = matches
    .slice()
    .sort((a, b) => (a.start - b.start) || (b.end - b.end)); // length not directly calculated here
  // better sort: start asc, (end-start) desc
  sorted.sort((a, b) => (a.start - b.start) || (b.end - b.start) - (a.end - a.start));

  const kept: typeof matches = [];
  for (const m of sorted) {
    if (kept.length === 0) {
      kept.push(m);
      continue;
    }
    const last = kept[kept.length - 1];
    if (m.start >= last.end) {
      kept.push(m);
    } else {
      // overlap: prefer whichever is earlier (we already sorted), but check if m extends beyond last.end
      if (m.end > last.end) {
        // if m overlaps but extends farther, we could keep the union — but safer to keep last (earlier)
        // So we skip m. (This prevents splitting already selected text.)
        continue;
      }
      // else m inside last -> skip
    }
  }
  // finally, sort kept by start ascending
  kept.sort((a, b) => a.start - b.start);
  return kept;
}

/**
 * Given a subject string and a regex with 'g', produce non-overlapping matches sorted by index.
 */
export function collectMatches(subject: string, regex: RegExp): Array<{ start: number; end: number; text: string }> {
  if (!regex.global) {
    // ensure regex is global to iterate
    const flags = regex.flags.includes("g") ? regex.flags : regex.flags + "g";
    regex = new RegExp(regex.source, flags);
  }
  const matches: Array<{ start: number; end: number; text: string }> = [];
  let m: RegExpExecArray | null;
  // reset lastIndex
  regex.lastIndex = 0;
  while ((m = regex.exec(subject)) !== null) {
    const text = m[0];
    if (!text) {
      // prevent infinite loop for zero-length matches
      regex.lastIndex++;
      continue;
    }
    const start = m.index;
    const end = start + text.length;
    matches.push({ start, end, text });
  }
  return resolveOverlaps(matches);
}

/**
 * Turn subject + matches into chunks (text and match chunks)
 */
export function buildChunks(subject: string, matches: Array<{ start: number; end: number; text: string }>, maxChunks = Infinity) {
  const chunks: TMatchChunk[] = [];
  let cursor = 0;
  let countMatches = 0;

  for (const m of matches) {
    if (m.start > cursor) {
      chunks.push({ type: "text", text: subject.slice(cursor, m.start) });
    }
    if (countMatches < maxChunks) {
      chunks.push({ type: "match", text: subject.slice(m.start, m.end), start: m.start, end: m.end });
      countMatches++;
    } else {
      // exceed maxChunks: treat rest as normal text
      // append remainder and break
      chunks.push({ type: "text", text: subject.slice(m.start, subject.length) });
      cursor = subject.length;
      break;
    }
    cursor = m.end;
  }
  if (cursor < subject.length) {
    chunks.push({ type: "text", text: subject.slice(cursor) });
  }
  return chunks;
}
