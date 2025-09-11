import styled, { css } from "styled-components";
import RcInputNumber from "rc-input-number";
import { math } from "polished";
import { TQuenSize } from "../types/size";

export const InputNumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: max-content;

  .quen-ui--input-number__required {
    color: ${({ theme }) => theme.colors.red[9]};
  }

  .quen-ui--input-number__error-message {
    color: ${({ theme }) => theme.colors.red[9]};
  }
`;

export const InputNumberContainer = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["size", "focus", "error", "disabled"].includes(prop)
})<{
  size: TQuenSize;
  focus: boolean;
  error?: string | boolean;
  disabled?: boolean;
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
  
  svg {
    color: ${({ theme }) => theme.colors.gray[9]};
  }

  .rc-input-number-handler {
    height: ${({ size, theme }) => math(`${theme.control.height[size]} / 2`)};
  }

  input {
    background: transparent;
    font-size: ${({ theme, size }) => theme.fonts.text.size[size]};
    line-height: ${({ theme, size }) => theme.fonts.text.lineHeight[size]};
  }

  &:hover {
    ${({ theme, focus }) =>
      !focus &&
      css`
        border-bottom: ${theme.control.borderWidth} solid
          ${theme.colors.gray[8]};
      `}
  }

  ${({ focus }) =>
      focus &&
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

  ${({ disabled, theme }) =>
      disabled &&
    css`
      background: ${theme.colors.gray[2]};
      border-bottom: ${theme.control.borderWidth} solid
        ${theme.colors.gray[3]}!important;
      input {
        background: ${theme.colors.gray[2]};
        pointer-events: none;
      }
    `};
`;

export const InputNumberStyled = styled(RcInputNumber).withConfig({
  shouldForwardProp: prop => !["widthRight"].includes(prop),
})<{ widthRight: number }>`
  color: ${({ theme }) => theme.colors.gray[9]};
  &,
  .rc-input-number {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .rc-input-number-wrapper.rc-input-number-group:has(
      .rc-input-number-group-addon
    ) {
    display: flex;

    .rc-input-number-handler-wrap {
      position: relative;
      right: ${({ widthRight }) => `-${widthRight - 1}px`};
    }

    .rc-input-number-group-addon {
      position: relative;
      right: 30px;
      display: flex;
      align-items: center;
    }
  }

  .rc-input-number-input {
    box-sizing: border-box;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.colors.gray[9]};
  }

  .rc-input-number-handler-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: ${({ theme }) =>
      `${theme.control.borderWidth} solid ${theme.colors.gray[3]}`};
    height: 100%;
    justify-content: center;
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
