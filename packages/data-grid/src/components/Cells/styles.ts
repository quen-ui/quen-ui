import styled from "styled-components";
import {TQuenSize} from "@quen-ui/components";

interface IBaserCellStyledProps {
  size: TQuenSize;
  isPinned?: boolean;
  isSelected?: boolean;
  isHovered?: boolean;
}

export const BaseCellStyled = styled.td<IBaserCellStyledProps>`
  border: none;
  border-right: 1px solid ${({ theme }) => theme.colors.gray[5]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[5]};
  padding: ${({ theme, size }) => theme.space[size]};
  background-color: ${({ theme, isSelected, isPinned, isHovered }) => {
    if (isSelected) return theme.colors.grayViolet[2];
    if (isHovered) return theme.colors.grayViolet[1];
    if (isPinned) return theme.colorBody || "#ffffff";
    return "transparent";
  }};
  position: relative;
`;
