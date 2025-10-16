import { IQuenUITheme } from "../theme/types";

export interface IPaginationTokens {
  /** The text color of pagination items */
  color: string;
  /** The border color of pagination items */
  borderColor: string;
  /** The border radius of pagination items */
  radius: string;
  /** The background color for the active pagination item */
  activeBackground: string;
  /** The default background color for pagination items */
  background: string;
  /** The background color when hovering over a pagination item */
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
