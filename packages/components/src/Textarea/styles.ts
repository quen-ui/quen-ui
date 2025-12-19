import styled from "styled-components";
import { Text } from "../typography/Text";
import { InputBase } from "../InputBase";

export const TextareaComponentWrapper = styled(InputBase)`
  .quen-ui__input-base__container {
    padding-right: 0.75rem;  
  }
  
  textarea {
    padding-top: 7px;
    padding-bottom: 7px;
    height: 100%;
    background: ${({ disabled, theme }) => disabled && theme.components.Input.disabledBackground};
    color: ${({disabled,  theme }) => disabled && theme.components.Input.disabledColor};
  }
`;

export const TextareaStyled = styled(Text)`
  box-sizing: border-box;
  outline: none;
  border: none;
  resize: none;
  width: 100%;
  background: transparent;
`;
