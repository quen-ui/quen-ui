import { useState, useCallback } from "react";

export function useControllableState<T>({
  value,
  defaultValue,
  onChange
}: {
  value?: T;
  defaultValue?: T;
  onChange?: (v: T) => void;
}) {
  const [internal, setInternal] = useState<T | undefined>(defaultValue);
  const isControlled = value !== undefined;
  const state = isControlled ? (value as T) : (internal as T);
  const setState = useCallback(
    (v: T) => {
      if (!isControlled) setInternal(v);
      if (onChange) onChange(v);
    },
    [isControlled, onChange]
  );
  return [state, setState] as const;
}
