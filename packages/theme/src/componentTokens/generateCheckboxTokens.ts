import { IQuenUITheme } from "../theme/types";

export interface ICheckboxTokens {
  backgroundFilled: string;
  disabledBackground: string;
  errorColor: string;
  borderErrorColor: string;
  borderDisabledColor: string;
  checkColor: string;
  borderColor: string;
  disabledCheckColor: string;
  radius: string;
}

export const generateCheckboxTokens = (
  theme: IQuenUITheme
): ICheckboxTokens => ({
  backgroundFilled:
    theme.components.Checkbox?.backgroundFilled ??
    theme.colors[theme.primaryColor][9],
  disabledBackground:
    theme.components.Checkbox?.disabledBackground ??
    theme.commonColorTokens.disabledBackground,
  errorColor:
    theme.components.Checkbox?.errorColor ??
    theme.commonColorTokens.dangerColor,
  borderErrorColor:
    theme.components.Checkbox?.borderErrorColor ??
    theme.commonColorTokens.dangerBackground,
  borderDisabledColor:
    theme.components.Checkbox?.borderDisabledColor ??
    theme.colors[theme.primaryColor][3],
  checkColor:
    theme.components.Checkbox?.checkColor ?? theme.colors.grayViolet[9],
  borderColor:
    theme.components.Checkbox?.borderColor ?? theme.colors.grayViolet[7],
  disabledCheckColor:
    theme.components.Checkbox?.disabledCheckColor ??
    theme.commonColorTokens.disabledColor,
  radius: theme.components.Checkbox?.radius ?? theme.control.radius
});
