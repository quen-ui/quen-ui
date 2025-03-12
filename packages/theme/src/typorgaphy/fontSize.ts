import { IFont } from "../types/fonts";

export const Font: IFont = {
  header: {
    fontSize: {
      "2xl": "3.5rem", // 56px
      xl: "2.5rem", //40px
      l: "2rem", // 32px
      m: "1.75rem", //28px
      s: "1.5rem", //24px
      xs: "1rem" // 16px
    },
    lineHeight: {
      "2xl": "4rem", // 64px
      xl: "3rem", // 48px
      l: "2.5rem", // 40px
      m: "2rem", // 32px
      s: "1.5rem", // 24px
      xs: "1rem" //16px
    },
    fontWeight: 700
  },
  control: {
    fontSize: {
      xl: "1.5rem", // 24px
      l: "1.25rem", // 20px
      m: "1rem", //16px
      s: "0.875rem", //14px
      xs: "0.75rem" //12px
    },
    lineHeight: {
      xl: "1.5rem", // 24px
      l: "1.375rem", //22 px
      m: "1.25rem", //20px
      s: "1rem", // 16px
      xs: "0.75rem" //12px
    },
    fontWeight: 500
  },
  text: {
    fontSize: {
      xl: "1.5rem", // 24px
      l: "1.25rem", // 20px
      m: "1rem", // 16px
      s: "0.875rem", // 14px
      xs: "0.75rem" // 12px
    },
    lineHeight: {
      xl: "2rem", // 32px
      l: "1.75rem", // 28px
      m: "1.5rem", //24px
      s: "1.25rem", //20px
      xs: "1rem" //16px
    },
    fontWeight: 400
  }
}
