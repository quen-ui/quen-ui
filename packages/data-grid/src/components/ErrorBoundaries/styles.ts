import styled, { css } from "styled-components";

export const ErrorStyled = styled.div<{ level?: "grid" | "cell" }>`
  text-align: center;
  ${({ level, theme }) =>
    level === "cell"
      ? css`
          padding: 0;
          color: ${theme.colors.red[5]};
          font-size: 0.8rem;
        `
      : css`
          padding: 16px;
          color: ${theme.colors.red[8]};
          font-size: 1rem;
        `};
`;
