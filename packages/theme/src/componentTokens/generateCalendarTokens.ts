import { IQuenUITheme } from "../theme/types";

export interface ICalendarTokens {
  /** Container corner radius */
  radius: string;
  activeBackground: string;
  secondaryColor: string;
  background: string;
  borderColor: string;
}

export const generateCalendarTokens = (theme: IQuenUITheme): ICalendarTokens => ({
  radius: theme.components.Calendar?.radius ?? theme.control.radius,
  activeBackground: theme.components.Calendar?.activeBackground ?? theme.commonColorTokens.primaryBackground,
  secondaryColor: theme.components.Calendar?.secondaryColor ?? theme.commonColorTokens.secondaryColor,
  background: theme.components.Calendar?.background ?? theme.colorBody,
  borderColor: theme.components.Calendar?.borderColor ?? theme.commonColorTokens.borderColor,
});
