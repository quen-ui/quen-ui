import { IQuenUITheme } from "../theme/types";

export interface ILayoutTokens {
  headerBackground: string;
  iconColor: string;
  borderColor: string;
  sidebarBackground: string;
}

export const generateLayoutTokens = (theme: IQuenUITheme): ILayoutTokens => ({
  headerBackground: theme.components.Layout?.backgroundHeader ?? theme.colors[theme.primaryColor][7],
  iconColor: theme.components.Layout?.iconColor ?? theme.colors.grayViolet[9],
  borderColor: theme.components.Layout?.borderColor ?? theme.commonColorTokens.borderColor,
  sidebarBackground: theme.components.Layout?.sidebarBackground ?? theme.colors.grayViolet[2]
});
