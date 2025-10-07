import { IQuenUITheme } from "../theme/types";

export interface ITabsTokens {
  radius: string;
  color: string;
  activeColor: string;
  disabledColor: string;
  hoverColor: string;
  hoverBorderColor: string;
}

export const generateTabsTokens = (theme: IQuenUITheme): ITabsTokens => ({
  radius: theme.components.Tabs?.radius ?? theme.control.radius,
  color: theme.components.Tabs?.color ?? theme.textColor,
  activeColor: theme.components.Tabs?.activeColor ?? theme.commonColorTokens.primaryBackground,
  disabledColor: theme.components.Tabs?.disabledColor ?? theme.commonColorTokens.disabledColor,
  hoverColor: theme.components.Tabs?.hoverColor ?? theme.colors.grayViolet[9],
  hoverBorderColor: theme.components.Tabs?.hoverBorderColor ?? theme.colors[theme.primaryColor][5]
});
