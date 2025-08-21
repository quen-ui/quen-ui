import styled, { css, RuleSet } from "styled-components";
import { linearGradient, rgba } from "polished";
import { IQuenUITheme } from "@quen-ui/theme";
import { TQuenSize } from "../types/size";
import { IAlertProps } from "./types";

const getTypeStyles = (
  theme: IQuenUITheme,
  type: IAlertProps["type"]
): RuleSet => {
  switch (type) {
    case "success":
      return css`
        ${linearGradient({
          colorStops: [theme.colors.green[1], theme.colors.green[4]],
          toDirection: "to right"
        })};
      `;
    case "danger":
      return css`
        ${linearGradient({
          colorStops: [theme.colors.red[1], theme.colors.red[4]],
          toDirection: "to right"
        })};
      `;
    case "warning":
      return css`
        ${linearGradient({
          colorStops: [theme.colors.orange[1], theme.colors.orange[4]],
          toDirection: "to right"
        })};
      `;
    case "info":
    default:
      return css`
        background: ${rgba(theme.colors.grayViolet["9"], 0.3)};
      `;
  }
};

const getColorBackgroundIcon = (
  theme: IQuenUITheme,
  type: IAlertProps["type"]
) => {
  switch (type) {
    case "success":
      return theme.colors.green[9];
    case "warning":
      return theme.colors.orange[9];
    case "danger":
      return theme.colors.red[9];
    case "info":
    default:
      return theme.colors.grayViolet[9];
  }
};

export const AlertWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !["size", "type"].includes(prop)
})<{
  size: TQuenSize;
  type: IAlertProps["type"];
}>`
  border-radius: ${({ theme }) => theme.control.radius};
  padding: ${({ size, theme }) => theme.space[size]};
  display: flex;
  gap: ${({ size, theme }) => theme.space[size]};
  justify-content: space-between;
  ${({ theme, type }) => getTypeStyles(theme, type)};

  .quen-ui__alert-content {
    width: 100%;
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
  color: ${({ theme }) => theme.colors.grayViolet[1]};
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
