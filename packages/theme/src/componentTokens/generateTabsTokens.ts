import { IQuenUITheme } from "../theme/types";

export interface ITabsTokens {
  /** Border radius of the tab item */
  radius: string;
  /** Default text color of tabs */
  color: string;
  /** Text color of the active tab */
  activeColor: string;
  /** Text color of disabled tabs */
  disabledColor: string;
  /** Text color when hovering over a tab */
  hoverColor: string;
  /** Border color when hovering over a tab */
  hoverBorderColor: string;

  borderColor: string;

  borderWidth: string;
}

export const generateTabsTokens = (theme: IQuenUITheme): ITabsTokens => ({
  radius: theme.components.Tabs?.radius ?? theme.control.radius,
  color: theme.components.Tabs?.color ?? theme.textColor,
  activeColor: theme.components.Tabs?.activeColor ?? theme.commonColorTokens.primaryBackground,
  disabledColor: theme.components.Tabs?.disabledColor ?? theme.commonColorTokens.disabledColor,
  hoverColor: theme.components.Tabs?.hoverColor ?? theme.colors.grayViolet[9],
  hoverBorderColor: theme.components.Tabs?.hoverBorderColor ?? theme.colors[theme.primaryColor][5],
  borderColor: theme.components.Tabs?.borderColor ?? theme.commonColorTokens.borderColor,
  borderWidth: theme.components.Tabs?.borderWidth ?? theme.control.borderWidth,
});
