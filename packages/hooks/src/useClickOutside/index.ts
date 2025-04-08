import { useEffect, RefObject, useCallback } from "react";

export function useOnClickOutside<E extends HTMLElement>(
  ref: RefObject<E | null> | RefObject<E | null>[],
  handler?: () => void,
  options?: {
    isActive?: boolean;
    ignoreScrollbar?: boolean;
    excludeRef?: RefObject<HTMLElement | null> | RefObject<HTMLElement | null>[];
  }
): void {
  const { isActive = true, ignoreScrollbar = false } = options || {};
  const listener = useCallback((event: MouseEvent | TouchEvent) => {
    if (!handler) {
      return;
    }

    const target = event.target as HTMLElement | null;
    if (!target) {
      return;
    }

    if (
      !ignoreScrollbar &&
      event instanceof MouseEvent &&
      window.innerWidth - event.clientX < 20 &&
      window.scrollbars?.visible
    ) {
      return;
    }

    if (options?.excludeRef) {
      const excludeArray = Array.isArray(options.excludeRef)
        ? options.excludeRef
        : [options.excludeRef];

      if (excludeArray.some((r) => r.current?.contains(target))) {
        return;
      }
    }

    const refArray = Array.isArray(ref) ? ref : [ref];
    if (refArray.some((r) => r.current?.contains(target))) {
      return;
    }

    handler();

  }, [handler, ref, ignoreScrollbar, options?.excludeRef]);

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
