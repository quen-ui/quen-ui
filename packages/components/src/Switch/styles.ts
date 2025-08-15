import styled, { css, DefaultTheme } from "styled-components";
import { math } from "polished";
import { TQuenSize } from "../types/size";

const getSizing = (theme: DefaultTheme, size: TQuenSize) => {
  const borderGap = math(`${theme.control.borderWidth} * 4`);
  return {
    height: theme.control.height[size],
    borderGap,
    circleSize: math(`${theme.control.height[size]} - ${borderGap}`)
  }
}

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
    theme.colors.gray[4]};
  border: ${({ theme }) => css`
    ${theme.control.borderWidth} solid ${theme.colors.grayViolet[9]}
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
      theme.colors.grayViolet[9]};
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
      theme.colors.violet[9]};

    &::before {
      transform: translateX(0);
    }
  }
  
  &:disabled {
    background-color: ${({ theme }) =>
        theme.colors.gray[2]};
    &::before {
      background-color: ${({ theme }) =>
          theme.colors.grayViolet[2]};
    }
  }
`;
