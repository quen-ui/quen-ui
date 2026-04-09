import { Text, type TQuenSize } from "@quen-ui/components";
import styled from "styled-components";

export const ColumnStyled = styled.th<{
  size: TQuenSize;
  isGroup: boolean;
  isLeaf: boolean;
}>`
  border: 1px solid ${({ theme }) => theme.colors.gray[5]};
  padding: ${({ theme, size }) => theme.space[size]};
  text-align: center;
  background: ${({ isGroup }) => (isGroup ? "#f5f5f5" : "#fafafa")};
  cursor: ${({ isLeaf }) => (isLeaf ? "pointer" : "default")};
  user-select: none;
`;

export const ColumnHeaderStyled = styled(Text)`
  font-weight: bold;
`;
