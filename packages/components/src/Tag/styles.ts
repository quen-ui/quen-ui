import styled, { css } from "styled-components";
import { Text } from "../typography/Text";

export const TagStyled = styled(Text).withConfig({
  shouldForwardProp: (prop) => !["disabled"].includes(prop)
})<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.15rem;
  width: max-content;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.colors.violet[4]};
  background: ${({ theme }) => theme.colors.grayViolet[4]};

  ${({ disabled, theme }) =>
      disabled &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.violet[2]};
      background: ${theme.colors.gray[2]};
      color: ${({ theme }) => theme.colors.gray[4]};
      * {
        color: ${({ theme }) => theme.colors.gray[4]};
      }
    `}
`;

export const TagButtonClosable = styled.button.withConfig({
  shouldForwardProp: (prop) => !["disabled"].includes(prop)
})<{
  disabled?: boolean;
}>`
  cursor: pointer;
  padding: 2px;
  border: 1px solid
    ${({ theme, disabled }) =>
      disabled ? theme.colors.gray[2] : theme.colors.gray[4]};
  background: transparent;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  
  &:disabled {
    cursor: not-allowed;
  }

  svg {
    color: ${({ theme, disabled }) =>
      disabled ? theme.colors.gray[4] : theme.colors.gray[9]};
  }
`;
