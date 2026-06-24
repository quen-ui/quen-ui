import styled, { css } from "styled-components";
import type { TQuenSize } from "../types/size";

export const ControlContainer = styled.div<{ size: TQuenSize }>`
  display: inline-flex;
  background-color: ${({ theme }) =>
    theme.components.SegmentedControl.backgroundColor};
  border-radius: ${({ theme }) =>
    theme.components.SegmentedControl.borderRadius};
  padding: 4px;
  box-sizing: border-box;
  position: relative;
  width: fit-content;
  min-width: max-content;
  overflow: hidden;
`;

export const SegmentedIndicatorStyled = styled.div<{ width: number; left: number }>`
  position: absolute;
  top: 4px;
  bottom: 4px;
  width: ${({ width }) => width}px;
  transform: translateX(${({ left }) => left}px);
  background-color: ${({ theme }) => theme.components.SegmentedControl.activeBackgroundColor};
  border-radius: calc(${({ theme }) => theme.components.SegmentedControl.borderRadius} - 4px);
  box-shadow: ${({ theme }) => theme.components.SegmentedControl.boxShadow};
  transition:
    transform 0.25s
      cubic-bezier(0.4, 0, 0.2, 1),
    width 0.25s
      cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
  pointer-events: none;
`;

export const SegmentButtonStyled = styled.button<{
  isActive: boolean;
  isDisabled?: boolean;
  size: TQuenSize;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: none;
  background-color: transparent;
  color: ${({ isDisabled, theme, isActive }) =>
    isDisabled
      ? theme.components.SegmentedControl.disabledTextColor
      : isActive
        ? theme.components.SegmentedControl.activeTextColor
        : theme.components.SegmentedControl.textColor};
  height: ${({ size, theme }) => theme.control.height[size]};
  padding: ${({ size, theme }) => theme.space[size]};
  border-radius: calc(
    ${({ theme }) => theme.components.SegmentedControl.borderRadius} - 4px
  );
  outline: none;
  position: relative;
  z-index: 1;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  transition: color 0.25s ease-in-out;

  &:focus-visible {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors[theme.primaryColor][9]};
  }

  &:hover:not(:disabled) {
    background-color: ${({ isActive, theme }) =>
      isActive
        ? theme.components.SegmentedControl.activeBackgroundColor
        : "rgba(0, 0, 0, 0.05)"};
  }
`;
