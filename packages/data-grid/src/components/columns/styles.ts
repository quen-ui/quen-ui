import { Text, type TQuenSize } from "@quen-ui/components";
import styled from "styled-components";

export const ColumnStyled = styled.th<{ size: TQuenSize }>`
  border: 1px solid ${({ theme }) => theme.colors.gray[5]};
  padding: ${({ theme, size }) => theme.space[size]};
`;

export const ColumnHeaderStyled = styled(Text)`
  font-weight: bold;
`;
