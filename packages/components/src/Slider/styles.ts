import styled, { css } from "styled-components";
import { Text } from "../typography/Text";
import { Tooltip } from "../Tooltip";
import { ISliderProps } from "./types";

export const SliderContainer = styled.div<{ disabled?: boolean }>`
  position: relative;
  box-sizing: border-box;
  padding: 0.5rem;
  ${({ disabled }) => disabled && `pointer-events: none;`}
`;

export const SliderTrackStyled = styled.div.withConfig({
  shouldForwardProp: (prop: string) =>
    !["isVertical", "disabled"].includes(prop)
})<{ isVertical: boolean; disabled?: boolean }>`
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
          left: 50%;
          top: 0;
          bottom: 0;
          width: 6px;
          transform: translateX(-50%);
        `
      : css`
          top: 50%;
          left: 0;
          right: 0;
          height: 6px;
          transform: translateY(-50%);
        `}
`;

export const SliderProgressStyled = styled.div.withConfig({
  shouldForwardProp: (prop: string) =>
    !["isVertical", "color", "range", "isRange", "disabled"].includes(prop)
})<{
  isVertical: boolean;
  disabled?: boolean;
  color: ISliderProps["color"];
  range: [number, number];
  isRange?: boolean;
}>`
  position: absolute;
  background: ${({ theme, disabled, color = "violet" }) =>
    disabled
      ? theme.components.Slider.progressDisabledBackgroundColor
      : theme.colors[color][9]};
  border-radius: ${({ theme }) => theme.components.Slider.radius};
  cursor: pointer;
  z-index: 1;
  
  ${({ isVertical, range, isRange, theme }) =>
    isVertical
      ? css`
          left: 50%;
          width: ${theme.components.Slider.height || "6px"};
          transform: translateX(-50%);
          top: ${100 - (isRange ? range[1] : range[1])}%;
          height: ${isRange ? range[1] - range[0] : range[1]}%;
        `
      : css`
          top: 50%;
          height: ${theme.components.Slider.height || "6px"};
          transform: translateY(-50%);
          left: ${isRange ? range[0] : 0}%;
          width: ${isRange ? range[1] - range[0] : range[1]}%;
        `}
`;

export const SliderThumbStyled = styled.div.withConfig({
  shouldForwardProp: (prop: string) => !["isVertical", "color"].includes(prop)
})<{ isVertical: boolean; disabled?: boolean; color: ISliderProps["color"] }>`
  position: relative;
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
  transition:
    box-shadow 0.15s ease,
    transform 0.15s ease;
  z-index: 2;

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
  shouldForwardProp: (prop: string) => !["isVertical"].includes(prop)
})<{ isVertical: boolean; open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  z-index: 100;
  pointer-events: none;
  user-select: none;
  
  transition: opacity 0.15s ease, transform 0.15s ease, visibility 0.15s;
  
  ${({ isVertical }) =>
      isVertical
          ? css`
          left: calc(100% + 8px);
          top: 50%;
          transform: translateY(-50%);
        `
          : css`
          bottom: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
        `
  }
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
          width: ${theme.components.Slider.height};
        `
      : css`
          width: 100%;
          height: ${theme.components.Slider.height};
        `};
`;
