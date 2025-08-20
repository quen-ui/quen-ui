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
        return theme.colors.gray["5"];
      case "success":
        return theme.colors.green["6"];
      case "warning":
        return theme.colors.orange["6"];
      case "danger":
        return theme.colors.red["6"];
      case "disabled":
        return theme.colors.gray["3"];
      default:
        return theme.textColor;
    }
  }
};

export const TextStyled = styled.span.attrs({ className: "quen-ui__text"})<ITextProps>`
  margin: 0;
  ${({ theme, size = "m" }) => getFonts(size, theme)};
  color: ${({ color, type, theme }) => getColor({ color, theme, type })};
`;
