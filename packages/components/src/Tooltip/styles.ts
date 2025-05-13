import styled, { css, RuleSet } from "styled-components";
import { ITooltipProps } from "./types";
import { IQuenUITheme, TDefaultQuenUIColors } from "@quen-ui/theme";

const getColor = (theme: IQuenUITheme, color: string): string => {
  return  color in theme.colors
    ? theme.colors[color as TDefaultQuenUIColors]["5"]
    : color
}

const getPosition = (
  position: ITooltipProps["position"],
  state: string
): RuleSet => {
  switch (position) {
    case "top":
      return css`
        bottom: 100%;
        left: 50%;
        transform-origin: bottom center;
        margin-bottom: 8px;
        transform: translateX(-50%) scale(${state === "entered" ? 1 : 0.9});
      `;
    case "bottom":
      return css`
        top: 100%;
        left: 50%;
        transform-origin: top center;
        margin-top: 8px;
        transform: translateX(-50%) scale(${state === "entered" ? 1 : 0.9});
      `;
    case "left":
      return css`
        top: 50%;
        right: 100%;
        transform-origin: center right;
        margin-right: 8px;
        transform: translateY(-50%) scale(${state === "entered" ? 1 : 0.9});
      `;
    case "right":
      return css`
        top: 50%;
        left: 100%;
        transform-origin: center left;
        margin-left: 8px;
        transform: translateY(-50%) scale(${state === "entered" ? 1 : 0.9});
      `;
    case "topLeft":
      return css`
        bottom: 100%;
        left: 0;
        transform-origin: bottom left;
        margin-bottom: 8px;
      `;
    case "topRight":
      return css`
        bottom: 100%;
        right: 0;
        transform-origin: bottom right;
        margin-bottom: 8px;
      `;
    case "bottomLeft":
      return css`
        top: 100%;
        left: 0;
        transform-origin: top left;
        margin-top: 8px;
      `;
    case "bottomRight":
      return css`
        top: 100%;
        right: 0;
        transform-origin: top right;
        margin-top: 8px;
      `;
    case "leftTop":
      return css`
        top: 0;
        right: 100%;
        transform-origin: top right;
        margin-right: 8px;
      `;
    case "leftBottom":
      return css`
        bottom: 0;
        right: 100%;
        transform-origin: bottom right;
        margin-right: 8px;
      `;
    case "rightTop":
      return css`
        top: 0;
        left: 100%;
        transform-origin: top left;
        margin-left: 8px;
      `;
    case "rightBottom":
      return css`
        bottom: 0;
        left: 100%;
        transform-origin: bottom left;
        margin-left: 8px;
      `;
    default:
      return css``;
  }
};

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const TooltipContent = styled.div.withConfig({
  shouldForwardProp: (props) => !["position", "color", "zIndex", "state", "width"].includes(props)
})<{
  color: string;
  position: ITooltipProps["position"];
  zIndex: number;
  state: string;
  width?: number;
}>`
  position: absolute;
  padding: ${({ theme }) => theme.space.xs};
  border-radius: ${({ theme }) => theme.control.radius};
  background-color: ${({ color, theme }) => getColor(theme, color)};
  color: ${({ theme }) => theme.colors.gray["9"]};
  z-index: ${({ zIndex }) => zIndex};
  pointer-events: none;
  white-space: nowrap;
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
  transform: ${({ state }) =>
    state === "entered" ? "scale(1)" : "scale(0.9)"};
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
  width: ${({ width }) => width ? `${width}px` : "max-content"};
  text-wrap: wrap;

  ${({ state, position }) => getPosition(position, state)};
`;

export const TooltipArrowStyled = styled.div.withConfig({
  shouldForwardProp: (props) => !["position", "color"].includes(props)
})<{
  color: string;
  position: ITooltipProps["position"];
}>`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;

  ${({ position, color, theme }) => {
    const _color = getColor(theme, color)
    switch (position) {
      case "top":
        return css`
          left: 50%;
          top: 100%;
          margin-left: -5px;
          border-width: 5px 5px 0 5px;
          border-color: ${_color} transparent transparent transparent;
        `;
      case "bottom":
        return css`
          bottom: 100%;
          left: 50%;
          margin-left: -5px;
          border-width: 0 5px 5px 5px;
          border-color: transparent transparent ${_color} transparent;
        `;
      case "left":
        return css`
          top: 50%;
          left: 100%;
          margin-top: -5px;
          border-width: 5px 0 5px 5px;
          border-color: transparent transparent transparent ${_color};
        `;
      case "right":
        return css`
          top: 50%;
          right: 100%;
          margin-top: -5px;
          border-width: 5px 5px 5px 0;
          border-color: transparent ${_color} transparent transparent;
        `;
      case "topLeft":
        return css`
          top: 100%;
          left: 10px;
          border-width: 5px 5px 0 5px;
          border-color: ${_color} transparent transparent transparent;
        `;
      case "topRight":
        return css`
          top: 100%;
          right: 10px;
          border-width: 5px 5px 0 5px;
          border-color: ${_color} transparent transparent transparent;
        `;
      case "bottomLeft":
        return css`
          bottom: 100%;
          left: 10px;
          border-width: 0 5px 5px 5px;
          border-color: transparent transparent ${_color} transparent;
        `;
      case "bottomRight":
        return css`
          bottom: 100%;
          right: 10px;
          border-width: 0 5px 5px 5px;
          border-color: transparent transparent ${_color} transparent;
        `;
      case "leftTop":
        return css`
          top: 10px;
          left: 100%;
          border-width: 5px 0 5px 5px;
          border-color: transparent transparent transparent ${_color};
        `;
      case "leftBottom":
        return css`
          bottom: 10px;
          left: 100%;
          border-width: 5px 0 5px 5px;
          border-color: transparent transparent transparent ${_color};
        `;
      case "rightBottom":
        return css`
          bottom: 10px;
          right: 100%;
          border-width: 5px 5px 5px 0;
          border-color: transparent ${_color} transparent transparent;
        `;
      case "rightTop":
        return css`
          top: 10px;
          right: 100%;
          border-width: 5px 5px 5px 0;
          border-color: transparent ${_color} transparent transparent;
        `;
      default:
        return "";
    }
  }}
`;
