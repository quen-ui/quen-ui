import { IQuenUITheme } from "../theme/types";

export interface IModalTokens {
  /** Background color of the overlay layer behind the modal */
  overlayBackground: string;
  /** Background color of the modal content area */
  backgroundColor: string;
}

export const generateModalTokens = (theme: IQuenUITheme): IModalTokens => ({
  overlayBackground: theme.components.Modal?.overlayBackground ?? theme.commonColorTokens.overlayBackground,
  backgroundColor: theme.components.Modal?.backgroundColor ?? theme.colors.grayViolet[2],
});
