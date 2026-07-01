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
import { cnMerge, deepMerge } from "@quen-ui/helpers";
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
  onChange,
  classNames,
  styles
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
          className={classNames?.thumb}
          data-semantic="thumb"
          key={target}
          style={deepMerge(
            {
              position: "absolute",
              zIndex: 2,
              overflow: "visible",
              [isVert ? "top" : "left"]: isVert
                ? `${100 - percent}%`
                : `${percent}%`,
              [isVert ? "left" : "top"]: "50%",
              transform: "translate(-50%, -50%)"
            },
            styles?.thumb ?? {}
          )}>
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
            )}>
            {null}
          </SliderTooltipStyled>
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
      data-semantic="root"
      disabled={disabled}
      style={deepMerge(style ?? {}, styles?.root ?? {})}
      className={cnMerge(className, classNames?.root)}
      role="group"
      aria-label="Slider">
      <SliderTrackStyled
        className={classNames?.track}
        style={styles?.track}
        data-semantic="track"
        ref={trackRef}
        disabled={disabled}
        isVertical={orientation === "vertical"}
        onPointerDown={onPointerDownTrack}
      />
      <SliderProgressStyled
        className={classNames?.progress}
        style={styles?.progress}
        data-semantic="progress"
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

      <SliderMarksWrapperStyled
        isVertical={orientation === "vertical"}
        data-semantic="marks"
        style={styles?.marks}
        className={classNames?.marks}>
        {marks.map((m) => (
          <SliderMarkStyled
            data-semantic="mark"
            key={m.value}
            className={cnMerge(m.className, classNames?.mark)}
            style={deepMerge(m.style ?? {}, styles?.mark ?? {})}
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
