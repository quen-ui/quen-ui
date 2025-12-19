import { useCallback, useRef } from "react";

export function useControllableState<T>({
  value,
  defaultValue,
  onChange
}: {
  value?: T;
  defaultValue?: T;
  onChange?: (v: T) => void;
}) {
  const internal = useRef<T | undefined>(defaultValue);
  const isControlled = value !== undefined;
  const state = isControlled ? (value as T) : (internal.current as T);
  const setState = useCallback(
    (v: T) => {
      if (!isControlled){
        internal.current = v;
      }
      if (onChange) {
        onChange(v);
      }
    },
    [isControlled, onChange]
  );
  return [state, setState] as const;
}
