import { IQuenUITheme } from "../theme/types";

export interface IDropdownTokens {
  background: string;
  radius: string;
  borderColor: string;
  disabledBackground: string;
  disabledColor: string;
  borderLeftColor: string;
  hoverBackground: string;
}

export const generateDropdownTokens = (theme: IQuenUITheme): IDropdownTokens => ({
  radius: theme.components.Dropdown?.radius ?? theme.control.radius,
  background: theme.components.Dropdown?.background ?? theme.colors.grayViolet[3],
  borderColor: theme.components.Dropdown?.borderColor ?? theme.commonColorTokens.borderColor,
  disabledBackground: theme.components.Dropdown?.disabledBackground ?? theme.commonColorTokens.disabledBackground,
  disabledColor: theme.components.Dropdown?.disabledColor ?? theme.commonColorTokens.disabledColor,
  borderLeftColor: theme.components.Dropdown?.borderLeftColor ?? theme.commonColorTokens.primaryBackground,
  hoverBackground: theme.components.Dropdown?.hoverBackground ?? theme.colors.grayViolet[5]
});
