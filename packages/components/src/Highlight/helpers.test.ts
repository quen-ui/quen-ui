import { normalizeRanges, buildChunksFromRanges, buildChunks, buildRegexFromQuery, collectMatches} from "./helpers";

describe("normalizeRanges", () => {
  it("empty input → empty output", () => {
    expect(normalizeRanges([], 10)).toEqual([]);
  });

  it("clamps ranges to textLength", () => {
    const result = normalizeRanges(
      [{ start: -5, end: 50 }],
      10
    );
    expect(result).toEqual([
      { start: 0, end: 10, text: "" }
    ]);
  });

  it("filters invalid ranges", () => {
    const result = normalizeRanges(
      [
        { start: 5, end: 3 },
        { start: 1, end: 2 },
      ],
      10
    );
    expect(result).toEqual([{ start: 1, end: 2, text: "" }]);
  });

  it("sorts and merges overlapping ranges", () => {
    const result = normalizeRanges(
      [
        { start: 5, end: 10 },
        { start: 2, end: 6 },
      ],
      20
    );
    expect(result).toEqual([{ start: 2, end: 10, text: "" }]);
  });

  it("keeps non-overlapping ranges separate", () => {
    const result = normalizeRanges(
      [
        { start: 1, end: 3 },
        { start: 5, end: 7 },
      ],
      20
    );
    expect(result).toEqual([
      { start: 1, end: 3, text: "" },
      { start: 5, end: 7, text: "" },
    ]);
  });
});

describe("buildChunksFromRanges", () => {
  it("builds chunks for ranges", () => {
    const text = "abcdefgh";
    const ranges = [
      { start: 2, end: 4, text: "" },
      { start: 6, end: 7, text: "" },
    ];
    const result = buildChunksFromRanges(text, ranges, Infinity);
    expect(result).toEqual([
      { type: "text", text: "ab" },
      { type: "match", text: "cd", start: 2, end: 4 },
      { type: "text", text: "ef" },
      { type: "match", text: "g", start: 6, end: 7 },
      { type: "text", text: "h" },
    ]);
  });

  it("no ranges → returns full text", () => {
    expect(buildChunksFromRanges("hello", [], 10)).toEqual([
      { type: "text", text: "hello" }
    ]);
  });
});

describe("buildRegexFromQuery", () => {
  it("null query → null", () => {
    expect(buildRegexFromQuery(null, {} as any)).toBeNull();
  });

  it("RegExp is reused with modified flags", () => {
    const r = buildRegexFromQuery(/abc/, { caseSensitive: false } as any);
    expect(r).toBeInstanceOf(RegExp);
    expect(r!.flags.includes("i")).toBe(true);
  });

  it("string query is escaped when escapeQuery = true", () => {
    const r = buildRegexFromQuery("a+b", { escapeQuery: true } as any);
    expect(r!.source).toBe("a\\+b");
  });

  it("string array joins with |", () => {
    const r = buildRegexFromQuery(["one", "two"], {} as any);
    expect(r!.source).toBe("one|two");
  });

  it("splitByWords adds boundaries", () => {
    const r = buildRegexFromQuery("cat", { splitByWords: true } as any);
    expect(r!.source).toBe("\\bcat\\b");
  });

  it("returns null for empty tokens", () => {
    const r = buildRegexFromQuery(["", ""], {} as any);
    expect(r).toBeNull();
  });
});

describe("collectMatches", () => {
  it("resolves overlaps by longest-first sorting", () => {
    const result = collectMatches("aaaa", /aa|a/g);
    expect(result).toEqual([
      { start: 0, end: 2, text: "aa" },
      { start: 2, end: 4, text: "aa" },
    ]);
  });
});

describe("buildChunks", () => {
  it("basic chunk generation", () => {
    const subject = "abcdef";
    const matches = [
      { start: 1, end: 3, text: "bc" },
      { start: 4, end: 5, text: "e" },
    ];
    const result = buildChunks(subject, matches);
    expect(result).toEqual([
      { type: "text", text: "a" },
      { type: "match", text: "bc", start: 1, end: 3 },
      { type: "text", text: "d" },
      { type: "match", text: "e", start: 4, end: 5 },
      { type: "text", text: "f" },
    ]);
  });

  it("no matches → full text chunk", () => {
    expect(buildChunks("hello", [], 100)).toEqual([
      { type: "text", text: "hello" }
    ]);
  });
});
