import { IQuenUITheme } from "../theme/types";

export interface IDividerTokens {
  radius: string;
  disabledBackground: string;
  dangerBackground: string;
  successBackground: string;
  warningBackground: string;
  primaryBackground: string;
}

export const generateDividerTokens = (theme: IQuenUITheme): IDividerTokens => ({
  radius:
    theme.components.Divider?.radius ?? theme.control.radius,
  disabledBackground: theme.components.Divider?.disabledBackground ?? theme.commonColorTokens.disabledBackground,
  dangerBackground: theme.components.Divider?.dangerBackground ?? theme.commonColorTokens.dangerBackground,
  successBackground: theme.components.Divider?.successBackground ?? theme.commonColorTokens.successBackground,
  warningBackground: theme.components.Divider?.warningBackground ?? theme.commonColorTokens.warningBackground,
  primaryBackground: theme.components.Divider?.primaryBackground ?? theme.commonColorTokens.primaryBackground
});
