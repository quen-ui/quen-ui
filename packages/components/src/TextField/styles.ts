import styled from "styled-components";
import { Text } from "../typography/Text";

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

