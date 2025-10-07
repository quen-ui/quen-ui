import { IQuenUITheme } from "../theme/types";

export interface IPaginationTokens {
  color: string;
  borderColor: string;
  radius: string;
  activeBackground: string;
  background: string;
  hoverBackground: string;
}

export const generatePaginationTokens = (theme: IQuenUITheme): IPaginationTokens => ({
  color: theme.components.Pagination?.color ?? theme.textColor,
  borderColor: theme.components.Pagination?.borderColor ?? theme.commonColorTokens.borderColor,
  radius: theme.components.Pagination?.radius ?? theme.control.radius,
  activeBackground: theme.components.Pagination?.activeBackground ?? theme.commonColorTokens.activeBackground,
  background: theme.components.Pagination?.background ?? theme.colors.grayViolet[3],
  hoverBackground: theme.components.Pagination?.hoverBackground ?? theme.commonColorTokens.hoverBackground
});
