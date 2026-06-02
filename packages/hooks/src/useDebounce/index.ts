import { useRef, useEffect, useCallback , useMemo} from "react";

export interface IDebouncedFn<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): void;
  /** Cancel the waiting call */
  cancel: () => void;
  /** Execute the pending call immediately (synchronously) */
  flush: () => void;
}

/**
 * Debounce hook for values for callbacks.
 * Returns a deferred value or a function with a timer.
 */
export function useDebounce<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): IDebouncedFn<T> {
  const callbackRef = useRef<T>(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingRef = useRef<{ args: Parameters<T> } | null>(null);

  const debounced = useCallback(
    (...args: Parameters<T>) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      pendingRef.current = { args };
      timerRef.current = setTimeout(() => {
        timerRef.current = null;
        const pending = pendingRef.current;
        pendingRef.current = null;
        if (pending) callbackRef.current(...pending.args);
      }, delay);
    },
    [delay]
  ) as IDebouncedFn<T>;

  const cancel = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    pendingRef.current = null;
  }, []);

  const flush = useCallback(() => {
    if (timerRef.current && pendingRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
      const { args } = pendingRef.current;
      pendingRef.current = null;
      callbackRef.current(...args);
    }
  }, []);

  useEffect(() => cancel, [cancel]);

  return useMemo(() => {
    const fn = ((...args: Parameters<T>) =>
      debounced(...args)) as IDebouncedFn<T>;
    fn.cancel = cancel;
    fn.flush = flush;
    return fn;
  }, [debounced, cancel, flush]);
}
