import { IQuenUITheme } from "../theme/types";

export interface IRadioButtonTokens {
  radius: string;
  borderColor: string;
  disabledBackground: string;
  checkedBorderColor: string;
  disabledCheckedBorderColor: string;
  checkedBackground: string;
  hoverBorderColor: string;
  errorColor: string;
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
