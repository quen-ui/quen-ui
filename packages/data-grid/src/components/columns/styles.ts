import { Text, type TQuenSize } from "@quen-ui/components";
import styled from "styled-components";

export const ColumnStyled = styled.th<{
  size: TQuenSize;
  isGroup: boolean;
  isLeaf: boolean;
}>`
  border: none;
  border-right: 1px solid ${({ theme }) => theme.colors.gray[5]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[5]};
  padding: ${({ theme, size }) => theme.space[size]};
  text-align: center;
  background: ${({ isGroup, theme }) =>
    isGroup ? theme.colors.grayViolet[5] : theme.colors.grayViolet[3]};
  cursor: ${({ isLeaf }) => (isLeaf ? "pointer" : "default")};
  user-select: none;
  transition: box-shadow 0.2s ease;
  position: relative;
`;

export const ColumnHeaderStyled = styled(Text)`
  font-weight: bold;
  white-space: nowrap;
`;
