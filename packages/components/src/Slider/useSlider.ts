import { useState, useEffect, useRef, useCallback } from "react";
import type { ISliderProps, TSliderValue, TSliderRangeValue } from "./types";

type DOMPointerEvent = globalThis.PointerEvent;

export const useSlider = ({
  value,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  range = false,
  disabled = false,
  orientation = "horizontal",
  draggableTrack = false
}: ISliderProps) => {
  const normalize = (
    v: TSliderValue | undefined,
    isRange: boolean
  ): TSliderRangeValue => {
    if (isRange) return Array.isArray(v) ? v : [min, max];
    const singleVal = typeof v === "number" ? v : min;
    return [singleVal, singleVal];
  };

  const [values, setValues] = useState<TSliderRangeValue>(() =>
    normalize(value, range)
  );
  const valuesRef = useRef(values);
  valuesRef.current = values;

  useEffect(() => {
    const next = normalize(value, range);
    setValues((prev) =>
      prev[0] === next[0] && prev[1] === next[1] ? prev : next
    );
  }, [value, range, min, max]);

  const clamp = (v: number) => Math.min(max, Math.max(min, v));
  const snap = useCallback(
    (raw: number) => clamp(Number((Math.round(raw / step) * step).toFixed(10))),
    [min, max, step]
  );
  const percentOf = (v: number) => ((v - min) / (max - min)) * 100;

  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const dragTargetRef = useRef<"start" | "end" | null>(null);
  const isDraggingRangeRef = useRef(false);
  const rangeOffsetRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const getRawValue = useCallback(
    (clientX: number, clientY: number) => {
      if (!trackRef.current) return min;
      const rect = trackRef.current.getBoundingClientRect();
      const ratio =
        orientation === "vertical"
          ? 1 - (clientY - rect.top) / rect.height
          : (clientX - rect.left) / rect.width;
      return min + Math.min(1, Math.max(0, ratio)) * (max - min);
    },
    [orientation, min, max]
  );

  const update = useCallback(
    (next: [number, number]) => {
      const [s, e] = next[0] > next[1] ? [next[1], next[0]] : next;
      setValues((prev) => {
        if (prev[0] === s && prev[1] === e) return prev;
        onChange?.(range ? [s, e] : e);
        return [s, e];
      });
    },
    [onChange, range]
  );

  // ✅ Принимаем строго DOM PointerEvent
  const attachDragListeners = (
    target: "start" | "end" | null,
    e: DOMPointerEvent,
    rangeOffset?: number
  ) => {
    if (disabled) return;
    isDraggingRef.current = true;
    dragTargetRef.current = target;
    isDraggingRangeRef.current = rangeOffset !== undefined;
    if (rangeOffset !== undefined) rangeOffsetRef.current = rangeOffset;
    setIsDragging(true);

    // Pointer capture для нативного события
    (e.target as HTMLElement)?.setPointerCapture?.(e.pointerId);

    const onMove = (ev: DOMPointerEvent) => {
      if (!isDraggingRef.current || !trackRef.current) return;
      ev.preventDefault();
      const raw = getRawValue(ev.clientX, ev.clientY);
      const current = valuesRef.current;

      if (isDraggingRangeRef.current) {
        const rangeSize = current[1] - current[0];
        const newStart = snap(raw - rangeOffsetRef.current);
        let finalStart = clamp(newStart);
        let finalEnd = clamp(finalStart + rangeSize);
        if (finalEnd > max) {
          finalEnd = max;
          finalStart = clamp(max - rangeSize);
        }
        update([finalStart, finalEnd]);
      } else if (target === "start") {
        update([snap(raw), current[1]]);
      } else if (target === "end") {
        update([current[0], snap(raw)]);
      }
    };

    const onUp = () => {
      isDraggingRef.current = false;
      dragTargetRef.current = null;
      isDraggingRangeRef.current = false;
      setIsDragging(false);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
  };

  // ✅ React boundary: извлекаем .nativeEvent
  const onPointerDownThumb = useCallback(
    (target: "start" | "end", e: React.PointerEvent) => {
      if (disabled) return;
      attachDragListeners(target, e.nativeEvent);
    },
    [disabled, attachDragListeners]
  );

  const onPointerDownTrack = useCallback(
    (e: React.PointerEvent) => {
      if (disabled) return;
      const nativeEvent = e.nativeEvent;
      const raw = getRawValue(nativeEvent.clientX, nativeEvent.clientY);
      const current = valuesRef.current;

      if (draggableTrack && range && raw >= current[0] && raw <= current[1]) {
        if (trackRef.current)
          trackRef.current.setPointerCapture(nativeEvent.pointerId);
        const offset = raw - current[0];
        attachDragListeners(null, nativeEvent, offset);
        return;
      }

      const snapped = snap(raw);
      if (range) {
        const distStart = Math.abs(snapped - current[0]);
        const distEnd = Math.abs(snapped - current[1]);
        const target = distStart <= distEnd ? "start" : "end";
        update(
          target === "start" ? [snapped, current[1]] : [current[0], snapped]
        );
      } else {
        update([snapped, snapped]);
      }
    },
    [
      disabled,
      getRawValue,
      draggableTrack,
      range,
      snap,
      update,
      attachDragListeners
    ]
  );

  const onKeyDown = useCallback(
    (target: "start" | "end", e: React.KeyboardEvent) => {
      if (disabled) return;
      const pageStep = Math.max(step, (max - min) / 10);
      let delta = 0;
      switch (e.key) {
        case "ArrowUp":
        case "ArrowRight":
          delta = step;
          break;
        case "ArrowDown":
        case "ArrowLeft":
          delta = -step;
          break;
        case "Home":
          delta = min - values[target === "start" ? 0 : 1];
          break;
        case "End":
          delta = max - values[target === "start" ? 0 : 1];
          break;
        case "PageUp":
          delta = pageStep;
          break;
        case "PageDown":
          delta = -pageStep;
          break;
        default:
          return;
      }
      e.preventDefault();
      const current = values[target === "start" ? 0 : 1];
      const newVal = snap(current + delta);
      update(target === "start" ? [newVal, values[1]] : [values[0], newVal]);
    },
    [disabled, values, step, min, max, snap, update]
  );

  return {
    values,
    trackRef,
    percentStart: percentOf(values[0]),
    percentEnd: percentOf(values[1]),
    onPointerDownThumb,
    onPointerDownTrack,
    onKeyDown,
    isDragging
  };
};
