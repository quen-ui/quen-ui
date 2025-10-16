import { IQuenUITheme } from "../theme/types";

export interface IDropdownTokens {
  /** Background color of the dropdown panel */
  background: string;
  /**  Border radius applied to the dropdown panel corners */
  radius: string;
  /** Border color of the dropdown container */
  borderColor: string;
  /** Background color of a disabled dropdown item */
  disabledBackground: string;
  /** Text color of a disabled dropdown item */
  disabledColor: string;
  /** eft border color that appears on hover for active dropdown items */
  borderLeftColor: string;
  /** Background color of a dropdown item when hovered */
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
