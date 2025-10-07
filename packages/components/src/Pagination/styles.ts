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
  border: 1px solid ${({ theme }) => theme.components.Pagination.borderColor};
  border-radius: ${({ theme }) => theme.components.Pagination.radius};
  background: ${({ theme, active }) =>
    active ? theme.components.Pagination.activeBackground : theme.components.Pagination.background};
  height: ${({ theme, size = "m" }) => theme.control.height[size]};
  width: ${({ theme, size = "m" }) => theme.control.height[size]};
  color: ${({ theme }) => theme.components.Pagination.color};

  .quen-ui__pagination-prev-icon {
    transform: rotateZ(90deg);
  }

  .quen-ui__pagination-next-icon {
    transform: rotateZ(270deg);
  }

  svg {
    width: ${({ theme, size = "m" }) =>
      math(`${theme.control.height[size]} / 1.5`)};
    height: ${({ theme, size = "m" }) =>
      math(`${theme.control.height[size]} / 1.5`)};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.components.Pagination.hoverBackground};
  }

  ${({ dotsView }) =>
    dotsView &&
    css`
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
