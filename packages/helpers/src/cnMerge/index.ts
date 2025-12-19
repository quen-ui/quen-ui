type ClassValue = string | undefined | null | false | Record<string, boolean>;

export function cnMerge(...classes: ClassValue[]): string {
  return classes
    .flatMap((cls) => {
      if (!cls) return [];
      if (typeof cls === "string") return [cls];
      return Object.entries(cls)
        .filter(([, condition]) => condition)
        .map(([className]) => className);
    })
    .join(" ");
}
