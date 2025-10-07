import { IQuenUITheme } from "../theme/types";

export interface IBreadcrumbsTokens {
  color: string;
  primaryColor: string;
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
