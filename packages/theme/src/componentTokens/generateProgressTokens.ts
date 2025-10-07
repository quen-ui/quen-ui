import { IQuenUITheme } from "../theme/types";

export interface IProgressTokens {
  radius: string;
}

export const generateProgressTokens = (theme: IQuenUITheme): IProgressTokens => ({
  radius: theme.components.Progress?.radius ?? theme.control.radius
});
