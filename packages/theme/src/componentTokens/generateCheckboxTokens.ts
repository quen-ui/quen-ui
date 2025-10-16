import { IQuenUITheme } from "../theme/types";

export interface ICheckboxTokens {
  /** Background color for the filled (checked) checkbox state */
  backgroundFilled: string;
  /** Background color for the disabled checkbox state */
  disabledBackground: string;
  /** Text and icon color used for error messages or states */
  errorColor: string;
  /** Border color applied when the checkbox is in an error state */
  borderErrorColor: string;
  /** Border color for the disabled checkbox */
  borderDisabledColor: string;
  /** Color of the checkmark icon in the checked state */
  checkColor: string;
  /** Default border color of the checkbox */
  borderColor: string;
  /** Color of the checkmark when the checkbox is disabled */
  disabledCheckColor: string;
  /** Border radius of the checkbox element */
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
