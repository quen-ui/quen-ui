import styled, { css } from "styled-components";
import { Text } from "../typography/Text";
import { TQuenSize } from "../types/size";

export const TextFieldWrapper = styled.div.attrs({ className: "quen-ui__text-field" })`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  .text-field__required {
    color: ${({ theme }) => theme.colors.red[7]};
  }

  .text-field__error-message {
    color: ${({ theme }) => theme.colors.red[7]};
  }
`;

export const TextFieldInputStyled = styled(Text)`
  box-sizing: border-box;
  outline: none;
  border: none;
  background: transparent;
  width: 100%;
`;

export const TextFieldInputWrapper = styled.div.withConfig({
  shouldForwardProp: (props) =>
    !["size", "focus", "error", "disabled"].includes(props)
})<{
  size: TQuenSize;
  focus: boolean;
  error?: string | boolean;
  disabled?: boolean;
}>`
  height: ${({ size, theme }) => theme.control.height[size]};
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.colors.gray[3]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[5]};
  display: flex;
  align-items: center;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  gap: 0.5rem;
  
  color: ${({ theme }) => theme.colors.gray[9]};

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[8]};
  }

  ${({ focus }) =>
    focus &&
    css`
      border-bottom: 2px solid
        ${({ theme }) => theme.colors.violet[9]}!important;
    `}

  ${({ error, theme }) =>
    error &&
    css`
      border-bottom: 2px solid ${theme.colors.red[9]}!important;
    `};

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background: ${theme.colors.gray[2]};
      border-bottom: 1px solid ${theme.colors.gray[4]}!important;
      input {
        background: ${theme.colors.gray[2]};
        color: ${theme.colors.gray[4]};
      }
    `};
`;
