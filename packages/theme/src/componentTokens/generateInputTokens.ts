import { IQuenUITheme } from "../theme/types";

export interface IInputTokens {
  /** Color used to indicate an error state */
  errorColor: string;
  /** Text color used when the input is disabled */
  disabledColor: string;
  /** Background color used when the input is disabled */
  disabledBackground: string;
  /** Color of icons displayed inside the input */
  iconColor: string;
  /** Default border color of the input */
  borderColor: string;
  /** Default text color inside the input  */
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
