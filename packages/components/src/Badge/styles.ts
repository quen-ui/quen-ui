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
          return theme.colors.green[9];
        case "warning":
          return theme.colors.orange[9];
        case "danger":
          return theme.colors.red[9];
        case "secondary":
          return theme.colors.grayViolet[9];
        case "disabled":
          return theme.colors.gray[5];
      }
    }
    return color;
  }

  return theme.colors.violet[9];
}


export const BadgeWrapper = styled.div.withConfig({
  shouldForwardProp: prop => !["size", "color"].includes(prop)
})<{ size: TQuenSize, color?: TBadgeColor | string }>`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  justify-content: space-between;
  width: max-content;
  height: ${({ size }) => height[size]};
  border-radius: ${({ theme }) => theme.control.radius};
  padding-left:  ${({ theme}) => theme.space.xs};
  padding-right:  ${({ theme}) => theme.space.xs};
  background-color: ${({ theme, color }) => getBackgroundColor(theme, color as TBadgeColor)};
  
  * {
    color: ${({ theme }) => theme.colors.gray[1]};
  }
`;
