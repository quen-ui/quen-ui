import { IQuenUITheme } from "../theme/types";

export interface ILayoutTokens {
  /**  Background color of the header section */
  headerBackground: string;
  /** Color of icons displayed in the layout */
  iconColor: string;
  /** Border color used throughout the layout */
  borderColor: string;
  /** Background color of the sidebar section  */
  sidebarBackground: string;
}

export const generateLayoutTokens = (theme: IQuenUITheme): ILayoutTokens => ({
  headerBackground: theme.components.Layout?.backgroundHeader ?? theme.colors[theme.primaryColor][7],
  iconColor: theme.components.Layout?.iconColor ?? theme.colors.grayViolet[9],
  borderColor: theme.components.Layout?.borderColor ?? theme.commonColorTokens.borderColor,
  sidebarBackground: theme.components.Layout?.sidebarBackground ?? theme.colors.grayViolet[2]
});
