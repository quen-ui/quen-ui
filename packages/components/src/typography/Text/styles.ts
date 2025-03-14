import styled, { css } from "styled-components";
import { ITheme } from "@quen-ui/theme";
import { ITextProps, TTextType, TTextSize } from "./types";

const getFonts = (size: TTextSize, theme: ITheme) => {
  switch (size) {
    case "xl":
      return css`
        font-size: ${theme.fonts.text.fontSize["xl"]};
        line-height: ${theme.fonts.text.lineHeight["xl"]};
        font-weight: ${theme.fonts.text.fontWeight};
      `;
    case "l":
      return css`
        font-size: ${theme.fonts.text.fontSize["l"]};
        line-height: ${theme.fonts.text.lineHeight["l"]};
        font-weight: ${theme.fonts.text.fontWeight};
      `;
    case "m":
      return css`
        font-size: ${theme.fonts.text.fontSize["m"]};
        line-height: ${theme.fonts.text.lineHeight["m"]};
        font-weight: ${theme.fonts.text.fontWeight};
      `;
    case "s":
      return css`
        font-size: ${theme.fonts.text.fontSize["s"]};
        line-height: ${theme.fonts.text.lineHeight["s"]};
        font-weight: ${theme.fonts.text.fontWeight};
      `;
    case "xs":
      return css`
        font-size: ${theme.fonts.text.fontSize["xs"]};
        line-height: ${theme.fonts.text.lineHeight["xs"]};
        font-weight: ${theme.fonts.text.fontWeight};
      `;
  }
};

const getColor = ({
  type,
  color,
  theme
}: {
  type?: TTextType;
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

export const TextStyled = styled.span<ITextProps>`
  margin: 0;
  ${({ theme, size }) => getFonts(size, theme)};
  color: ${({ color, type, theme }) => getColor({ color, theme, type })};
`;
