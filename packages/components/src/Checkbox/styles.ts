import styled, { css } from "styled-components";
import { TQuenSize } from "../types/size";
import { ICheckboxGroupProps } from "./types";

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

export const CheckboxLabelStyled = styled.label.withConfig({
  shouldForwardProp: (props) => !["disabled"].includes(props)
})<{ disabled?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  user-select: none;
`;

export const CheckboxInputStyled = styled.input.withConfig({
  shouldForwardProp: (props) => !["size", "isIntermediate"].includes(props)
})<{
  size: TQuenSize;
  intermediate?: boolean;
}>`
  width: ${({ size }) => getSizing(size)};
  height: ${({ size }) => getSizing(size)};
  border: 1px solid ${({ theme }) => theme.colors.grayViolet[9]};
  transition:
    border-color 0.15s,
    background-color 0.15s;
  box-sizing: border-box;
  flex-shrink: 0;
  cursor: pointer;
  position: relative;
  -webkit-appearance: none;

  &::before {
    content: "";
    position: absolute;
    top: calc(calc(${({ size }) => getSizing(size)} - 1px) / 2);
    left: calc(calc(${({ size }) => getSizing(size)} - 6px) / 5);
    box-sizing: border-box;
    width: calc(${({ size }) => getSizing(size)} * 0.6);
    height: calc(${({ size }) => getSizing(size)} * 0.35);
    background-color: ${({ theme }) => theme.colors.violet[9]};
    border-left: 1px solid ${({ theme }) => theme.colors.grayViolet[9]};
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayViolet[9]};
    opacity: 0;
    transition:
      opacity 0.15s,
      transform 0.15s,
      background-color 0.08s;
    transform: rotate(-50deg) scale(0, 1);
    transform-origin: 0 0;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[2]};
    border: 1px solid ${({ theme }) => theme.colors.violet[3]};
    cursor: not-allowed;
  }

  &:disabled:checked {
    background-color: ${({ theme }) => theme.colors.gray[2]};
    border: 1px solid ${({ theme }) => theme.colors.violet[3]};
    cursor: not-allowed;

    &:before {
      background-color: ${({ theme }) => theme.colors.gray[2]};
      border-left: 1px solid ${({ theme }) => theme.colors.gray[4]};
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray[4]};
    }
  }
  &:checked {
    background-color: ${({ theme }) => theme.colors.violet[9]};
    border-color: ${({ theme }) => theme.colors.violet[5]};

    &::before {
      opacity: 1;
      transform: rotate(-50deg) scale(1, 1);
    }
  }

  &:hover:not(:disabled) {
    border: 1px solid ${({ theme }) => theme.colors.violet[9]};
  }

  &:hover:checked:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.violet[9]};
    background-color: ${({ theme }) => theme.colors.violet[9]};

    &:before {
      background-color: ${({ theme }) => theme.colors.violet[9]};
    }
  }

  ${({ intermediate, size, theme }) =>
      intermediate &&
    css`
      &,
      &:hover,
      &:checked {
        background-color: ${({ theme }) => theme.colors.violet[9]};
        border-color: ${({ theme }) => theme.colors.grayViolet[9]};
        &::before {
          top: calc(calc(${getSizing(size)} - 0.125rem) / 2);
          left: 0.125rem;
          width: calc(${getSizing(size)} - 0.125rem * 2 - 0.125rem);
          height: 0.125rem;
          background-color: ${theme.colors.grayViolet[7]};
          border: none;
          opacity: 1;
          transition:
            opacity 0.15s,
            transform 0.15s,
            background-color 0.08s 0.04s;
          transform: rotate(0) translate(0, -50%);
        }
      }
    `};
`;

export const CheckboxGroupWrapper = styled.div.withConfig({
  shouldForwardProp: (props) => !["direction", "isError"].includes(props)
})<{
  direction: ICheckboxGroupProps["direction"];
  isError?: boolean;
}>`
  display: flex;
  gap: 0.5rem;
  flex-direction: ${({ direction }) =>
    direction === "horizontal" ? "row" : "column"};

  .checkbox-group__required {
    color: ${({ theme }) => theme.colors.red[7]};
  }

  .checkbox-group__error-message {
    color: ${({ theme }) => theme.colors.red[7]};
  }

  ${({ isError, theme }) =>
    isError &&
    css`
      border-left: 2px solid ${theme.colors.red[9]};
      padding-left: 0.5rem;
    `};
`;
