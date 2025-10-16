import styled from "styled-components";
import { Text } from "../typography/Text";
import { InputBase } from "../InputBase";

export const TextFieldInputStyled = styled(Text)`
  box-sizing: border-box;
  outline: none;
  border: none;
  background: transparent;
  width: 100%;
  padding-right: 0.75rem;
  
  &:disabled {
    color: ${({ theme }) => theme.components.Input.disabledColor};
  }
`;


export const TextFieldStyled = styled(InputBase)`
  .quen-ui__input-base__container {
    padding-right: 0.75rem;
  }
`;
