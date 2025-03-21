import styled from "styled-components";
import { TQuenSize } from "../types/size";

const getSizing = (size: TQuenSize): string => {
  switch (size) {
    case "l":
      return "1.5rem";
    case "s":
      return "1rem";
    case "xs":
      return "0.875rem";
    case "m":
    default:
      return "1.25rem";
  }
};

export const RadioButtonLabelStyled = styled.label<{isDisabled?: boolean}>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: ${({ isDisabled }) => isDisabled ? "not-allowed" : "pointer"};
`;

export const RadioButtonInput = styled.input<{ size: TQuenSize }>`
  width: ${({ size }) => getSizing(size)};
  height: ${({ size }) => getSizing(size)};
  border: 1px solid ${({ theme }) =>
      theme.colors.component.primary.default.grayViolet};
  border-radius: 50%;
  transition:
    border-color 0.15s,
    background-color 0.15s;
  box-sizing: border-box;
  flex-shrink: 0;
  cursor: pointer;
  position: relative;
  -webkit-appearance: none;
  
  &:disabled {
    background-color: ${({ theme }) =>
        theme.colors.component.primary.disabled.gray};
    border: 1px solid ${({ theme }) =>
        theme.colors.component.primary.disabled.grayViolet};
    cursor: not-allowed;
  }

  &:disabled:checked {
    background-color: ${({ theme }) =>
        theme.colors.gray.gray3};
    border: calc(${({ size }) => getSizing(size)} / 4) solid ${({ theme }) =>
        theme.colors.component.primary.disabled.violet};
    cursor: not-allowed;
  }
  &:checked {
    background-color: ${({ theme }) =>
      theme.colors.gray.gray3};
    border: calc(${({ size }) => getSizing(size)} / 4) solid ${({ theme }) =>
      theme.colors.component.primary.default.violet};
  }

  &:hover:not(:disabled) {
    border: 1px solid ${({ theme }) =>
        theme.colors.component.primary.default.violet};
  }
  
  &:hover:checked:not(:disabled) {
    background-color: ${({ theme }) =>
        theme.colors.component.secondary.hover.gray};
    border: calc(${({ size }) => getSizing(size)} / 4) solid ${({ theme }) =>
        theme.colors.component.primary.hover.violet};
`;
