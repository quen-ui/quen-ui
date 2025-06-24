export function deepMerge<T extends Record<string, any>, U extends Record<string, any>>(
  target: T,
  source: U
): T & U {
  const result = { ...target } as Record<string, any>;

  for (const key of Object.keys(source)) {
    const sourceValue = source[key];
    const targetValue = target[key as keyof T];

    if (sourceValue instanceof Date) {
      result[key] = new Date(sourceValue);
    } else if (Array.isArray(sourceValue)) {
      result[key] = sourceValue.slice();
    } else if (
      sourceValue !== null &&
      typeof sourceValue === 'object' &&
      targetValue !== null &&
      typeof targetValue === 'object' &&
      !Array.isArray(targetValue)
    ) {
      result[key] = deepMerge(targetValue, sourceValue);
    } else {
      result[key] = sourceValue;
    }
  }

  return result as T & U;
}
