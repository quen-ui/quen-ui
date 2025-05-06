import { IQuenUITheme } from "./types";
import { QUEN_UI_LIGHT_COLORS } from "../colors"
import { QUENUI_DEFAULT_CONTROL } from "../constants/control";
import { QUENUI_DEFAULT_SPACE } from "../constants/space";
import { QUENUI_DEFAULT_FONT } from "../constants/font";

const DEFAULT_FONT_FAMILY =
  '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji';

export const QuenUILightTheme: IQuenUITheme = {
  colors: QUEN_UI_LIGHT_COLORS,
  primaryColor: QUEN_UI_LIGHT_COLORS.violet["9"],
  textColor: QUEN_UI_LIGHT_COLORS.gray["9"],
  fontFamily: DEFAULT_FONT_FAMILY,
  control: QUENUI_DEFAULT_CONTROL,
  space: QUENUI_DEFAULT_SPACE,
  fonts: QUENUI_DEFAULT_FONT,
  components: {}
}
