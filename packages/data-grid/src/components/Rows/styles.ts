import styled from "styled-components";

export const RowStyled = styled.tr<{ selected: boolean }>`
  background: ${({ selected, theme }) =>
    selected && theme.colors.grayViolet[2]};
`;
