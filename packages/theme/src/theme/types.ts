import { TQuenUIColors } from "../colors/types";
import { IQuenUIThemeControl  } from "../types/control"
import { IQuenUIThemeSpace } from "../types/space";
import { IQuenUIFont } from "../types/fonts";

export interface IQuenUITheme {
  colors: TQuenUIColors;
  primaryColor: string;
  colorBody: string;
  textColor: string;
  fontFamily: string;
  control: IQuenUIThemeControl;
  space: IQuenUIThemeSpace;
  fonts: IQuenUIFont;
  components: Record<string, any>;
}
