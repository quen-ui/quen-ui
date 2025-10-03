import styled, { css } from "styled-components";
import { math } from "polished";
import type { IPaginationControlProps } from "./types";

export const PaginationControlStyled = styled.button.withConfig({
  shouldForwardProp: (prop) => !["active", "dotsView"].includes(prop)
})<IPaginationControlProps>`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.grayViolet[9]};
  border-radius: ${({ theme }) => theme.control.radius};
  background: ${({ theme, active }) =>
    active ? theme.colors[theme.primaryColor][9] : theme.colors.grayViolet[3]};
  height: ${({ theme, size }) => theme.control.height[size]};
  width: ${({ theme, size }) => theme.control.height[size]};
  color: ${({ theme }) => theme.textColor};

  .quen-ui__pagination-prev-icon {
    transform: rotateZ(90deg);
  }

  .quen-ui__pagination-next-icon {
    transform: rotateZ(270deg);
  }

  svg {
    width: ${({ theme, size }) => math(`${theme.control.height[size]} / 1.5`)};
    height: ${({ theme, size }) => math(`${theme.control.height[size]} / 1.5`)};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.grayViolet[9]};
  }
  
  ${({ dotsView }) => dotsView && css`
    background: transparent;
    border: none;
    cursor: auto;
    font-size: ${({ theme }) => theme.fonts.text.size.xl};
    letter-spacing: 2px;
    
    &:hover {
      background: transparent;
    }
  `};
`;
