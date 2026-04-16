import styled, { css } from "styled-components";
import type { TStepperOrientation } from "./types";

interface IStepperContainerProps {
  orientation: TStepperOrientation;
}

interface IStepContainerProps {
  orientation: TStepperOrientation;
  active?: boolean;
  completed?: boolean;
  disabled?: boolean;
  clickable?: boolean;
}

interface IStepIconWrapperProps {
  active?: boolean;
  completed?: boolean;
  error?: boolean;
}

interface IStepLabelContainerProps {
  orientation: TStepperOrientation;
  active?: boolean;
  completed?: boolean;
  error?: boolean;
}

interface IConnectorContainerProps {
  orientation: TStepperOrientation;
}

interface IDefaultConnectorLineProps {
  orientation: TStepperOrientation;
  completed?: boolean;
  active?: boolean;
}

export const StepIconWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !["active", "completed", "error"].includes(prop)
})<IStepIconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ theme }) => theme.components.Stepper.iconSize};
  width: ${({ theme }) => theme.components.Stepper.iconSize};
  height: ${({ theme }) => theme.components.Stepper.iconSize};
  border-radius: ${({ theme }) => theme.components.Stepper.iconRadius};
  flex-shrink: 0;
  background-color: ${({ active, completed, error, theme }) => {
    if (error) return theme.components.Stepper.iconBackground.error;
    if (completed) return theme.components.Stepper.iconBackground.completed;
    if (active) return theme.components.Stepper.iconBackground.active;
    return theme.components.Stepper.iconBackground.default;
  }};
  color: ${({ active, completed, error, theme }) =>
    active || completed || error
      ? theme.components.Stepper.iconColor.active
      : theme.components.Stepper.iconColor.default};
  transition: background-color 0.2s;
`;

export const StepMiddleBlock = styled.div.withConfig({
  shouldForwardProp: (prop) => !["orientation"].includes(prop)
})<{ orientation: TStepperOrientation }>`
  display: flex;
  flex-direction: column;
  flex: ${({ orientation }) => (orientation === "horizontal" ? "0 1 auto" : 1)};
  min-width: 0;

  margin-left: ${({ orientation, theme }) =>
    orientation === "horizontal" ? theme.space.s : theme.space.m};
  margin-right: ${({ orientation, theme }) =>
    orientation === "horizontal" ? theme.space.s : theme.space.s};
`;

export const StepLabelContainerStyled = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["orientation", "active", "completed"].includes(prop)
})<IStepLabelContainerProps>`
  display: flex;
  flex-direction: column;
  min-width: 0;

  text-align: ${({ orientation }) =>
    orientation === "horizontal" ? "left" : "left"};
  align-items: flex-start;

  .step-label-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
`;

export const DefaultConnectorLineStyled = styled.span.withConfig({
  shouldForwardProp: (prop) =>
    !["orientation", "completed", "active"].includes(prop)
})<IDefaultConnectorLineProps>`
  display: block;
  ${({ orientation, theme, completed, active }) => {
    const lineColor =
      completed || active
        ? theme.components.Stepper.connectorColor.active
        : theme.components.Stepper.connectorColor.default;

    return orientation === "horizontal"
      ? css`
          width: 100%;
          height: ${theme.components.Stepper.connectorThickness};
          background-color: ${lineColor};
        `
      : css`
          width: ${theme.components.Stepper.connectorThickness};
          height: 100%;
          min-height: 24px;
          background-color: ${lineColor};
        `;
  }}
`;

export const ConnectorContainerStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => !["orientation"].includes(prop)
})<IConnectorContainerProps>`
  ${({ orientation, theme }) =>
    orientation === "horizontal"
      ? css`
          flex: 1;
          min-width: ${theme.components.Stepper.connectorMinWidth};
          align-self: flex-start;
          margin-top: calc(
            (${theme.components.Stepper.iconSize} / 2) -
              (${theme.components.Stepper.connectorThickness} / 2)
          );
          margin-right: ${theme.space.s};
        `
      : css`
          flex: 1;
          align-self: stretch;
          min-height: ${theme.components.Stepper.connectorMinWidth};
          margin-top: ${theme.space.s};
          justify-content: center;
          display: flex;
          margin-bottom: ${theme.space.s};
        `}
`;

export const StepContainerStyled = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["orientation", "alternativeLabel", "clickable", "disabled"].includes(prop)
})<IStepContainerProps>`
  display: flex;
  flex: ${({ orientation }) => (orientation === "horizontal" ? 1 : "0 1 auto")};
  flex-direction: row;
  align-items: ${({ orientation }) =>
    orientation === "vertical" ? "stretch" : "flex-start"};
  position: relative;
  min-width: ${({ orientation }) =>
    orientation === "horizontal" ? "100px" : "auto"};

  ${({ clickable, disabled, theme }) =>
    clickable &&
    !disabled &&
    css`
      cursor: pointer;
      &:hover ${StepIconWrapper} {
        background-color: ${theme.components.Stepper.iconBackground.hover};
      }
    `}

  ${({ disabled, theme }) =>
    disabled &&
    css`
      opacity: ${theme.components.Stepper.disabledOpacity};
      pointer-events: none;
    `}
`;

export const StepperContainerStyled = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["orientation"].includes(prop)
})<IStepperContainerProps>`
  display: flex;
  ${({ orientation }) =>
    orientation === "horizontal"
      ? css`
          flex-direction: row;
          justify-content: space-between;
        `
      : css`
          flex-direction: column;
          align-items: flex-start;
        `}
  width: 100%;
  padding: ${({ theme }) => theme.components.Stepper.padding};
`;

export const StepContentContainerStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => !["orientation"].includes(prop)
})<{
  orientation: TStepperOrientation;
}>`
  width: 100%;
  padding-top: 8px;
`;

export const LeftColumnStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: ${({ theme }) => theme.components.Stepper.iconSize};
`;
