import styled, { css } from "styled-components";
import { ITheme } from "@quen-ui/theme";
import { IHeaderProps, THeaderSize } from "./types";

const getFonts = (size: THeaderSize, theme: ITheme) => {
  switch (size) {
    case "2xl":
      return css`
        font-size: ${theme.fonts.header.fontSize["2xl"]};
        line-height: ${theme.fonts.header.lineHeight["2xl"]};
      `;
    case "xl":
      return css`
        font-size: ${theme.fonts.header.fontSize["xl"]};
        line-height: ${theme.fonts.header.lineHeight["xl"]};
      `;
    case "l":
      return css`
        font-size: ${theme.fonts.header.fontSize["l"]};
        line-height: ${theme.fonts.header.lineHeight["l"]};
      `;
    case "m":
      return css`
        font-size: ${theme.fonts.header.fontSize["m"]};
        line-height: ${theme.fonts.header.lineHeight["m"]};
      `;
    case "s":
      return css`
        font-size: ${theme.fonts.header.fontSize["s"]};
        line-height: ${theme.fonts.header.lineHeight["s"]};
      `;
    case "xs":
      return css`
        font-size: ${theme.fonts.header.fontSize["xs"]};
        line-height: ${theme.fonts.header.lineHeight["xs"]};
      `;
  }
};

export const HeaderStyled = styled.span<IHeaderProps>`
  margin: 0;
  ${({ theme, size }) => getFonts(size, theme)};
  color: ${({ color }) => color};
`;
