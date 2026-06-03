import type { TValueCompareFn } from "./types";

export const ruleValidators: Record<string, (v: any) => boolean> = {
  email: (v) => /\S+@\S+\.\S+/.test(String(v)),
  url: (v) =>
    /^(https?:\/\/)?([\w.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(String(v)),
  number: (v) => !isNaN(Number(v))
};

// The default comparison function is via JSON.stringify
export const defaultCompareValues: TValueCompareFn = (a, b) => {
  if (a === b) return true;
  try {
    return JSON.stringify(a) === JSON.stringify(b);
  } catch {
    return false;
  }
};
