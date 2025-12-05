import type { IQuenUITheme } from "../theme/types";
import type { IQuenUIThemeSpace } from "../types/space";

export interface IColorPickerTokens {
  /** Container corner radius */
  radius: string;
  padding: IQuenUIThemeSpace;
  borderColor: string;
  background: string;
}

export const generateColorPickerTokens = (
  theme: IQuenUITheme
): IColorPickerTokens => ({
  radius: theme.components.ColorPicker?.radius ?? theme.control.radius,
  padding: theme.components.ColorPicker?.padding ?? {
    l: "1rem",
    m: "0.75rem",
    s: "0.625rem",
    xs: "0.5rem"
  },
  borderColor: theme.components.ColorPicker?.borderColor ?? theme.commonColorTokens.borderColor,
  background: theme.components.ColorPicker?.background ?? theme.colorBody
});
