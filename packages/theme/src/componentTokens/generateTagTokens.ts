import { IQuenUITheme } from "../theme/types";

export interface ITagTokens {
  radius: string;
  borderColor: string;
  disabledBackground: string;
  disabledColor: string;
  background: string;
}

export const generateTagTokens = (theme: IQuenUITheme): ITagTokens => ({
  radius: theme.components.Progress?.radius ?? theme.control.radius,
  borderColor: theme.components.Tag?.borderColor ?? theme.commonColorTokens.borderColor,
  disabledBackground: theme.components.Tag?.disabledBackground ?? theme.commonColorTokens.disabledBackground,
  disabledColor: theme.components.Tag?.disabledColor ?? theme.commonColorTokens.disabledColor,
  background: theme.components.Tag?.background ?? theme.colors.grayViolet[4],
});
