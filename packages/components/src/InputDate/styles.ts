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

export const InputDateStyled = styled.input`
  color: ${({ theme }) => theme.components.Input.color};
  border: none;
  outline: none;
  
  
`;
