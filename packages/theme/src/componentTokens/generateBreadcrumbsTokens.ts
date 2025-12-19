import { IQuenUITheme } from "../theme/types";

export interface IBreadcrumbsTokens {
  /** Default text color for breadcrumb items */
  color: string;
  /** Color for the active or last breadcrumb item */
  primaryColor: string;
  /** Text color when hovering over a breadcrumb item */
  hoverColor: string;
}

export const generateBreadcrumbsTokens = (
  theme: IQuenUITheme
): IBreadcrumbsTokens => ({
  color: theme.components.Breadcrumbs?.color ?? theme.textColor,
  primaryColor:
    theme.components.Breadcrumbs?.primaryColor ??
    theme.colors[theme.primaryColor][9],
  hoverColor:
    theme.components.Breadcrumbs?.hoverColor ?? theme.colors.grayViolet[6]
});
