import { IQuenUITheme } from "../theme/types";

export interface INotificationTokens {
  /** The background color of the notification container */
  background: string;
  /** The border radius applied to the notification box */
  radius: string;
  /** The color used for success notifications */
  successColor: string;
  /** The color used for warning notifications */
  warningColor: string;
  /** The color used for error notifications */
  errorColor: string;
  /** The color used for informational notifications */
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
