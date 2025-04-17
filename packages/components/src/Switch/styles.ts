import styled, { css, DefaultTheme } from "styled-components";
import { math } from "polished";
import { TQuenSize } from "../types/size";

const getSizing = (theme: DefaultTheme, size: TQuenSize) => {
  const borderGap = math(`${theme.control.borderWidth} * 4`);
  if (size === "l") {
    return {
      height: theme.control.heightL,
      borderGap,
      circleSize: math(`${theme.control.heightL} - ${borderGap}`)
    };
  }
  if (size === "m") {
    return {
      height: theme.control.heightM,
      borderGap,
      circleSize: math(`${theme.control.heightM} - ${borderGap}`)
    };
  }
  if (size === "s") {
    return {
      height: theme.control.heightS,
      borderGap,
      circleSize: math(`${theme.control.heightS} - ${borderGap}`)
    };
  }
  //xs
  return {
    height: theme.control.heightXs,
    borderGap,
    circleSize: math(`${theme.control.heightXs} - ${borderGap}`)
  };
};

export const SwitchWrapperStyled = styled.div<{ isDisabled?: boolean }>`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  ${({ isDisabled }) => isDisabled && "pointer-events: none;"};
`;

export const SwitchStyled = styled.input<{ size: TQuenSize }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  width: calc(${({ theme, size }) => getSizing(theme, size).height}* 2);
  height: ${({ theme, size }) => getSizing(theme, size).height};
  margin: 0;
  background-color: ${({ theme }) =>
    theme.colors.component.secondary.default.gray};
  border: ${({ theme }) => css`
    ${theme.control.borderWidth} solid ${theme.colors.component.primary.default
      .grayViolet}
  `};
  cursor: pointer;
  transition:
    background-color 0.15s,
    border-color 0.15s;
  -webkit-appearance: none;
  border-radius: ${({ theme }) => theme.control.radius};

  &::before {
    content: "";
    position: absolute;
    right: 3px;
    box-sizing: border-box;
    width: ${({ theme, size }) => getSizing(theme, size).circleSize};
    height: ${({ theme, size }) => getSizing(theme, size).circleSize};
    background-color: ${({ theme }) =>
      theme.colors.component.primary.default.grayViolet};
    border-radius: 1rem;
    transition:
      transform 0.15s,
      background-color 0.15s;
    ${({ theme, size }) => {
      const sizing = getSizing(theme, size);
      return css`
        transform: translateX(
          ${math(`(${sizing.height} - ${sizing.borderGap}) * -1`)}
        );
      `;
    }};
  }

  &:checked {
    background-color: ${({ theme }) =>
      theme.colors.component.primary.default.violet};

    &::before {
      transform: translateX(0);
    }
  }
  
  &:disabled {
    background-color: ${({ theme }) =>
        theme.colors.component.secondary.disabled.gray};
    &::before {
      background-color: ${({ theme }) =>
          theme.colors.component.primary.disabled.grayViolet};
    }
  }
`;
