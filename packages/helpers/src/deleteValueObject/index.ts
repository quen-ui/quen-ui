import { TKeyObjectType } from "../types/typesDeepObject";

export function deleteValueObject<T extends object>(obj: T, path: TKeyObjectType<T>): T {
  if (!obj || typeof obj !== "object") return obj;
  if (!path) return obj;

  const parts = path
    .split(".")
    .filter(Boolean);

  function cloneAndDelete(current: any, i: number): any {
    if (i >= parts.length) return current;

    const key = parts[i];

    if (Array.isArray(current)) {
      const cloned = [...current];
      const index = Number(key);

      if (isNaN(index) || index < 0 || index >= cloned.length) return cloned;

      if (i === parts.length - 1) {
        cloned.splice(index, 1);
        return cloned;
      }

      cloned[index] = cloneAndDelete(cloned[index], i + 1);
      return cloned;
    }

    if (typeof current === "object" && current !== null) {
      if (!(key in current)) return current;

      const cloned = { ...current };

      if (i === parts.length - 1) {
        delete cloned[key];
        return cloned;
      }

      cloned[key] = cloneAndDelete(cloned[key], i + 1);
      return cloned;
    }

    return current;
  }

  return cloneAndDelete(obj, 0);
}
