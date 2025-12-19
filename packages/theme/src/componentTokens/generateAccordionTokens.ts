import { IQuenUITheme } from "../theme/types";

export interface IAccordionTokens {
  /** Container corner radius */
  radius: string;
  disabledColor: string;
  borderColor: string;
  padding: {
    xs: string;
    s: string;
    m: string;
    l: string;
  }
  hoverHeaderBackground: string;
}

export const generateAccordionTokens = (theme: IQuenUITheme): IAccordionTokens => ({
  radius: theme.components.Accordion?.radius ?? theme.control.radius,
  disabledColor: theme.components.Accordion?.colorDisabled ?? theme.commonColorTokens.disabledColor,
  borderColor: theme.components.Accordion?.borderColor ?? theme.commonColorTokens.borderColor,
  padding: theme.components.Accordion?.paddingHeader ?? theme.space,
  hoverHeaderBackground: theme.components.Accordion?.hoverHeaderBackground ?? theme.commonColorTokens.hoverBackground
});
