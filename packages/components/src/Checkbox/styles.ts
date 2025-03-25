import styled, { css } from "styled-components";
import { TQuenSize } from "../types/size";
import {ICheckboxGroupProps} from "./types";

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

export const CheckboxLabelStyled = styled.label<{ isDisabled?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
`;

export const CheckboxInputStyled = styled.input<{
  size: TQuenSize;
  isIntermediate?: boolean;
}>`
  width: ${({ size }) => getSizing(size)};
  height: ${({ size }) => getSizing(size)};
  border: 1px solid
    ${({ theme }) => theme.colors.component.primary.default.grayViolet};
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
    background-color: ${({ theme }) =>
      theme.colors.component.primary.default.violet};
    border-left: 1px solid
      ${({ theme }) => theme.colors.component.primary.default.grayViolet};
    border-bottom: 1px solid
      ${({ theme }) => theme.colors.component.primary.default.grayViolet};
    opacity: 0;
    transition:
      opacity 0.15s,
      transform 0.15s,
      background-color 0.08s;
    transform: rotate(-50deg) scale(0, 1);
    transform-origin: 0 0;
  }

  &:disabled {
    background-color: ${({ theme }) =>
      theme.colors.component.primary.disabled.gray};
    border: 1px solid
      ${({ theme }) => theme.colors.component.primary.disabled.grayViolet};
    cursor: not-allowed;
  }

  &:disabled:checked {
    background-color: ${({ theme }) => theme.colors.gray.gray3};
    border: 1px solid
      ${({ theme }) => theme.colors.component.primary.disabled.violet};
    cursor: not-allowed;

    &:before {
      background-color: ${({ theme }) => theme.colors.gray.gray3};
    }
  }
  &:checked {
    background-color: ${({ theme }) =>
      theme.colors.component.primary.default.violet};
    border-color: ${({ theme }) =>
      theme.colors.component.secondary.default.violet};

    &::before {
      opacity: 1;
      transform: rotate(-50deg) scale(1, 1);
    }
  }

  &:hover:not(:disabled) {
    border: 1px solid
      ${({ theme }) => theme.colors.component.primary.hover.violet};
  }

  &:hover:checked:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.component.primary.hover.violet};
    background-color: ${({ theme }) =>
      theme.colors.component.primary.hover.violet};

    &:before {
      background-color: ${({ theme }) =>
        theme.colors.component.primary.hover.violet};
    }
  }

  ${({ isIntermediate, size, theme }) =>
    isIntermediate &&
    css`
      &, &:hover, &:checked {
        background-color: ${({ theme }) =>
            theme.colors.component.primary.default.violet};
        border-color: ${({ theme }) =>
            theme.colors.component.secondary.default.violet};
        &::before {
          top: calc(calc(${getSizing(size)} - 0.125rem) / 2);
          left: 0.125rem;
          width: calc(${getSizing(size)} - 0.125rem * 2 - 0.125rem);
          height: 0.125rem;
          background-color: ${theme.colors.component.primary.default.grayViolet};
          border: none;
          opacity: 1;
          transition: opacity 0.15s,
          transform 0.15s,
          background-color 0.08s 0.04s;
          transform: rotate(0) translate(0, -50%);
        }
      }
    `};
`;

export const CheckboxGroupWrapper = styled.div<{ direction: ICheckboxGroupProps["direction"]}>`
  display: flex;
  gap: 0.5rem;
  flex-direction: ${({ direction }) => direction === "horizontal" ? "row" : "column"};

  .checkbox-group__required {
    color: ${({ theme }) => theme.colors.text.colors.red};
  }

  .checkbox-group__error-message {
    color: ${({ theme }) => theme.colors.text.colors.red};
  }
`;
