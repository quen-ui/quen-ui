import { IQuenUITheme } from "../theme/types";

export interface ICardTokens {
 radius: string;
 borderColor: string;
}

export const generateCardTokens = (theme: IQuenUITheme): ICardTokens => ({
  radius: theme.components.Card?.radius ?? theme.control.radius,
  borderColor: theme.components.Card?.borderColor ?? theme.colors.grayViolet[5],
});
