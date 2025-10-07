import styled, { css } from "styled-components";
import RcInputNumber from "rc-input-number";
import { math } from "polished";
import { InputBase, type IInputBaseProps } from "../InputBase";

export const InputBaseStyled = styled(InputBase)<IInputBaseProps>`
  .rc-input-number-handler {
    height: ${({ size, theme }) =>
      math(`${theme.control.height[size || "m"]} / 2`)};
  }

  input {
    background: transparent;
    font-size: ${({ theme, size }) => theme.fonts.text.size[size || "m"]};
    line-height: ${({ theme, size }) =>
      theme.fonts.text.lineHeight[size || "m"]};
  }


  ${({ disabled, theme }) =>
      disabled &&
      css`
      input {
        background: ${theme.components.Input.disabledBackground};
        pointer-events: none;
        color: ${theme.components.Input.disabledColor};
      }
    `};
`;

export const InputNumberStyled = styled(RcInputNumber).withConfig({
  shouldForwardProp: (prop) => !["widthRight"].includes(prop)
})<{ widthRight: number }>`
  color: ${({ theme }) => theme.components.Input.color};
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
    color: ${({ theme }) => theme.components.Input.color};
  }

  .rc-input-number-handler-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: ${({ theme }) =>
      `${theme.control.borderWidth} solid ${theme.components.Input.borderColor}`};
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
      `${theme.control.borderWidth} solid ${theme.components.Input.borderColor}`};
  }
`;
