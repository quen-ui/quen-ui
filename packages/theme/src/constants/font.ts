import { rem } from "polished";
import { IQuenUIFont } from "../types/fonts";

export const QUENUI_DEFAULT_FONT: IQuenUIFont = {
  header: {
    size: {
      "2xl": rem(56),
      xl: rem(40),
      l: rem(32),
      m: rem(28),
      s: rem(24),
      xs: rem(16)
    },
    lineHeight: {
      "2xl": rem(64),
      xl: rem(48),
      l: rem(40),
      m: rem(32),
      s: rem(24),
      xs: rem(16)
    },
    weight: 700
  },
  text: {
    size: {
      xl: rem(24),
      l: rem(20),
      m: rem(16),
      s: rem(14),
      xs: rem(12)
    },
    lineHeight: {
      xl: rem(32),
      l: rem(28),
      m: rem(24),
      s: rem(20),
      xs: rem(16)
    },
    weight: 400
  }
};
