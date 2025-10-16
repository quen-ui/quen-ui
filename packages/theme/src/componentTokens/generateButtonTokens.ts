import { IQuenUITheme } from "../theme/types";

export interface IButtonTokens {
  /** Background color for disabled buttons */
  disabledBackground: string;
  /** Text color for disabled buttons */
  disabledColor: string;
  /** Border radius for all buttons */
  radius: string;
  /** Default text color for button content */
  color: string;
  /** Background color for secondary buttons */
  secondaryBackground: string;
  /** Background color for danger (error) buttons */
  dangerBackground: string;
  /** Background color for success buttons */
  successBackground: string;
  /** Background color for warning buttons */
  warningBackground: string;
  /** Text color for ghost (transparent) button variant */
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
