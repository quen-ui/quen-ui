import styled, { css } from "styled-components";
import { Text } from "../typography/Text";
import { TQuenSize } from "../types/size";

const getHeight = (size: TQuenSize): number => {
  switch (size) {
    case "l":
      return 3; //48px
    case "s":
      return 2; //32px
    case "xs":
      return 1.5; // 24px
    case "m":
    default:
      return 2.5; //40px
  }
};

export const TextareaComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .text-field__required {
    color: ${({ theme }) => theme.colors.red[9]};
  }
  
  .text-field__error-message {
    color: ${({ theme }) => theme.colors.red[9]};
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

export const TextareaWrapper = styled.div<{
  size: TQuenSize;
  focus: boolean;
  error?: string | boolean;
  disabled?: boolean;
}>`
  min-height: ${({ size }) => getHeight(size)}rem;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.colors.gray[3]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[5]};
  display: flex;
  align-items: center;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.gray[9]};

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[8]};
  }

  ${({ focus }) =>
  focus &&
  css`
      border-bottom: 2px solid
        ${({ theme }) =>
    theme.colors.violet[9]}!important;
    `}
  
  ${({ error, theme }) => error && css`
    border-bottom: 2px solid ${theme.colors.red[9]}!important;
  `};

  ${({ disabled , theme }) => disabled && css`
    background: ${theme.colors.gray[2]};
    border-bottom: 1px solid ${theme.colors.gray[3]}!important;
    textarea {
      background: ${theme.colors.gray[2]};
    }
  `};
`;
