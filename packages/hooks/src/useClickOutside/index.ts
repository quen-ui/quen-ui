import { useEffect, RefObject, useCallback } from "react";

export function useOnClickOutside<E extends HTMLElement>(
  ref: RefObject<E | null> | RefObject<E | null>[],
  handler?: () => void,
  options?: {
    isActive?: boolean;
    ignoreScrollbar?: boolean;
    excludeRef?:
      | RefObject<HTMLElement | null>
      | RefObject<HTMLElement | null>[];
  }
): void {
  const { isActive = true, ignoreScrollbar = false } = options || {};

  const listener = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (!handler) return;

      const target = event.target as HTMLElement | null;
      if (!target) return;

      if (
        !ignoreScrollbar &&
        event instanceof MouseEvent &&
        window.innerWidth - event.clientX < 20 &&
        window.scrollbars?.visible
      ) {
        return;
      }

      const refs = Array.isArray(ref) ? ref : [ref];
      const excludeRefs = options?.excludeRef
        ? Array.isArray(options.excludeRef)
          ? options.excludeRef
          : [options.excludeRef]
        : [];

      const composedPath = event.composedPath?.() || [];

      const isInsideRef = refs.some(
        (r) =>
          r?.current &&
          (r.current.contains(target) || composedPath.includes(r.current))
      );
      const isInsideExclude = excludeRefs.some(
        (r) =>
          r?.current &&
          (r.current.contains(target) || composedPath.includes(r.current))
      );

      if (isInsideRef || isInsideExclude) return;

      handler();
    },
    [handler, ref, options?.excludeRef, ignoreScrollbar]
  );

  useEffect(() => {
    if (!isActive || typeof document === "undefined") return;

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [listener, isActive]);
}
