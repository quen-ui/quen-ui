import { math } from "polished";
import { IQuenUITheme } from "../theme/types";

export interface IAvatarTokens {
  /** Border radius of the avatar shape */
  radius: string;
  /** Thickness of the avatar border */
  borderWidth: string;
  /** Border color when the avatar is in an “online” state */
  borderColorOnline: string;
  /** Default border color when the avatar is not in an “online” state. */
  borderColorDefault: string;
  /** Text and icon color inside the avatar */
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
