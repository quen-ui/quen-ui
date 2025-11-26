import { IQuenUITheme } from "../theme/types";

export interface ISliderTokens {
  /** Container corner radius */
  radius: string;

  /** Background track */
  trackBackgroundColor: string;
  /** Background track of disabled state */
  trackDisabledBackgroundColor: string;
  /** Background progress of disabled state */
  progressDisabledBackgroundColor: string;

  /** Height slider */
  height: number;
  /** Mark color */
  markColor: string;
}

export const generateSliderTokens = (theme: IQuenUITheme): ISliderTokens => ({
  radius: theme.components.Slider?.radius ?? theme.control.radius,
  trackBackgroundColor:
    theme.components.Slider?.trackBackground ?? theme.colors.grayViolet[5],
  trackDisabledBackgroundColor:
    theme.components.Slider?.trackDisabledBackgroundColor ??
    theme.commonColorTokens.disabledBackground,
  progressDisabledBackgroundColor:
    theme.components.Slider?.progressDisabledBackgroundColor ??
    theme.commonColorTokens.disabledColor,
  height: theme.components.Slider?.height ?? "0.375rem",
  markColor: theme.components.Slider?.markColor ?? theme.colors.grayViolet[9]
});
