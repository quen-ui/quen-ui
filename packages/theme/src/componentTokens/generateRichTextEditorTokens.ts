import type { IQuenUITheme } from "../theme/types";

export interface IRichTextEditorTokens {
  /** Container corner radius */
  radius: string;
  padding: string;
  borderColor: string;
  background: string;
}

export const generateRichTextEditorTokens = (
  theme: IQuenUITheme
): IRichTextEditorTokens => ({
  radius: theme.components.RichTextEditor?.radius ?? theme.control.radius,
  padding: theme.components.RichTextEditor?.padding ?? "0.75rem",
  borderColor: theme.components.RichTextEditor?.borderColor ?? theme.commonColorTokens.borderColor,
  background: theme.components.RichTextEditor?.background ?? theme.colorBody
});
