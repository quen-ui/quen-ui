import styled, { css } from "styled-components";
import { InputBase, type IInputBaseProps } from "../InputBase";

export const InputBaseStyled = styled(InputBase)<IInputBaseProps>`
  input {
    background: transparent;
    font-size: ${({ theme, size }) => theme.fonts.text.size[size || "m"]};
    line-height: ${({ theme, size }) =>
      theme.fonts.text.lineHeight[size || "m"]};
  }
  
  .quen-ui__inputs-date-wrapper {
    width: 100%;
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
  &.quen-ui__input-date--input {
    width: 100%;
    text-align: center;
  }
`;
