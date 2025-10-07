import { IQuenUITheme } from "../theme/types";

export interface IDrawerTokens {
  background: string;
  overlayBackground: string;
}

export const generateDrawerTokens = (theme: IQuenUITheme): IDrawerTokens => ({
  background: theme.components.Drawer?.background ?? theme.colors.grayViolet[2],
  overlayBackground:
    theme.components.Drawer?.overlayBackground ??
    theme.commonColorTokens.overlayBackground
});
