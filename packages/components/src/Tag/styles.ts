import styled, { css } from "styled-components";
import { Text } from "../typography/Text";

export const TagStyled = styled(Text).withConfig({
  shouldForwardProp: prop => !["isDisabled"].includes(prop),
})<{ isDisabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.15rem;
  width: max-content;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.colors.violet[4]};
  background: ${({ theme }) => theme.colors.grayViolet[4]};

  ${({ isDisabled, theme }) =>
    isDisabled &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.violet[2]};
      background: ${theme.colors.grayViolet[2]};
      color: ${({ theme }) => theme.colors.gray[2]};
    `}
`;

export const TagButtonClosable = styled.button.withConfig({
  shouldForwardProp: prop => !["isDisabled"].includes(prop),
})<{
  isDisabled?: boolean;
}>`
  cursor: pointer;
  padding: 2px;
  border: 1px solid
    ${({ theme, isDisabled }) =>
      isDisabled ? theme.colors.gray[2] : theme.colors.gray[4]};
  background: transparent;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;

  svg {
    fill: ${({ theme, isDisabled }) =>
      isDisabled ? theme.colors.gray[2] : theme.colors.gray[4]};
  }
`;
