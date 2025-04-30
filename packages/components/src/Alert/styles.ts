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
          colorStops: [theme.colors.green.green1, theme.colors.green.green4],
          toDirection: "to right"
        })};
      `;
    case "danger":
      return css`
        ${linearGradient({
          colorStops: [theme.colors.red.red1, theme.colors.red.red4],
          toDirection: "to right"
        })};
      `;
    case "warning":
      return css`
        ${linearGradient({
          colorStops: [
            theme.colors.orange.orange1,
            theme.colors.orange.orange4
          ],
          toDirection: "to right"
        })};
      `;
    case "info":
    default:
      return css`
        background: ${rgba(theme.colors.component.secondary.default.gray, 0.3)};
      `;
  }
};

const getColorBackgroundIcon = (
  theme: IQuenUITheme,
  type: IAlertProps["type"]
) => {
  switch (type) {
    case "success":
      return theme.colors.green.green9;
    case "warning":
      return theme.colors.orange.orange9;
    case "danger":
      return theme.colors.red.red9;
    case "info":
    default:
      return theme.colors.grayViolet.grayViolet9;
  }
};

export const AlertWrapper = styled.div<{
  size: TQuenSize;
  type: IAlertProps["type"];
}>`
  border-radius: ${({ theme }) => theme.control.radius};
  padding: ${({ size, theme }) => theme.control.space[size]};
  display: flex;
  gap: ${({ size, theme }) => theme.control.space[size]};
  justify-content: space-between;
  ${({ theme, type }) => getTypeStyles(theme, type)};
`;

export const AlertIconWrapper = styled.div<{ type: IAlertProps["type"] }>`
  border-radius: ${({ theme }) => theme.control.radius};
  padding: ${({ theme }) => theme.space.xs};
  background: ${({ theme, type }) => getColorBackgroundIcon(theme, type)};
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.backgroundPrimaryMain};
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
