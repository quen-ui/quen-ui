import { IQuenUITheme } from "../theme/types";

export interface IMessageTokens {
  /** Border radius of the tag */
  radius: string;
  /** Border color of the tag */
  borderColor: string;
  /** Padding applied inside the message */
  padding: string;
  /** Background color of the message */
  background: string;
  /** Color of the success icon inside the message */
  iconSuccessColor: string;
  /** Color of the warning icon inside the message */
  iconWarningColor: string;
  /** Color of the error icon inside the message */
  iconErrorColor: string;
  /** Color of the info icon inside the message */
  iconInfoColor: string;
}

export const generateMessageTokens = (theme: IQuenUITheme): IMessageTokens => ({
  radius: theme.components.Message?.radius ?? theme.control.radius,
  borderColor: theme.components.Message?.borderColor ?? theme.commonColorTokens.borderColor,
  padding: theme.components.Message?.padding ?? "0.5rem 1rem",
  background: theme.components.Message?.background ?? theme.commonColorTokens.overlayBackground,
  iconSuccessColor: theme.components.Message?.iconSuccessColor ?? theme.commonColorTokens.successColor,
  iconWarningColor: theme.components.Message?.iconWarningColor ?? theme.commonColorTokens.warningColor,
  iconErrorColor: theme.components.Message?.iconErrorColor ?? theme.commonColorTokens.dangerColor,
  iconInfoColor: theme.components.Message?.iconInfoColor ?? theme.commonColorTokens.primaryBackground
});
