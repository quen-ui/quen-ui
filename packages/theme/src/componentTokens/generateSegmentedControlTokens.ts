import { IQuenUITheme } from "../theme/types";

export interface ISegmentedControlTokens {
  backgroundColor: string;
  activeBackgroundColor: string;
  textColor: string;
  activeTextColor: string;
  disabledTextColor: string;
  borderRadius: string;
  boxShadow: string;
}

export const generateSegmentedControlTokens = (
  theme: IQuenUITheme
): ISegmentedControlTokens => ({
  backgroundColor:
    theme.components.SegmentedControl?.backgroundColor ??
    theme.colors["grayViolet"][7],
  activeBackgroundColor:
    theme.components.SegmentedControl?.activeBackgroundColor ??
    theme.colors["grayViolet"][9],
  textColor: theme.components.SegmentedControl?.textColor ?? theme.textColor,
  activeTextColor:
    theme.components.SegmentedControl?.activeTextColor ?? theme.textColor,
  disabledTextColor:
    theme.components.SegmentedControl?.disabledTextColor ?? theme.colors['grayViolet'][1],
  borderRadius:
    theme.components.SegmentedControl?.borderRadius ?? theme.control.radius,
  boxShadow:
    theme.components.SegmentedControl?.boxShadow ??
    "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)"
});
