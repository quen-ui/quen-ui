import styled, { css } from "styled-components";
import type { TQuenSize } from "../types/size";
import { Text } from "../typography/Text";
import { Tooltip } from "../Tooltip";
import { ISliderProps } from "./types";

export const SliderContainer = styled.div.withConfig({
  shouldForwardProp: prop => !["size", "isVertical"].includes(prop),
})<{
  size: TQuenSize;
  isVertical: boolean;
  disabled?: boolean;
}>`
  display: flex;
  ${({ isVertical }) =>
    isVertical
      ? css`
          flex-direction: row;
          height: 240px;
        `
      : css`
          flex-direction: column;
          width: 100%;
        `}
  gap: 12px;
  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
    `};
`;

export const SliderTrackStyled = styled.div.withConfig({
  shouldForwardProp: (prop: string) => !["isVertical"].includes(prop)
})<{
  isVertical: boolean;
  disabled?: boolean;
}>`
  position: relative;
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
  shouldForwardProp: (prop: string) => !["isVertical", "color"].includes(prop)
})<{ isVertical: boolean; disabled?: boolean; color: ISliderProps["color"] }>`
  position: absolute;
  background: ${({ theme, disabled, color = "violet" }) =>
    disabled
      ? theme.components.Slider.progressDisabledBackgroundColor
      : theme.colors[color][9]};
  border-radius: inherit;

  ${({ isVertical }) =>
    isVertical
      ? css`
          left: 0;
          right: 0;
        `
      : css`
          top: 0;
          bottom: 0;
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
  z-index: 1;

  ${({ isVertical }) =>
    isVertical
      ? css`
          transform: translate(-35%, 0%);
        `
      : css`
          top: 100%;
          transform: translate(-50%, -107%);
        `}

  &:active {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "grabbing")};
  }
`;

export const SliderMarkStyled = styled.div.withConfig({
  shouldForwardProp: (prop: string) => !["isVertical"].includes(prop)
})<{ isVertical: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  ${({ isVertical }) =>
    isVertical
      ? css`
          transform: translate(0%, 50%);
        `
      : css`
          top: 50%;
          transform: translate(-50%, -9%);
          flex-direction: column;
        `}
`;

export const SliderDotStyled = styled.div`
  width: 6px;
  height: 6px;
  background: ${({ theme }) =>
    theme.components.Slider.progressDisabledBackgroundColor};
  border-radius: 50%;

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
  ${({ isVertical }) =>
    isVertical
      ? css`
          margin-left: 6px;
        `
      : css`
          margin-top: 6px;
        `}
`;

export const SliderTooltipStyled = styled(Tooltip).withConfig({
  shouldForwardProp: (prop: string) => !["isVertical"].includes(prop)
})<{ isVertical: boolean }>`
  user-select: none;
  ${({ isVertical }) =>
    isVertical &&
    css`
      position: absolute;
    `};
  .quen-ui__slider__tooltip__content {
    ${({ isVertical }) =>
      isVertical
        ? css`
            transform: translateY(-30%) scale(1);
            margin-left: 1rem;
          `
        : css`
            margin-bottom: 1.5rem;
          `};
  }
`;
