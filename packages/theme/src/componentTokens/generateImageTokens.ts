import { IQuenUITheme } from "../theme/types";

export interface IImageTokens {
  /** Background color of the image overlay */
  overlayBackground: string;
  /** Text or icon color displayed over the image */
  color: string;
}

export const generateImageTokens = (theme: IQuenUITheme): IImageTokens => ({
  overlayBackground:
    theme.components.Image?.overlayBackground ??
    theme.commonColorTokens.overlayBackground,
  color: theme.components.Image?.color ?? "white"
});
