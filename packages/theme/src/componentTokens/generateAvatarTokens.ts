import { math } from "polished";
import { IQuenUITheme } from "../theme/types";

export interface IAvatarTokens {
  radius: string;
  borderWidth: string;
  borderColorOnline: string;
  borderColorDefault: string;
  color: string;
}

export const generateAvatarTokens = (theme: IQuenUITheme): IAvatarTokens => ({
  radius:
    theme.components.Avatar?.radius ?? math(`${theme.control.radius} * 4`),
  borderWidth:
    theme.components.Avatar?.borderWidth ??
    math(`${theme.control.borderWidth} * 2`),
  borderColorOnline:
    theme.components.Avatar?.borderColorOnline ?? theme.colors.green[5],
  borderColorDefault:
    theme.components.Avatar?.borderColorDefault ?? theme.colors.grayViolet[5],
  color: theme.components.Avatar?.color ?? theme.textColor
});
