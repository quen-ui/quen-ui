import styled, { css } from "styled-components";
import type { TQuenSize } from "../types/size";
import { Text } from "../typography/Text";
import { Tooltip } from "../Tooltip";

export const SliderContainer = styled.div<{
  size: TQuenSize;
  vertical: boolean;
}>`
  display: flex;
  ${({ vertical }) =>
    vertical
      ? css`
          flex-direction: row;
          height: 240px;
        `
      : css`
          flex-direction: column;
          width: 100%;
        `}
  gap: 12px;
`;

export const SliderTrackStyled = styled.div.withConfig({
  shouldForwardProp: (prop: string) => !["vertical"].includes(prop)
})<{
  vertical: boolean;
}>`
  position: relative;
  background: #ddd;
  border-radius: 4px;
  cursor: pointer;

  ${({ vertical }) =>
    vertical
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
  shouldForwardProp: (prop: string) => !["vertical"].includes(prop)
})<{ vertical: boolean }>`
  position: absolute;
  background: #4a8dff;
  border-radius: inherit;

  ${({ vertical }) =>
    vertical
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
  shouldForwardProp: (prop: string) => !["vertical"].includes(prop)
})<{ vertical: boolean }>`
  position: absolute;
  width: 1rem;
  height: 1rem;
  background: white;
  border: 2px solid #4a8dff;
  border-radius: 50%;
  cursor: grab;
  transition: transform 0.15s ease;
  z-index: 1;

  ${({ vertical }) =>
    vertical
      ? css`
          transform: translate(-35%, 0%);
        `
      : css`
          top: 100%;
          transform: translate(-50%, -107%);
        `}

  &:active {
    cursor: grabbing;
  }
`;

export const SliderMarkStyled = styled.div.withConfig({
  shouldForwardProp: (prop: string) => !["vertical"].includes(prop)
})<{ vertical: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  ${({ vertical }) =>
    vertical
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
  background: #999;
  border-radius: 50%;

  &:hover {
    width: 8px;
    height: 8px;
  }
`;

export const SliderLabelStyled = styled(Text).attrs({ size: "s" }).withConfig({
  shouldForwardProp: (prop: string) => !["vertical"].includes(prop)
})<{ vertical: boolean }>`
  user-select: none;
  ${({ vertical }) =>
    vertical
      ? css`
          margin-left: 6px;
        `
      : css`
          margin-top: 6px;
        `}
`;

export const SliderTooltipStyled = styled(Tooltip).withConfig({
  shouldForwardProp: (prop: string) => !["vertical"].includes(prop)
})<{ vertical: boolean }>`
  ${({ vertical }) => vertical && css`position: absolute;`};
  .quen-ui__slider__tooltip__content {
    ${({ vertical }) => vertical ? css`
      transform: translateY(-30%) scale(1);
      margin-left: 1rem;
    `: css`
      margin-bottom: 1.5rem;
    `};
  }
`;
