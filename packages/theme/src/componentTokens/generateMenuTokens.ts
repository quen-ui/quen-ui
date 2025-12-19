import { IQuenUITheme } from "../theme/types";

export interface IMenuTokens {
  /**  Default text color for menu items */
  color: string;
  /** Text color for disabled menu items */
  disabledColor: string;
  /** Background color for menu items when hovered */
  hoverBackground: string;
  /** Background color for active or selected menu items */
  activeBackground: string;
}

export const generateMenuTokens = (theme: IQuenUITheme): IMenuTokens => ({
  color: theme.components.Menu?.color ?? theme.textColor,
  disabledColor: theme.components.Menu?.disabledColor ?? theme.commonColorTokens.disabledColor,
  hoverBackground: theme.components.Menu?.hoverColor ?? theme.commonColorTokens.hoverBackground,
  activeBackground: theme.components.Menu?.activeBackground ?? theme.commonColorTokens.activeBackground,
});
