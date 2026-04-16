import styled, { css } from "styled-components";
import { TQuenSize } from "../types/size";
import { math } from "polished";
import { Text } from "../typography/Text";

export const InputBaseAddonWrapper = styled.div`
  margin-inline-start: -0.0625rem;
`;

export const InputBaseRightAddonWrapper = styled.div`
  margin-inline-end: -0.75rem;
`;

export const InputBaseContainer = styled.div
  .attrs({
    className: "quen-ui__input-base__container"
  })
  .withConfig({
    shouldForwardProp: (prop) =>
      !["size", "error", "disabled", "leftContent"].includes(prop)
  })<{
  size: TQuenSize;
  error?: string | boolean;
  disabled?: boolean;
  leftContent?: boolean;
}>`
  height: ${({ size, theme }) => theme.control.height[size]};
  border-radius: ${({ theme }) => theme.control.radius};
  border: ${({ theme }) =>
    `${theme.control.borderWidth} solid ${theme.colors.grayViolet[9]}`};
  display: flex;
  align-items: center;
  ${({ size, leftContent }) =>
    !leftContent &&
    css`
      padding-left: ${size === "xs" || size === "s" ? "0.385rem" : "0.75rem"};
    `};
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme.components.Input.iconColor};
  }

  &:hover {
    ${({ theme }) => css`
      border-bottom: ${theme.control.borderWidth} solid
        ${theme.colors[theme.primaryColor][9]};
    `};

    ${InputBaseAddonWrapper} {
      ${({ theme, size }) => css`
        height: ${
            math(`${theme.control.height[size as TQuenSize]} - 0.0625rem`)};
        border-bottom-left-radius: ${theme.control.radius};
        border-bottom: ${theme.control.borderWidth} solid
          ${theme.colors[theme.primaryColor][9]};
      `};
    }
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

export const InputContentText = styled(Text)`
  background: ${({ theme }) => theme.components.Input.borderColor};
  border-right: 1px solid ${({ theme }) => theme.components.Input.disabledColor};
  height: ${({ theme, size = "m" }) =>
    math(`${theme.control.height[size as TQuenSize]} - 0.0625rem`)};
  display: flex;
  align-items: center;
  padding-left: ${({ size }) =>
    size === "xs" || size === "s" ? "0.385rem" : "0.75rem"};
  padding-right: ${({ size }) =>
    size === "xs" || size === "s" ? "0.385rem" : "0.75rem"};
`;

export const InputBaseWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !["size"].includes(prop)
})<{ size: TQuenSize }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  .quen-ui__input-base--required {
    color: ${({ theme }) => theme.components.Input.errorColor};
  }

  .quen-ui__input-base--error-message {
    color: ${({ theme }) => theme.components.Input.errorColor};
  }

  &.quen-ui__input-base--focus-input {
    ${InputContentText} {
      height: ${({ theme, size = "m" }) =>
        math(`${theme.control.height[size as TQuenSize]} - 0.125rem`)};
    }

    ${InputBaseAddonWrapper} {
      height: ${({ theme, size = "m" }) =>
        math(`${theme.control.height[size as TQuenSize]} - 0.125rem`)};
    }

    ${InputBaseContainer} {
      border-bottom: ${({ theme }) =>
        `${math(`${theme.control.borderWidth} * 2`)} solid ${theme.colors[theme.primaryColor][9]}`};
    }
  }
`;
