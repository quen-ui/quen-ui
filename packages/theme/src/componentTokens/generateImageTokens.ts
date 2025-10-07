import { IQuenUITheme } from "../theme/types";

export interface IImageTokens {
  overlayBackground: string;
  color: string;
}

export const generateImageTokens = (theme: IQuenUITheme): IImageTokens => ({
  overlayBackground:
    theme.components.Image?.overlayBackground ??
    theme.commonColorTokens.overlayBackground,
  color: theme.components.Image?.color ?? "white"
});
