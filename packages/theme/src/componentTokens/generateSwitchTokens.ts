import { IQuenUITheme } from "../theme/types";

export interface ISwitchTokens {
  radius: string;
  background: string;
  borderColor: string;
  checkedBackground: string;
  disabledColor: string;
  disabledBackground: string;
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
