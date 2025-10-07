import styled, { css, RuleSet } from "styled-components";
import { linearGradient, rgba } from "polished";
import { IQuenUITheme } from "@quen-ui/theme";
import { TQuenSize } from "../types/size";
import { IAlertProps } from "./types";

const getTypeStyles = (
  theme: IQuenUITheme,
  type: IAlertProps["type"]
): RuleSet => {
  console.log(theme)
  switch (type) {
    case "success":
      return css`
        ${linearGradient({
          colorStops: theme.components.Alert.successBackground,
          toDirection: "to right"
        })};
      `;
    case "danger":
      return css`
        ${linearGradient({
          colorStops: theme.components.Alert.dangerBackground,
          toDirection: "to right"
        })};
      `;
    case "warning":
      return css`
        ${linearGradient({
          colorStops: theme.components.Alert.warningBackground,
          toDirection: "to right"
        })};
      `;
    case "info":
    default:
      return css`
        background: ${rgba(theme.components.Alert.infoBackground, 0.3)};
      `;
  }
};

const getColorBackgroundIcon = (
  theme: IQuenUITheme,
  type: IAlertProps["type"]
) => {
  switch (type) {
    case "success":
      return theme.components.Alert.colorSuccessIcon;
    case "warning":
      return theme.components.Alert.colorWarningIcon;
    case "danger":
      return theme.components.Alert.colorDangerIcon;
    case "info":
    default:
      return theme.components.Alert.colorInfoIcon;
  }
};

export const AlertWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !["size", "type"].includes(prop)
})<{
  size: TQuenSize;
  type: IAlertProps["type"];
}>`
  border-radius: ${({ theme }) => theme.components.Alert.radius};
  padding: ${({ size, theme }) => theme.space[size]};
  display: flex;
  gap: ${({ size, theme }) => theme.space[size]};
  justify-content: space-between;
  ${({ theme, type }) => getTypeStyles(theme, type)};

  .quen-ui__alert-content {
    width: 100%;
  }
  
  .quen-ui__text {
    color: ${({ theme }) => theme.components.Alert.colorText}; 
  }
`;

export const AlertIconWrapper = styled.div<{ type: IAlertProps["type"] }>`
  border-radius: ${({ theme }) => theme.control.radius};
  background: ${({ theme, type }) => getColorBackgroundIcon(theme, type)};
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.components.Alert.colorIcon};
  min-width: 32px;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const AlertActionWrapper = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    width: 100%;
  }
`;
