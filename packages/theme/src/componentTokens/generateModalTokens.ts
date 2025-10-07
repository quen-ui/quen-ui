import { IQuenUITheme } from "../theme/types";

export interface IModalTokens {
  overlayBackground: string;
  backgroundColor: string;
}

export const generateModalTokens = (theme: IQuenUITheme): IModalTokens => ({
  overlayBackground: theme.components.Modal?.overlayBackground ?? theme.commonColorTokens.overlayBackground,
  backgroundColor: theme.components.Modal?.backgroundColor ?? theme.colors.grayViolet[2],
});
