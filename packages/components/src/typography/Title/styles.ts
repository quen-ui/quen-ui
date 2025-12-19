import styled, { css } from "styled-components";
import { IQuenUITheme } from "@quen-ui/theme";
import { ITitleProps, TTitleSize, TTitleType } from "./types";

const getFonts = (size: TTitleSize, theme: IQuenUITheme) => {
  switch (size) {
    case "2xl":
      return css`
        font-size: ${theme.fonts.header.size["2xl"]};
        line-height: ${theme.fonts.header.lineHeight["2xl"]};
        font-weight: ${theme.fonts.header.weight};
      `;
    case "xl":
      return css`
        font-size: ${theme.fonts.header.size["xl"]};
        line-height: ${theme.fonts.header.lineHeight["xl"]};
        font-weight: ${theme.fonts.header.weight};
      `;
    case "l":
      return css`
        font-size: ${theme.fonts.header.size["l"]};
        line-height: ${theme.fonts.header.lineHeight["l"]};
        font-weight: ${theme.fonts.header.weight};
      `;
    case "m":
      return css`
        font-size: ${theme.fonts.header.size["m"]};
        line-height: ${theme.fonts.header.lineHeight["m"]};
        font-weight: ${theme.fonts.header.weight};
      `;
    case "s":
      return css`
        font-size: ${theme.fonts.header.size["s"]};
        line-height: ${theme.fonts.header.lineHeight["s"]};
        font-weight: ${theme.fonts.header.weight};
      `;
    case "xs":
      return css`
        font-size: ${theme.fonts.header.size["xs"]};
        line-height: ${theme.fonts.header.lineHeight["xs"]};
        font-weight: ${theme.fonts.header.weight};
      `;
  }
};

const getColor = ({
  type,
  color,
  theme
}: {
  type?: TTitleType;
  color?: string;
  theme: IQuenUITheme;
}): string => {
  if (color) {
    return color;
  } else {
    switch (type) {
      case "secondary":
        return theme.colors.grayViolet["6"];
      case "success":
        return theme.colors.green["6"];
      case "warning":
        return theme.colors.orange["6"];
      case "danger":
        return theme.colors.red["6"];
      case "disabled":
        return theme.colors.gray["4"];
      default:
        return theme.textColor;
    }
  }
};

export const TitleStyled = styled.span.attrs({
  className: 'quen-ui__title'
}).withConfig({
  shouldForwardProp: (prop) => !["align", "type"].includes(prop),
})<ITitleProps>`
  margin: 0;
  ${({ theme, size }) => getFonts(size, theme)};
  color: ${({ color, type, theme }) => getColor({ color, theme, type })};
  text-align: ${({ align = "start" }) => align};
`;
