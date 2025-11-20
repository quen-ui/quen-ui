import React, { useCallback, useEffect, useRef, useState } from "react";
import type { ISliderProps, TSliderRangeValue, TSliderValue } from "./types";
import {
  SliderContainer,
  SliderTrackStyled,
  SliderProgressStyled,
  SliderThumbStyled,
  SliderDotStyled,
  SliderLabelStyled,
  SliderMarkStyled,
  SliderTooltipStyled
} from "./styles";
import { cnMerge } from "@quen-ui/helpers";

const Slider = ({
  value = 0,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  showTooltip = true,
  size = "m",
  range,
  orientation = "horizontal",
  marks = [],
  draggableTrack,
  tooltip,
  style,
  className,
  disabled,
  color = "violet"
}: ISliderProps) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const initialValue = (_value: TSliderValue): TSliderRangeValue => {
    if (!range) {
      return Array.isArray(_value) ? _value : [_value ?? min, _value ?? min];
    }
    return [min, typeof _value === "number" ? _value : min];
  };

  const [startEndValues, setStartEndValues] = useState<TSliderRangeValue>(
    initialValue(value)
  );
  const [currentHandle, setCurrentHandle] = useState<"start" | "end" | null>(
    null
  );
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    setStartEndValues(initialValue(value));
  }, [value]);

  const clamp = (val: number) => Math.min(max, Math.max(min, val));

  const snap = (raw: number) => {
    return clamp(Math.round(raw / step) * step);
  };
  const percentOf = (v: number) => ((v - min) / (max - min)) * 100;

  const updateValue = useCallback(
    (newVal: [number, number]) => {
      if (newVal[0] !== startEndValues[0] || newVal[1] !== startEndValues[1]) {
        setStartEndValues(newVal);
        onChange?.(range ? newVal : newVal[1]);
      }
    },
    [range, onChange]
  );

  const setByValue = (raw: number, target?: "start" | "end") => {
    const snapped = snap(raw);

    let next: [number, number] =
      target === "start"
        ? [snapped, startEndValues[1]]
        : [startEndValues[0], snapped];
    if (next[0] > next[1]) {
      next = [next[1], next[0]];
    }
    updateValue(next);
  };

  const handleTrackClick = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();

    const ratio =
      orientation === "vertical"
        ? 1 - (e.clientY - rect.top) / rect.height
        : (e.clientX - rect.left) / rect.width;

    const raw = min + ratio * (max - min);
    setByValue(raw);
  };

  const handleMove = (e: MouseEvent | TouchEvent, target: "start" | "end") => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();

    const client = "touches" in e ? e.touches[0] : e;

    let ratio =
      orientation === "vertical"
        ? 1 - (client.clientY - rect.top) / rect.height
        : (client.clientX - rect.left) / rect.width;

    ratio = Math.min(1, Math.max(0, ratio));

    const rawValue = min + ratio * (max - min);

    setByValue(rawValue, target);
  };

  const bindEvents = (target: "start" | "end") => ({
    onMouseDown: (e: React.MouseEvent) => {
      e.preventDefault();
      setCurrentHandle(target);
      setIsMouseDown(true);
      const move = (ev: MouseEvent) => handleMove(ev as any, target);
      const up = () => {
        setCurrentHandle(null);
        setIsMouseDown(false);
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", up, { capture: true });
      };
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", up, { capture: true });
    },

    onTouchStart: () => {
      setCurrentHandle(target);
      setIsMouseDown(true);
      const move = (ev: TouchEvent) => handleMove(ev as any, target);
      const up = () => {
        setCurrentHandle(null);
        setIsMouseDown(false);
        document.removeEventListener("touchmove", move);
        document.removeEventListener("touchend", up);
      };
      document.addEventListener("touchmove", move);
      document.addEventListener("touchend", up);
    },

    onMouseMove: () => {
      setCurrentHandle(target);
    },

    onMouseLeave: () => {
      if (!isMouseDown) {
        setCurrentHandle(null);
      }
    }
  });

  const startDragWholeRange = (e: React.MouseEvent | React.TouchEvent) => {
    if (!draggableTrack || !range || !trackRef.current) return;

    const rect = trackRef.current.getBoundingClientRect();

    const startClient = "touches" in e ? e.touches[0] : e;

    const startRatio =
      orientation === "vertical"
        ? 1 - (startClient.clientY - rect.top) / rect.height
        : (startClient.clientX - rect.left) / rect.width;

    const startValue = min + startRatio * (max - min);
    const rangeSize = startEndValues[1] - startEndValues[0];

    const offsetInsideRange = startValue - startEndValues[0];

    const move = (ev: any) => {
      const client = "touches" in ev ? ev.touches[0] : ev;

      let ratio =
        orientation === "vertical"
          ? 1 - (client.clientY - rect.top) / rect.height
          : (client.clientX - rect.left) / rect.width;

      ratio = Math.min(1, Math.max(0, ratio));

      const rawValue = min + ratio * (max - min);

      let newStart = rawValue - offsetInsideRange;
      let newEnd = newStart + rangeSize;

      if (newStart < min) {
        newStart = min;
        newEnd = min + rangeSize;
      }
      if (newEnd > max) {
        newStart = max - rangeSize;
      }

      const snappedStart = snap(newStart);
      const snappedEnd = snap(snappedStart + rangeSize);

      const next: [number, number] = [snappedStart, snappedEnd];
      updateValue(next);
    };

    const stop = () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", stop);
      document.removeEventListener("touchmove", move);
      document.removeEventListener("touchend", stop);
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", stop);
    document.addEventListener("touchmove", move);
    document.addEventListener("touchend", stop);
  };

  return (
    <SliderContainer
      disabled={disabled}
      size={size}
      isVertical={orientation === "vertical"}
      style={style}
      className={className}>
      <SliderTrackStyled
        data-testid="slider-track"
        disabled={disabled}
        ref={trackRef}
        isVertical={orientation === "vertical"}
        onClick={handleTrackClick}>
        <SliderProgressStyled
          data-testid="slider-progress"
          disabled={disabled}
          color={color}
          onMouseDown={startDragWholeRange}
          onTouchStart={startDragWholeRange}
          isVertical={orientation === "vertical"}
          style={{
            [orientation === "vertical" ? "bottom" : "left"]:
              `${percentOf(startEndValues[0])}%`,
            [orientation === "vertical" ? "top" : "right"]:
              `${100 - percentOf(startEndValues[1])}%`
          }}
        />

        {range && (
          <SliderTooltipStyled
            isVertical={orientation === "vertical"}
            open={currentHandle === "start"}
            show={showTooltip}
            text={startEndValues[0]}
            position={orientation === "vertical" ? "right" : "top"}
            style={{
              [orientation === "vertical" ? "bottom" : "left"]:
                `${percentOf(startEndValues[0])}%`
            }}
            {...tooltip}
            classNameContent={cnMerge(
              "quen-ui__slider__tooltip__content",
              tooltip?.classNameContent
            )}>
            <SliderThumbStyled
              aria-orientation={orientation}
              role="slider"
              disabled={disabled}
              color={color}
              isVertical={orientation === "vertical"}
              {...bindEvents("start")}
            />
          </SliderTooltipStyled>
        )}
        <SliderTooltipStyled
          isVertical={orientation === "vertical"}
          open={currentHandle === "end"}
          show={showTooltip}
          text={startEndValues[1]}
          position={orientation === "vertical" ? "right" : "top"}
          style={{
            [orientation === "vertical" ? "top" : "left"]:
              `${orientation === "vertical" ? 100 - percentOf(startEndValues[1]) : percentOf(startEndValues[1])}%`
          }}
          {...tooltip}
          classNameContent={cnMerge(
            "quen-ui__slider__tooltip__content",
            tooltip?.classNameContent
          )}>
          <SliderThumbStyled
            role="slider"
            aria-orientation={orientation}
            disabled={disabled}
            color={color}
            isVertical={orientation === "vertical"}
            {...bindEvents("end")}
          />
        </SliderTooltipStyled>

        {marks.map((m) => (
          <SliderMarkStyled
            className={m.className}
            onClick={(e) => {
              e.stopPropagation();
              setByValue(m.value);
            }}
            key={m.value}
            isVertical={orientation === "vertical"}
            style={{
              [orientation === "vertical" ? "bottom" : "left"]:
                `${percentOf(m.value)}%`,
              ...m.style
            }}>
            <SliderDotStyled />
            {m.label && (
              <SliderLabelStyled isVertical={orientation === "vertical"}>
                {m.label}
              </SliderLabelStyled>
            )}
          </SliderMarkStyled>
        ))}
      </SliderTrackStyled>
    </SliderContainer>
  );
};

export default Slider;
