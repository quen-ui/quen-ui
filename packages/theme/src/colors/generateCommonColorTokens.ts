import { rgba } from "polished";
import type { IQuenUITheme } from "../theme/types";
import type { IQuenUICommonTokensColor } from "./types";

export const generateCommonColorTokens = (theme: IQuenUITheme): IQuenUICommonTokensColor => ({
  successColor: theme.commonColorTokens?.successColor ?? theme.colors.green[9],
  successBackground: theme.commonColorTokens?.successBackground ?? theme.colors.green[7],
  secondaryColor: theme.commonColorTokens?.secondaryColor ?? theme.colors.grayViolet[9],
  secondaryBackground: theme.commonColorTokens?.secondaryBackground ?? theme.colors.gray[5],
  warningColor: theme.commonColorTokens?.warningColor ?? theme.colors.orange[9],
  warningBackground: theme.commonColorTokens?.warningBackground ?? theme.colors.orange[7],
  dangerColor: theme.commonColorTokens?.dangerColor ?? theme.colors.red[9],
  dangerBackground: theme.commonColorTokens?.dangerBackground ?? theme.colors.red[7],
  disabledColor: theme.commonColorTokens?.disabledColor ?? theme.colors.gray[4],
  disabledBackground: theme.commonColorTokens?.disabledBackground ?? theme.colors.gray[2],
  primaryBackground: theme.commonColorTokens?.primaryBackground ?? theme.colors[theme.primaryColor][9],
  borderColor: theme.commonColorTokens?.borderColor ?? theme.colors.grayViolet[9],
  overlayBackground: rgba(theme.colors.grayViolet[5], 0.7),
  hoverBackground: theme.colors.grayViolet[5],
  activeBackground: theme.colors[theme.primaryColor][5],
});
