import { IQuenUITheme } from "../theme/types";

export interface IInputTokens {
  errorColor: string;
  disabledColor: string;
  disabledBackground: string;
  iconColor: string;
  borderColor: string;
  color: string;
}

export const generateInputTokens = (theme: IQuenUITheme): IInputTokens => ({
  errorColor:
    theme.components.Input?.errorColor ??
    theme.commonColorTokens.dangerColor,
  disabledBackground: theme.components.Input?.disabledBackground ?? theme.commonColorTokens.disabledBackground,
  disabledColor: theme.components.Input?.disabledColor ?? theme.commonColorTokens.disabledColor,
  iconColor: theme.components.Input?.iconColor ?? theme.colors.gray[9],
  borderColor: theme.components.Input?.borderColor ?? theme.commonColorTokens.borderColor,
  color: theme.components.Input?.color ?? theme.textColor,
});
