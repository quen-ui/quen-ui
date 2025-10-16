import { IQuenUITheme } from "../theme/types";

export interface IBadgeTokens {
  /** Background color for success badges */
  successBackground: string;
  /** Background color for warning badges */
  warningBackground: string;
  /** Background color for danger badges */
  dangerBackground: string;
  /** Background color for secondary badges */
  secondaryBackground: string;
  /** Background color for disabled badges */
  disabledBackground: string;
  /** Background color for primary badges */
  primaryBackground: string;
  /** Border radius applied to all badges */
  radius: string;
  /** Text color for disabled badges */
  disabledColor: string;
}

export const generateBadgeTokens = (theme: IQuenUITheme): IBadgeTokens => ({
  successBackground:
    theme.components.Badge?.successBackground ??
    theme.commonColorTokens.successColor,
  warningBackground:
    theme.components.Badge?.warningBackground ??
    theme.commonColorTokens.warningColor,
  dangerBackground:
    theme.components.Badge?.dangerBackground ??
    theme.commonColorTokens.dangerColor,
  secondaryBackground:
    theme.components.Badge?.secondaryBackground ??
    theme.commonColorTokens.secondaryColor,
  disabledBackground:
    theme.components.Badge?.disabledBackground ??
    theme.commonColorTokens.disabledColor,
  primaryBackground:
    theme.components.Badge?.primaryBackground ??
    theme.colors[theme.primaryColor][9],
  radius: theme.components.Badge?.radius ?? theme.control.radius,
  disabledColor:
    theme.components.Badge?.disabledColor ??
    theme.commonColorTokens.disabledColor
});
