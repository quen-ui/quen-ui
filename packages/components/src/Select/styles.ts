import styled, { css } from "styled-components";
import { TQuenSize } from "../types/size";
import { Control } from "../typography/Control";
interface ISelectContainerStyledProps {
  size: TQuenSize;
  isFocus?: boolean;
  error?: boolean;
  isDisabled?: boolean;
}

const getHeight = (size: TQuenSize): number => {
  switch (size) {
    case "l":
      return 3; //48px
    case "s":
      return 2; //32px
    case "xs":
      return 1.5; // 24px
    case "m":
    default:
      return 2.5; //40px
  }
};

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .text-field__required {
    color: ${({ theme }) => theme.colors.text.colors.red};
  }

  .text-field__error-message {
    color: ${({ theme }) => theme.colors.text.colors.red};
  }
`;

export const SelectContainerStyled = styled.div.withConfig({
  shouldForwardProp: prop => !["isFocus"].includes(prop),
})<ISelectContainerStyledProps>`
  height: ${({ size }) => getHeight(size)}rem;
  width: 100%;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.colors.gray.gray3};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.gray5};
  display: flex;
  align-items: center;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  gap: 0.5rem;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray.gray8};
  }

  ${({ isFocus }) =>
    isFocus &&
    css`
      border-bottom: 2px solid
        ${({ theme }) =>
          theme.colors.component.primary.default.violet}!important;
    `}

  ${({ error, theme }) =>
    error &&
    css`
      border-bottom: 2px solid
        ${theme.colors.component.primary.default.red}!important;
    `};

  ${({ isDisabled, theme }) =>
    isDisabled &&
    css`
      background: ${theme.colors.component.secondary.disabled.gray};
      border-bottom: 1px solid ${theme.colors.gray.gray3}!important;
      input {
        background: ${theme.colors.component.secondary.disabled.gray};
      }
    `};
`;

export const SelectInputStyled = styled(Control)`
  border: none;
  width: 100%;
  outline: none;
  
  &:hover {
    border: none;
    outline: none;
  }
  
  &:active {
    border: none;
    outline: none;
  }
  
`;
