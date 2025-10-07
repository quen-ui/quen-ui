import { IQuenUITheme } from "../theme/types";

export interface INotificationTokens {
  background: string;
  radius: string;
  successColor: string;
  warningColor: string;
  errorColor: string;
  infoColor: string;
}

export const generateNotificationTokens = (theme: IQuenUITheme): INotificationTokens => ({
  background: theme.components.Modal?.backgroundColor ?? theme.colors.grayViolet[2],
  radius: theme.components.Notification?.radius ?? theme.control.radius,
  successColor: theme.components.Notification?.successColor ?? theme.commonColorTokens.successColor,
  warningColor: theme.components.Notification?.warningColor ?? theme.commonColorTokens.warningColor,
  errorColor: theme.components.Notification?.errorColor ?? theme.commonColorTokens.dangerColor,
  infoColor: theme.components.Notification?.infoColor ?? theme.colors[theme.primaryColor][9]

});
