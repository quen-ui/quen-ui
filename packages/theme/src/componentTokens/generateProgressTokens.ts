import { IQuenUITheme } from "../theme/types";

export interface IProgressTokens {
  /** The border radius of the progress bar */
  radius: string;
}

export const generateProgressTokens = (theme: IQuenUITheme): IProgressTokens => ({
  radius: theme.components.Progress?.radius ?? theme.control.radius
});
