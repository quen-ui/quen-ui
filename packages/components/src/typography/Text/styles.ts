import styled, { css } from "styled-components";
import { IQuenUITheme } from "@quen-ui/theme";
import { ITextProps, TTextType, TTextSize } from "./types";

const getFonts = (size: TTextSize, theme: IQuenUITheme) => {
  switch (size) {
    case "xl":
      return css`
        font-size: ${theme.fonts.text.size["xl"]};
        line-height: ${theme.fonts.text.lineHeight["xl"]};
        font-weight: ${theme.fonts.text.weight};
      `;
    case "l":
      return css`
        font-size: ${theme.fonts.text.size["l"]};
        line-height: ${theme.fonts.text.lineHeight["l"]};
        font-weight: ${theme.fonts.text.weight};
      `;
    case "m":
      return css`
        font-size: ${theme.fonts.text.size["m"]};
        line-height: ${theme.fonts.text.lineHeight["m"]};
        font-weight: ${theme.fonts.text.weight};
      `;
    case "s":
      return css`
        font-size: ${theme.fonts.text.size["s"]};
        line-height: ${theme.fonts.text.lineHeight["s"]};
        font-weight: ${theme.fonts.text.weight};
      `;
    case "xs":
      return css`
        font-size: ${theme.fonts.text.size["xs"]};
        line-height: ${theme.fonts.text.lineHeight["xs"]};
        font-weight: ${theme.fonts.text.weight};
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
  theme: IQuenUITheme;
}): string => {
  if (color) {
    return color;
  } else {
    switch (type) {
      case "secondary":
        return theme.colors.gray["7"];
      case "success":
        return theme.colors.text.colors.green;
      case "warning":
        return theme.colors.text.colors.orange;
      case "danger":
        return theme.colors.text.colors.red;
      case "disabled":
        return theme.colors.gray["4"];
      default:
        return theme.textColor;
    }
  }
};

export const TextStyled = styled.span<ITextProps>`
  margin: 0;
  ${({ theme, size }) => getFonts(size, theme)};
  color: ${({ color, type, theme }) => getColor({ color, theme, type })};
`;
