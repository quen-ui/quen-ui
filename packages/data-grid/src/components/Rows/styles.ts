import type { CSSProperties } from "react";
import styled from "styled-components";

export const RowStyled = styled.tr<{
  selected: boolean;
  pinnedStyles?: CSSProperties;
}>`
  background: ${({ selected, theme }) =>
    selected && theme.colors.grayViolet[2]};
  ${({ pinnedStyles }) =>
    pinnedStyles &&
    `
    background: inherit;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: ${({ theme }) => theme.colors.gray[5]};
    }
  `};
  
  &:hover {
    ${({ pinnedStyles }) =>
      pinnedStyles &&
      `
      background: ${({ theme }) => theme.colors.grayViolet[1]} !important;
    `}
  }
`;
