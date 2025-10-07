import { IQuenUITheme } from "../theme/types";

export interface IBadgeTokens {
  successBackground: string;
  warningBackground: string;
  dangerBackground: string;
  secondaryBackground: string;
  disabledBackground: string;
  primaryBackground: string;
  radius: string;
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
