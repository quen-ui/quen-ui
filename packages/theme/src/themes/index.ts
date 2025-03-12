import { ITheme } from "../types/theme";
import { lightColors, darkColors } from "./colors";
import { Font } from "../typorgaphy/fontSize.ts";

export const LightTheme: ITheme = {
  colors: lightColors,
  name: "light",
  fonts: Font
};

export const DarkTheme: ITheme = {
  colors: darkColors,
  name: "dark",
  fonts: Font
};
