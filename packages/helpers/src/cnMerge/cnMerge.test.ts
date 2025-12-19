import { cnMerge } from "./";

describe("cnMerge", () => {
  it("concatenates simple strings", () => {
    expect(cnMerge("btn", "btn-primary")).toBe("btn btn-primary");
  });

  it("ignores undefined, null, and false", () => {
    expect(cnMerge("btn", undefined, null, false, "active")).toBe("btn active");
  });

  it("works with conditional classes (objects)", () => {
    expect(
      cnMerge("btn", { "btn-primary": true, "btn-disabled": false })
    ).toBe("btn btn-primary");
  });

  it("concatenates strings and objects together", () => {
    expect(
      cnMerge("px-2", "py-1", { "bg-blue": true, "bg-red": false })
    ).toBe("px-2 py-1 bg-blue");
  });

  it("returns an empty string if all values are falsy", () => {
    expect(cnMerge(undefined, null, false)).toBe("");
  });
});
