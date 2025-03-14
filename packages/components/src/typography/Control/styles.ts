import styled, { css } from "styled-components";
import { ITheme } from "@quen-ui/theme";
import { IControlProps, TControlSize, TControlType } from "./types";

const getFonts = (size: TControlSize, theme: ITheme) => {
  switch (size) {
    case "xl":
      return css`
        font-size: ${theme.fonts.control.fontSize["xl"]};
        line-height: ${theme.fonts.control.lineHeight["xl"]};
        font-weight: ${theme.fonts.control.fontWeight};
      `;
    case "l":
      return css`
        font-size: ${theme.fonts.control.fontSize["l"]};
        line-height: ${theme.fonts.control.lineHeight["l"]};
        font-weight: ${theme.fonts.control.fontWeight};
      `;
    case "m":
      return css`
        font-size: ${theme.fonts.control.fontSize["m"]};
        line-height: ${theme.fonts.control.lineHeight["m"]};
        font-weight: ${theme.fonts.control.fontWeight};
      `;
    case "s":
      return css`
        font-size: ${theme.fonts.control.fontSize["s"]};
        line-height: ${theme.fonts.control.lineHeight["s"]};
        font-weight: ${theme.fonts.control.fontWeight};
      `;
    case "xs":
      return css`
        font-size: ${theme.fonts.control.fontSize["xs"]};
        line-height: ${theme.fonts.control.lineHeight["xs"]};
        font-weight: ${theme.fonts.control.fontWeight};
      `;
  }
};

const getColor = ({
  type,
  color,
  theme
}: {
  type?: TControlType;
  color?: string;
  theme: ITheme;
}): string => {
  if (color) {
    return color;
  } else {
    switch (type) {
      case "secondary":
        return theme.colors.text.secondary;
      case "success":
        return theme.colors.text.colors.green;
      case "warning":
        return theme.colors.text.colors.orange;
      case "danger":
        return theme.colors.text.colors.red;
      case "disabled":
        return theme.colors.text.disabled;
      default:
        return theme.colors.text.default;
    }
  }
};

export const ControlStyled = styled.span<IControlProps>`
  margin: 0;
  ${({ theme, size }) => getFonts(size, theme)};
  color: ${({ color, type, theme }) => getColor({ color, theme, type })};
`;
