import { IQuenUITheme } from "../theme/types";

export interface ICardTokens {
  /** Border radius of the card */
 radius: string;
 /** Border color of the card */
 borderColor: string;
}

export const generateCardTokens = (theme: IQuenUITheme): ICardTokens => ({
  radius: theme.components.Card?.radius ?? theme.control.radius,
  borderColor: theme.components.Card?.borderColor ?? theme.colors.grayViolet[5],
});
