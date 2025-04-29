import { IQuenUITheme } from "../types/theme";
import { lightColors, darkColors } from "./colors";
import { Font } from "../typorgaphy/fontSize.ts";
import { SpaceDefault } from "./space.ts";
import { ControlDefault } from "./control"

export const LightTheme: IQuenUITheme = {
  colors: lightColors,
  name: "light",
  fonts: Font,
  space: SpaceDefault,
  control: ControlDefault,
};

export const DarkTheme: IQuenUITheme = {
  colors: darkColors,
  name: "dark",
  fonts: Font,
  space: SpaceDefault,
  control: ControlDefault,
};
