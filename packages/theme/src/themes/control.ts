import type { IThemeControl } from "../types/control";
import { SpaceDefault } from "./space";

export const ControlDefault: IThemeControl = {
  radius: "0.25rem",
  borderWidth: "0.0625rem",
  height: {
    l: SpaceDefault["4xl"],
    m: SpaceDefault["3xl"],
    s: SpaceDefault["2xl"],
    xs: SpaceDefault.l,
    "2xs": SpaceDefault.m,
  },
  boxSize: {
    l: SpaceDefault.l,
    m: SpaceDefault.m,
    s: SpaceDefault.s,
    xs: SpaceDefault.xs
  },
  space: {
    l: SpaceDefault.xl,
    m: SpaceDefault.l,
    s: SpaceDefault.m,
    xs: SpaceDefault.s,
  }

}
