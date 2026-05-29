import React, { useCallback, useState } from "react";
import type { ISliderProps, TSliderRangeValue } from "./types";
import {
  SliderContainer,
  SliderTrackStyled,
  SliderProgressStyled,
  SliderThumbStyled,
  SliderDotStyled,
  SliderLabelStyled,
  SliderTooltipStyled,
  SliderMarksWrapperStyled,
  SliderMarkStyled
} from "./styles";
import { cnMerge } from "@quen-ui/helpers";
import { useSlider } from "./useSlider";

const Slider = ({
  min = 0,
  max = 100,
  step = 1,
  range = false,
  orientation = "horizontal",
  marks = [],
  disabled = false,
  showTooltip = true,
  draggableTrack = false,
  color = "violet",
  tooltip,
  style,
  className,
  value,
  onChange
}: ISliderProps) => {
  const {
    values,
    trackRef,
    percentStart,
    percentEnd,
    onPointerDownThumb,
    onPointerDownTrack,
    onKeyDown,
    isDragging
  } = useSlider({
    value,
    min,
    max,
    step,
    onChange,
    range,
    disabled,
    orientation,
    draggableTrack
  });

  const [isActive, setIsActive] = useState(false);
  const renderThumb = useCallback(
    (target: "start" | "end", currentValue: number, percent: number) => {
      const valText = `${target === "start" ? "From" : "To"} ${currentValue}`;
      const isVert = orientation === "vertical";

      return (
        <div
          key={target}
          style={{
            position: "absolute",
            zIndex: 2,
            overflow: "visible",
            [isVert ? "top" : "left"]: isVert
              ? `${100 - percent}%`
              : `${percent}%`,
            [isVert ? "left" : "top"]: "50%",
            transform: "translate(-50%, -50%)"
          }}>
          <SliderTooltipStyled
            isVertical={isVert}
            open={isActive}
            show={showTooltip}
            text={currentValue}
            position={isVert ? "right" : "top"}
            value={percent}
            {...tooltip}
            classNameContent={cnMerge(
              "quen-ui__slider__tooltip__content",
              tooltip?.classNameContent
            )}
          />
          <SliderThumbStyled
            role="slider"
            tabIndex={disabled ? -1 : 0}
            aria-disabled={disabled}
            aria-orientation={orientation}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={currentValue}
            aria-valuetext={valText}
            aria-label={range ? valText : "Slider value"}
            disabled={disabled}
            color={color}
            isVertical={isVert}
            onPointerDown={(e) => {
              setIsActive(true);
              onPointerDownThumb(target, e);
            }}
            onPointerUp={() => setIsActive(false)}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => !isDragging && setIsActive(false)}
            onFocus={() => setIsActive(true)}
            onBlur={() => !isDragging && setIsActive(false)}
            onKeyDown={(e) => onKeyDown(target, e)}
          />
        </div>
      );
    },
    [
      orientation,
      showTooltip,
      tooltip,
      disabled,
      min,
      max,
      color,
      range,
      isDragging,
      isActive,
      onPointerDownThumb,
      onKeyDown
    ]
  );

  return (
    <SliderContainer
      disabled={disabled}
      style={style}
      className={className}
      role="group"
      aria-label="Slider">
      <SliderTrackStyled
        ref={trackRef}
        disabled={disabled}
        isVertical={orientation === "vertical"}
        onPointerDown={onPointerDownTrack}
      />
      <SliderProgressStyled
        isRange={range}
        range={[percentStart, percentEnd]}
        disabled={disabled}
        color={color}
        isVertical={orientation === "vertical"}
      />

      {range ? (
        <>
          {renderThumb("start", (values as TSliderRangeValue)[0], percentStart)}
          {renderThumb("end", (values as TSliderRangeValue)[1], percentEnd)}
        </>
      ) : (
        renderThumb("end", values[1], percentEnd)
      )}

      <SliderMarksWrapperStyled isVertical={orientation === "vertical"}>
        {marks.map((m) => (
          <SliderMarkStyled
            key={m.value}
            className={m.className}
            style={m.style}
            isVertical={orientation === "vertical"}
            value={((m.value - min) / (max - min)) * 100}
            onPointerDown={(e) => {
              if (disabled) return;
              e.stopPropagation();
              onPointerDownTrack(e);
            }}>
            <SliderDotStyled />
            {m.label && (
              <SliderLabelStyled isVertical={orientation === "vertical"}>
                {m.label}
              </SliderLabelStyled>
            )}
          </SliderMarkStyled>
        ))}
      </SliderMarksWrapperStyled>
    </SliderContainer>
  );
};

export default Slider;
