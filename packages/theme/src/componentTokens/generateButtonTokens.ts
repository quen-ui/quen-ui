import { IQuenUITheme } from "../theme/types";

export interface IButtonTokens {
  disabledBackground: string;
  disabledColor: string;
  radius: string;
  color: string;
  secondaryBackground: string;
  dangerBackground: string;
  successBackground: string;
  warningBackground: string;
  ghostColor: string;
}

export const generateButtonTokens = (theme: IQuenUITheme): IButtonTokens => ({
  disabledColor:
    theme.components.Button?.disabledColor ??
    theme.commonColorTokens.disabledColor,
  disabledBackground:
    theme.components.Button?.disabledBackground ??
    theme.commonColorTokens.disabledBackground,
  radius: theme.components.Button?.radius ?? theme.control.radius,
  color: theme.components.Button?.color ?? "white",
  secondaryBackground:
    theme.components.Button?.secondaryBackground ??
    theme.commonColorTokens.secondaryBackground,
  dangerBackground:
    theme.components.Button?.dangerBackground ??
    theme.commonColorTokens.dangerBackground,
  successBackground:
    theme.components.Button?.successBackground ??
    theme.commonColorTokens.successBackground,
  warningBackground:
    theme.components.Button?.warningBackground ??
    theme.commonColorTokens.warningBackground,
  ghostColor: theme.components.Button?.ghostColor ?? theme.textColor
});
