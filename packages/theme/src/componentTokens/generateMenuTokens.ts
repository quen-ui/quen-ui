import { IQuenUITheme } from "../theme/types";

export interface IMenuTokens {
  color: string;
  disabledColor: string;
  hoverBackground: string;
  activeBackground: string;
}

export const generateMenuTokens = (theme: IQuenUITheme): IMenuTokens => ({
  color: theme.components.Menu?.color ?? theme.textColor,
  disabledColor: theme.components.Menu?.disabledColor ?? theme.commonColorTokens.disabledColor,
  hoverBackground: theme.components.Menu?.hoverColor ?? theme.commonColorTokens.hoverBackground,
  activeBackground: theme.components.Menu?.activeColor ?? theme.commonColorTokens.activeBackground,
});
