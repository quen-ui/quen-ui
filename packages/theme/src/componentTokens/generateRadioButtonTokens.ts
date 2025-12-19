import { IQuenUITheme } from "../theme/types";

export interface IRadioButtonTokens {
  /** The border radius of the radio button */
  radius: string;
  /** The default border color of the radio button */
  borderColor: string;
  /** Background color when the radio button is disabled */
  disabledBackground: string;
  /** Border color when the radio button is checked */
  checkedBorderColor: string;
  /** Border color when the radio button is checked and disabled */
  disabledCheckedBorderColor: string;
  /** Background color when the radio button is checked */
  checkedBackground: string;
  /** Border color when hovering over the radio button */
  hoverBorderColor: string;
  /** Color representing an error state */
  errorColor: string;
  /** Border color representing an error state */
  borderErrorColor: string
}

export const generateRadioButtonTokens = (theme: IQuenUITheme): IRadioButtonTokens => ({
  radius: theme.components.Progress?.radius ?? theme.control.radius,
  borderColor: theme.components.RadioButton?.borderColor ?? theme.commonColorTokens.borderColor,
  disabledBackground: theme.components.RadioButton?.disabledBackground ?? theme.commonColorTokens.disabledBackground,
  checkedBorderColor: theme.components.RadioButton?.checkedBorderColor ?? theme.commonColorTokens.primaryBackground,
  disabledCheckedBorderColor: theme.components.RadioButton?.disabledCheckedBorderColor ?? theme.colors[theme.primaryColor][5],
  checkedBackground: theme.components.RadioButton?.checkedBackground ?? theme.colors.grayViolet[4],
  hoverBorderColor: theme.components.RadioButton?.hoverBorderColor ?? theme.commonColorTokens.hoverBackground,
  errorColor:
    theme.components.RadioButton?.errorColor ??
    theme.commonColorTokens.dangerColor,
  borderErrorColor:
    theme.components.RadioButton?.borderErrorColor ??
    theme.commonColorTokens.dangerBackground,
});
