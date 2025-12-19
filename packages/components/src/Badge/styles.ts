import styled, { DefaultTheme } from "styled-components";
import { TQuenSize } from "../types/size";
import { TBadgeColor, BADGE_COLOR } from "./types";

const height: Record<TQuenSize, string> = {
  xs: "1rem",
  s: "1.125rem",
  m: "1.5rem",
  l: "2rem"
};

const getBackgroundColor = (
  theme: DefaultTheme,
  color: TBadgeColor | string
): string => {
  if (color) {
    if (BADGE_COLOR.includes(color as TBadgeColor)) {
      switch (color as TBadgeColor) {
        case "success":
          return theme.components.Badge.successBackground;
        case "warning":
          return theme.components.Badge.warningBackground;
        case "danger":
          return theme.components.Badge.dangerBackground;
        case "secondary":
          return theme.components.Badge.disabledBackground;
        case "disabled":
          return theme.colors.gray[2];
      }
    }
    return color;
  }

  return theme.components.Badge.primaryBackground;
}

const getColor = (theme: DefaultTheme, color: TBadgeColor | string) => {
  if (color === "secondary") {
    return "dark";
  } else if (color === "disabled") {
    return theme.components.Badge.disabledColor;
  }
  return "white";
};

export const BadgeStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => !["size", "color"].includes(prop)
})<{ size: TQuenSize; color?: TBadgeColor | string }>`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  justify-content: space-between;
  width: max-content;
  height: ${({ size }) => height[size]};
  border-radius: ${({ theme }) => theme.components.Badge.radius};
  padding-left: ${({ theme }) => theme.space.xs};
  padding-right: ${({ theme }) => theme.space.xs};
  background-color: ${({ theme, color }) =>
    getBackgroundColor(theme, color as TBadgeColor)};

  .quen-ui__text, svg {
    color: ${({ color, theme }) => getColor(theme, color as TBadgeColor)};
  }
`;

export const BadgeWrapper = styled.div`
  position: relative;
  width: fit-content;
  
  ${BadgeStyled} {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }
`;
