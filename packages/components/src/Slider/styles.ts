import styled, { css } from "styled-components";
import { Text } from "../typography/Text";
import { Tooltip } from "../Tooltip";
import { ISliderProps } from "./types";

export const SliderContainer = styled.div<{
  disabled?: boolean;
}>`
  position: relative;
  margin: 0.5rem;
  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
    `};
`;

export const SliderTrackStyled = styled.div.withConfig({
  shouldForwardProp: (prop: string) => !["isVertical", "size"].includes(prop)
})<{
  isVertical: boolean;
  disabled?: boolean;
}>`
  position: absolute;
  background: ${({ theme, disabled }) =>
    disabled
      ? theme.components.Slider.trackDisabledBackgroundColor
      : theme.components.Slider.trackBackgroundColor};
  border-radius: ${({ theme }) => theme.components.Slider.radius};
  cursor: pointer;

  ${({ isVertical }) =>
    isVertical
      ? css`
          width: 6px;
          height: 100%;
        `
      : css`
          height: 6px;
          width: 100%;
        `}
`;

export const SliderProgressStyled = styled.div.withConfig({
  shouldForwardProp: (prop: string) =>
    !["isVertical", "color", "range", "isRange"].includes(prop)
})<{
  isVertical: boolean;
  disabled?: boolean;
  color: ISliderProps["color"];
  range: [number, number];
  isRange?: boolean;
}>`
  position: absolute;
  ${({ theme, isVertical }) =>
    isVertical
      ? css`
          width: ${theme.components.Slider.height};
        `
      : css`
          height: ${theme.components.Slider.height};
        `};
  background: ${({ theme, disabled, color = "violet" }) =>
    disabled
      ? theme.components.Slider.progressDisabledBackgroundColor
      : theme.colors[color][9]};
  border-radius: ${({ theme }) => theme.components.Slider.radius};
  cursor: pointer;

  ${({ isVertical, range, isRange }) =>
    isVertical
      ? css`
          height: ${isRange ? range[1] - range[0] : range[1]}%;
          bottom: ${isRange ? range[0] : 0}%;
        `
      : css`
          left: ${isRange ? range[0] : 0}%;
          width: ${isRange ? `${range[1] - range[0]}%` : `${range[1]}%`};
        `}
`;

export const SliderThumbStyled = styled.div.withConfig({
  shouldForwardProp: (prop: string) => !["isVertical", "color"].includes(prop)
})<{ isVertical: boolean; disabled?: boolean; color: ISliderProps["color"] }>`
  position: absolute;
  width: 1rem;
  height: 1rem;
  background: white;
  border: 2px solid
    ${({ theme, disabled, color = "violet" }) =>
      disabled
        ? theme.components.Slider.progressDisabledBackgroundColor
        : theme.colors[color][9]};
  border-radius: 50%;
  cursor: grab;
  transition: transform 0.15s ease;

  &:active {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "grabbing")};
  }
`;

export const SliderMarkStyled = styled.div.withConfig({
  shouldForwardProp: (prop: string) => !["isVertical", "value"].includes(prop)
})<{ isVertical: boolean; value: number }>`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  ${({ isVertical, value }) =>
    isVertical
      ? css`
          transform: translateX(-50%);
          bottom: ${value}%;
          left: 50%;
        `
      : css`
          top: 50%;
          transform: translateY(-50%);
          flex-direction: column;
          left: ${value}%;
        `};
`;

export const SliderDotStyled = styled.div`
  width: 6px;
  height: 6px;
  background: ${({ theme }) => theme.components.Slider.markColor};
  border-radius: ${({ theme }) => theme.components.Slider.radius};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:hover {
    width: 8px;
    height: 8px;
  }
`;

export const SliderLabelStyled = styled(Text)
  .attrs({ size: "s" })
  .withConfig({
    shouldForwardProp: (prop: string) => !["isVertical"].includes(prop)
  })<{ isVertical: boolean }>`
  user-select: none;
  position: absolute;
  ${({ isVertical }) =>
    isVertical
      ? css`
          left: calc(50% + 10px);
          top: 50%;
          transform: translateY(-50%);
        `
      : css`
          top: calc(50% + 10px);
          left: 50%;
          transform: translateX(-50%);
        `}
`;

export const SliderTooltipStyled = styled(Tooltip).withConfig({
  shouldForwardProp: (prop: string) => !["isVertical", "value"].includes(prop)
})<{ isVertical: boolean; value: number }>`
  width: 20px;
  height: 20px;
  user-select: none;
  z-index: 1;
  position: absolute;

  ${({ isVertical, value }) =>
    isVertical
      ? css`
          bottom: ${value}%;
          transform: translate(-25%, 25%);
        `
      : css`
          left: ${value}%;
          transform: translate(-50%, -25%);
        `};
`;

export const SliderMarksWrapperStyled = styled.div.withConfig({
  shouldForwardProp: (prop: string) => !["isVertical"].includes(prop)
})<{ isVertical: boolean }>`
  position: absolute;
  background: transparent;
  pointer-events: none;
  ${({ theme, isVertical }) =>
    isVertical
      ? css`
          height: 100%;
          width: ${({ theme }) => theme.components.Slider.height};
        `
      : css`
          width: 100%;
          height: ${({ theme }) => theme.components.Slider.height};
        `};
`;
