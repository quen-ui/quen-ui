import styled from "styled-components";
import {TQuenSize} from "@quen-ui/components";

export const BaseCellStyled = styled.td<{ size: TQuenSize }>`
  border: 1px solid ${({ theme }) => theme.colors.gray[5]};
  padding: ${({ theme, size }) => theme.space[size]};
`
