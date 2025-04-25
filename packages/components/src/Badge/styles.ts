import styled, { DefaultTheme } from "styled-components";
import { TQuenSize } from "../types/size";
import { TBadgeColor, BADGE_COLOR } from "./types";

const height: Record<TQuenSize, string> = {
  xs: "1rem",
  s: "1.125rem",
  m: "1.5rem",
  l: "2rem"
}


const getBackgroundColor = (theme: DefaultTheme, color: TBadgeColor | string): string => {
  if (color) {
    if (BADGE_COLOR.includes(color as TBadgeColor)) {
      switch (color as TBadgeColor) {
        case "success":
          return theme.colors.component.primary.default.green;
        case "warning":
          return theme.colors.component.primary.default.orange;
        case "danger":
          return theme.colors.component.primary.default.red;
        case "secondary":
          return theme.colors.component.primary.default.grayViolet;
        case "disabled":
          return theme.colors.component.primary.default.gray;
      }
    }
    return color;
  }

  return theme.colors.component.primary.default.violet;
}


export const BadgeWrapper = styled.div<{ size: TQuenSize, color?: TBadgeColor | string }>`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  justify-content: space-between;
  height: ${({ size }) => height[size]};
  border-radius: ${({ theme }) => theme.control.radius};
  padding: ${({ theme}) => theme.space.xs};
  background-color: ${({ theme, color }) => getBackgroundColor(theme, color as TBadgeColor)};
  
  .badge-content {
    color: ${({ theme }) => theme.colors.text.button};
  }
`;
