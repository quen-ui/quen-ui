import styled, { css } from "styled-components";
import RcInputNumber from "rc-input-number";
import { math } from "polished";
import { TQuenSize } from "../types/size";

export const InputNumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .quen-ui--input-number__required {
    color: ${({ theme }) => theme.colors.red[9]};
  }

  .quen-ui--input-number__error-message {
    color: ${({ theme }) => theme.colors.red[9]};
  }
`;

export const InputNumberContainer = styled.div<{
  size: TQuenSize;
  isFocus: boolean;
  error?: string | boolean;
  isDisabled?: boolean;
}>`
  height: ${({ size, theme }) => theme.control.height[size]};
  border-radius: ${({ theme }) => theme.control.radius};
  border: ${({ theme }) =>
    `${theme.control.borderWidth} solid ${theme.colors.gray[3]}`};
  border-bottom: ${({ theme }) =>
    `${theme.control.borderWidth} solid ${theme.colors.gray[5]}`};
  display: flex;
  align-items: center;
  padding-left: 0.75rem;
  gap: 0.5rem;
  
  input {
    font-size: ${({ theme, size }) => theme.fonts.text.size[size]};
    line-height: ${({ theme, size }) => theme.fonts.text.lineHeight[size]};
  }

  &:hover {
    ${({ theme, isFocus }) =>
      !isFocus &&
      css`
        border-bottom: ${theme.control.borderWidth} solid
          ${theme.colors.gray[8]};
      `}
  }

  ${({ isFocus }) =>
    isFocus &&
    css`
      border-bottom: ${({ theme }) =>
        `${math(`${theme.control.borderWidth} * 2`)} solid ${theme.primaryColor}`};
    `};

  ${({ error, theme }) =>
    error &&
    css`
      border-bottom: ${math(`${theme.control.borderWidth} * 2`)} solid
        ${theme.colors.red[8]};
    `};

  ${({ isDisabled, theme }) =>
    isDisabled &&
    css`
      background: ${theme.colors.gray[4]};
      border-bottom: ${theme.control.borderWidth} solid
        ${theme.colors.gray[3]}!important;
      input {
        background: ${theme.colors.gray[4]};
      }
    `};
`;

export const InputNumberStyled = styled(RcInputNumber)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  
  .rc-input-number-input {
    box-sizing: border-box;
    outline: none;
    border: none;
  }
  
  .rc-input-number-handler-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: ${({ theme }) =>
        `${theme.control.borderWidth} solid ${theme.colors.gray[3]}`};
  }
  
  .rc-input-number-handler {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;
    padding-left: 2px;
    padding-right: 2px;
  }
  
  .rc-input-number-handler-up {
    border-bottom: ${({ theme }) =>
        `${theme.control.borderWidth} solid ${theme.colors.gray[3]}`};
  }
`;
