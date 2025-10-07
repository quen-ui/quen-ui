import styled, { css } from "styled-components";
import { TQuenSize } from "../types/size";
import { math } from "polished";

export const InputBaseContainer = styled.div.attrs({
  className: "quen-ui__input-base__container",
}).withConfig({
  shouldForwardProp: (prop) => !["size", "error", "disabled"].includes(prop)
})<{
  size: TQuenSize;
  error?: string | boolean;
  disabled?: boolean;
}>`
  height: ${({ size, theme }) => theme.control.height[size]};
  border-radius: ${({ theme }) => theme.control.radius};
  border: ${({ theme }) =>
  `${theme.control.borderWidth} solid ${theme.colors.grayViolet[9]}`};
  display: flex;
  align-items: center;
  padding-left: 0.75rem;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme.components.Input.iconColor};
  }

  &:hover {
    ${({ theme }) =>
  css`
        border-bottom: ${theme.control.borderWidth} solid
          ${theme.colors[theme.primaryColor][9]};
      `}
  }

  ${({ error, theme }) =>
  error &&
  css`
      border-bottom: ${theme.control.borderWidth} solid
        ${theme.components.Input.errorColor};
    `};

  ${({ disabled, theme }) =>
  disabled &&
  css`
      background: ${theme.components.Input.disabledBackground};
      border-bottom: ${theme.control.borderWidth} solid
        ${theme.components.Input.disabledColor}!important;
    `};
`;


export const InputBaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: max-content;

  .quen-ui__input-base--required {
    color: ${({ theme }) => theme.components.Input.errorColor};
  }

  .quen-ui__input-base--error-message {
    color: ${({ theme }) => theme.components.Input.errorColor};
  }

  &.quen-ui__input-base--focus-input {
    ${InputBaseContainer} {
      border-bottom: ${({ theme }) =>
          `${math(`${theme.control.borderWidth} * 2`)} solid ${theme.colors[theme.primaryColor][9]}`};
    }
  }
`;
