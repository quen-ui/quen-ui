import styled, { css } from "styled-components";
import { TQuenSize } from "../types/size";
import { IRadioGroupProps } from "./types";

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

export const RadioButtonLabelStyled = styled.label<{ disabled?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const RadioButtonInput = styled.input<{ size: TQuenSize }>`
  width: ${({ size }) => getSizing(size)};
  height: ${({ size }) => getSizing(size)};
  border: 1px solid ${({ theme }) => theme.components.RadioButton.borderColor};
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
    background-color: ${({ theme }) => theme.components.RadioButton.disabledBackground};
    cursor: not-allowed;
  }

  &:disabled:checked {
    background-color: ${({ theme }) => theme.components.RadioButton.disabledBackground};
    border: calc(${({ size }) => getSizing(size)} / 4) solid ${({ theme }) =>
      theme.components.RadioButton.disabledCheckedBorderColor};
    cursor: not-allowed;
  }
  &:checked {
    background-color: ${({ theme }) => theme.components.RadioButton.checkedBackground};
    border: calc(${({ size }) => getSizing(size)} / 4) solid ${({ theme }) =>
      theme.components.RadioButton.checkedBorderColor};
  }

  &:hover:not(:disabled) {
    border: 1px solid ${({ theme }) => theme.components.RadioButton.hoverBorderColor};
  }
  
  &:hover:checked:not(:disabled) {
    border: calc(${({ size }) => getSizing(size)} / 4) solid ${({ theme }) =>
      theme.components.RadioButton.hoverBorderColor};
`;

export const RadioGroupWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isError"].includes(prop)
})<{
  direction: IRadioGroupProps["direction"];
  isError?: boolean;
}>`
  display: flex;
  gap: 0.5rem;
  flex-direction: ${({ direction }) =>
    direction === "horizontal" ? "row" : "column"};

  .checkbox-group__required {
    color: ${({ theme }) => theme.components.RadioButton.errorColor};
  }

  .checkbox-group__error-message {
    color: ${({ theme }) => theme.components.RadioButton.errorColor};
  }

  ${({ isError, theme }) =>
    isError &&
    css`
      border-left: 2px solid ${theme.components.RadioButton.borderErrorColor};
      padding-left: 0.5rem;
    `};
`;
