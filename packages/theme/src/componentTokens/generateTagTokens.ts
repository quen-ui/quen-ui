import { IQuenUITheme } from "../theme/types";

export interface ITagTokens {
  /** Border radius of the tag */
  radius: string;
  /** Border color of the tag */
  borderColor: string;
  /** Background color when the tag is disabled */
  disabledBackground: string;
  /** Text color when the tag is disabled */
  disabledColor: string;
  /** Default background color of the tag */
  background: string;
}

export const generateTagTokens = (theme: IQuenUITheme): ITagTokens => ({
  radius: theme.components.Progress?.radius ?? theme.control.radius,
  borderColor: theme.components.Tag?.borderColor ?? theme.commonColorTokens.borderColor,
  disabledBackground: theme.components.Tag?.disabledBackground ?? theme.commonColorTokens.disabledBackground,
  disabledColor: theme.components.Tag?.disabledColor ?? theme.commonColorTokens.disabledColor,
  background: theme.components.Tag?.background ?? theme.colors.grayViolet[4],
});
