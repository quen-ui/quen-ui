import { useEffect, RefObject, useCallback } from "react";

export interface IUseClickOutsideOptions {
  /** Is the listener active? */
  isActive?: boolean;
  /** Ignore scrollbar clicks */
  ignoreScrollbar?: boolean;
  /** Links to elements that are NOT considered "external" when clicked" */
  excludeRef?: RefObject<HTMLElement | null> | RefObject<HTMLElement | null>[];
}

export function useOnClickOutside<E extends HTMLElement>(
  ref: RefObject<E | null> | RefObject<E | null>[],
  handler: ((event: MouseEvent | TouchEvent) => void) | undefined,
  options: IUseClickOutsideOptions = {}
): void {
  const { isActive = true, ignoreScrollbar = false, excludeRef } = options;

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
      const excludes = Array.isArray(excludeRef)
        ? excludeRef
        : excludeRef
          ? [excludeRef]
          : [];
      const composedPath = event.composedPath?.() || [];

      const isInside = (nodes: RefObject<HTMLElement | null>[]) =>
        nodes.some((node) => {
          if (!node?.current) return false;
          if (node.current.contains(target)) return true;
          if (composedPath.includes(node.current)) return true;
          return false;
        });

      if (isInside(refs) || isInside(excludes)) return;

      handler(event);
    },
    [handler, ref, excludeRef, ignoreScrollbar]
  );

  useEffect(() => {
    if (!isActive || typeof document === "undefined") return;

    document.addEventListener("mousedown", listener, true);
    document.addEventListener("touchstart", listener, true);

    return () => {
      document.removeEventListener("mousedown", listener, true);
      document.removeEventListener("touchstart", listener, true);
    };
  }, [listener, isActive]);
}
