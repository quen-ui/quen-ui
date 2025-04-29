import styled, { css } from "styled-components";
import { IQuenUITheme } from "@quen-ui/theme";
import { IHeaderProps, THeaderSize, THeaderType } from "./types";

const getFonts = (size: THeaderSize, theme: IQuenUITheme) => {
  switch (size) {
    case "2xl":
      return css`
        font-size: ${theme.fonts.header.fontSize["2xl"]};
        line-height: ${theme.fonts.header.lineHeight["2xl"]};
        font-weight: ${theme.fonts.header.fontWeight};
      `;
    case "xl":
      return css`
        font-size: ${theme.fonts.header.fontSize["xl"]};
        line-height: ${theme.fonts.header.lineHeight["xl"]};
        font-weight: ${theme.fonts.header.fontWeight};
      `;
    case "l":
      return css`
        font-size: ${theme.fonts.header.fontSize["l"]};
        line-height: ${theme.fonts.header.lineHeight["l"]};
        font-weight: ${theme.fonts.header.fontWeight};
      `;
    case "m":
      return css`
        font-size: ${theme.fonts.header.fontSize["m"]};
        line-height: ${theme.fonts.header.lineHeight["m"]};
        font-weight: ${theme.fonts.header.fontWeight};
      `;
    case "s":
      return css`
        font-size: ${theme.fonts.header.fontSize["s"]};
        line-height: ${theme.fonts.header.lineHeight["s"]};
        font-weight: ${theme.fonts.header.fontWeight};
      `;
    case "xs":
      return css`
        font-size: ${theme.fonts.header.fontSize["xs"]};
        line-height: ${theme.fonts.header.lineHeight["xs"]};
        font-weight: ${theme.fonts.header.fontWeight};
      `;
  }
};

const getColor = ({
  type,
  color,
  theme
}: {
  type?: THeaderType;
  color?: string;
  theme: IQuenUITheme;
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

export const HeaderStyled = styled.span<IHeaderProps>`
  margin: 0;
  ${({ theme, size }) => getFonts(size, theme)};
  color: ${({ color, type, theme }) => getColor({ color, theme, type })};
`;
