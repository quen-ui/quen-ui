import { IQuenUITheme } from "../theme/types";

export interface IDrawerTokens {
  /** Background color of the drawer panel */
  background: string;
  /** Background color of the overlay (the semi-transparent layer behind the drawer) */
  overlayBackground: string;
}

export const generateDrawerTokens = (theme: IQuenUITheme): IDrawerTokens => ({
  background: theme.components.Drawer?.background ?? theme.colors.grayViolet[2],
  overlayBackground:
    theme.components.Drawer?.overlayBackground ??
    theme.commonColorTokens.overlayBackground
});
