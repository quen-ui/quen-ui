import { IQuenUITheme } from "../theme/types";

export interface ICardTokens {
  /** Border radius of the card */
 radius: string;
 /** Border color of the card */
 borderColor: string;
 /** Shadow of the card */
 shadow: string;
}

export const generateCardTokens = (theme: IQuenUITheme): ICardTokens => ({
  radius: theme.components.Card?.radius ?? theme.control.radius,
  borderColor: theme.components.Card?.borderColor ?? theme.colors.grayViolet[5],
  shadow: theme.components.Card?.shadow ?? `0 2px 4px ${theme.colors.grayViolet[5]}`,
});
