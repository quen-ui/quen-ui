import { IQuenUITheme } from "../theme/types";

export interface IAlertTokens {
  radius: string;
  successBackground: [string, string];
  warningBackground: [string, string];
  dangerBackground: [string, string];
  infoBackground: string;
  colorSuccessIcon: string;
  colorDangerIcon: string;
  colorWarningIcon: string;
  colorInfoIcon: string;
  colorText: string;
  colorIcon: string;
}

export const generateAlertTokens = (theme: IQuenUITheme): IAlertTokens => ({
  radius: theme.components.Alert?.radius || theme.control.radius,
  successBackground: theme.components.Alert?.successBackground ?? [
    theme.colors.green[1],
    theme.colors.green[4]
  ],
  dangerBackground: theme.components.Alert?.dangerBackground ?? [
    theme.colors.red[1],
    theme.colors.red[4]
  ],
  warningBackground: theme.components.Alert?.warningBackground ?? [
    theme.colors.orange[1],
    theme.colors.orange[4]
  ],
  infoBackground:
    theme.components.Alert?.infoBackground ?? theme.colors.grayViolet[9],
  colorSuccessIcon:
    theme.components.Alert?.colorSuccessIcon ?? theme.colors.green[9],
  colorDangerIcon:
    theme.components.Alert?.colorDangerIcon ?? theme.colors.red[9],
  colorWarningIcon:
    theme.components.Alert?.colorWarningIcon ?? theme.colors.orange[9],
  colorInfoIcon:
    theme.components.Alert?.colorInfoIcon ?? theme.colors.grayViolet[9],
  colorText: theme.components.Alert?.colorText ?? theme.textColor,
  colorIcon: theme.components.Alert?.colorIcon ?? theme.colors.grayViolet[1]
});
