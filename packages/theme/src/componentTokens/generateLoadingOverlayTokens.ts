import { IQuenUITheme } from "../theme/types";

export interface ILoadingOverlayTokens {
  /** Background color of the overlay */
  background: string;
  /** Blur style of the overlay */
  blur: string;
}

export const generateLoadingOverlayTokens = (
  theme: IQuenUITheme
): ILoadingOverlayTokens => ({
  background:
    theme.components.LoadingOverlay?.background ??
    theme.commonColorTokens.overlayBackground,
  blur: theme.components.LoadingOverlay?.blur ?? "blur(2px)"
});
