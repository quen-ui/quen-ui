import { IQuenUITheme } from "../theme/types";

export interface ISwitchTokens {
  /** The border radius of the switch */
  radius: string;
  /** The default background color of the switch */
  background: string;
  /** The border color of the switch */
  borderColor: string;
  /** Background color when the switch is checked */
  checkedBackground: string;
  /** Color used when the switch is disabled */
  disabledColor: string;
  /** Background color used when the switch is disabled */
  disabledBackground: string;
  /** Background color of the switch before being toggled */
  backgroundBefore: string;
}

export const generateSwitchTokens = (theme: IQuenUITheme): ISwitchTokens => ({
  radius: theme.components.Switch?.radius ?? theme.control.radius,
  background: theme.components.Switch?.background ?? theme.commonColorTokens.secondaryBackground,
  borderColor: theme.components.Switch?.borderColor ?? theme.commonColorTokens.borderColor,
  checkedBackground: theme.components.Switch?.checkedBackground ?? theme.commonColorTokens.primaryBackground,
  disabledColor: theme.components.Switch?.disabledColor ?? theme.commonColorTokens.disabledColor,
  disabledBackground: theme.components.Switch?.disabledBackground ?? theme.commonColorTokens.disabledBackground,
  backgroundBefore: theme.components.Switch?.backgroundBefore ?? theme.colors.grayViolet[9]
});
