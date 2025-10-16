import { IQuenUITheme } from "../theme/types";

export interface ILoaderTokens {
  /** The primary color used for the loader animation or indicator */
  color: string;
}

export const generateLoaderTokens = (theme: IQuenUITheme): ILoaderTokens => ({
  color: theme.components.Loader?.color ?? theme.colors[theme.primaryColor][5]
});
