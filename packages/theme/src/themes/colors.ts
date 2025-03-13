import { LightColors, DarkColors } from "../constants/colors";
import { IThemeColors } from "../types/theme";

export const lightColors: IThemeColors = {
  ...LightColors,
  backgroundPrimaryMain: LightColors.gray.gray1,
  text: {
    default: LightColors.gray.gray9,
    hover: LightColors.gray.gray5,
    pressed: LightColors.gray.gray4,
    disabled: LightColors.gray.gray2,
    secondary: LightColors.gray.gray6,
    colors: {
      violet: LightColors.violet.violet9,
      grayViolet: LightColors.grayViolet.grayViolet2,
      red: LightColors.red.red9,
      yellow: LightColors.yellow.yellow9,
      green: LightColors.green.green9,
      orange: LightColors.orange.orange9
    }
  },
  component: {
    primary: {
      default: {
        violet: LightColors.violet.violet9,
        grayViolet: LightColors.grayViolet.grayViolet9,
        red: LightColors.red.red9,
        yellow: LightColors.yellow.yellow9,
        green: LightColors.green.green9,
        orange: LightColors.orange.orange9,
        gray: LightColors.gray.gray9
      },
      hover: {
        violet: LightColors.violet.violet7,
        grayViolet: LightColors.grayViolet.grayViolet7,
        red: LightColors.red.red7,
        yellow: LightColors.yellow.yellow7,
        green: LightColors.green.green7,
        orange: LightColors.orange.orange7,
        gray: LightColors.gray.gray7
      },
      pressed: {
        violet: LightColors.violet.violet5,
        grayViolet: LightColors.grayViolet.grayViolet5,
        red: LightColors.red.red5,
        yellow: LightColors.yellow.yellow5,
        green: LightColors.green.green5,
        orange: LightColors.orange.orange5,
        gray: LightColors.gray.gray5
      },
      disabled: {
        violet: LightColors.violet.violet2,
        grayViolet: LightColors.grayViolet.grayViolet2,
        red: LightColors.red.red2,
        yellow: LightColors.yellow.yellow2,
        green: LightColors.green.green2,
        orange: LightColors.orange.orange2,
        gray: LightColors.gray.gray2
      }
    },
    secondary: {
      default: {
        violet: LightColors.violet.violet4,
        grayViolet: LightColors.grayViolet.grayViolet4,
        red: LightColors.red.red4,
        yellow: LightColors.yellow.yellow4,
        green: LightColors.green.green4,
        orange: LightColors.orange.orange4,
        gray: LightColors.gray.gray4
      },
      hover: {
        violet: LightColors.violet.violet5,
        grayViolet: LightColors.grayViolet.grayViolet5,
        red: LightColors.red.red5,
        yellow: LightColors.yellow.yellow5,
        green: LightColors.green.green5,
        orange: LightColors.orange.orange5,
        gray: LightColors.gray.gray5
      },
      pressed: {
        violet: LightColors.violet.violet6,
        grayViolet: LightColors.grayViolet.grayViolet6,
        red: LightColors.red.red6,
        yellow: LightColors.yellow.yellow6,
        green: LightColors.green.green6,
        orange: LightColors.orange.orange6,
        gray: LightColors.gray.gray6
      },
      disabled: {
        violet: LightColors.violet.violet2,
        grayViolet: LightColors.grayViolet.grayViolet2,
        red: LightColors.red.red2,
        yellow: LightColors.yellow.yellow2,
        green: LightColors.green.green2,
        orange: LightColors.orange.orange2,
        gray: LightColors.gray.gray2
      }
    }
  }
};

export const darkColors: IThemeColors = {
  ...DarkColors,
  backgroundPrimaryMain: DarkColors.gray.gray1,
  text: {
    default: DarkColors.gray.gray9,
    hover: DarkColors.gray.gray5,
    pressed: DarkColors.gray.gray4,
    disabled: DarkColors.gray.gray2,
    secondary: DarkColors.gray.gray6,
    colors: {
      violet: DarkColors.violet.violet9,
      grayViolet: DarkColors.grayViolet.grayViolet2,
      red: DarkColors.red.red9,
      yellow: DarkColors.yellow.yellow9,
      green: DarkColors.green.green9,
      orange: DarkColors.orange.orange9
    }
  },
  component: {
    primary: {
      default: {
        violet: DarkColors.violet.violet9,
        grayViolet: DarkColors.grayViolet.grayViolet9,
        red: DarkColors.red.red9,
        yellow: DarkColors.yellow.yellow9,
        green: DarkColors.green.green9,
        orange: DarkColors.orange.orange9,
        gray: DarkColors.gray.gray9
      },
      hover: {
        violet: DarkColors.violet.violet7,
        grayViolet: DarkColors.grayViolet.grayViolet7,
        red: DarkColors.red.red7,
        yellow: DarkColors.yellow.yellow7,
        green: DarkColors.green.green7,
        orange: DarkColors.orange.orange7,
        gray: DarkColors.gray.gray7
      },
      pressed: {
        violet: DarkColors.violet.violet5,
        grayViolet: DarkColors.grayViolet.grayViolet5,
        red: DarkColors.red.red5,
        yellow: DarkColors.yellow.yellow5,
        green: DarkColors.green.green5,
        orange: DarkColors.orange.orange5,
        gray: DarkColors.gray.gray5
      },
      disabled: {
        violet: DarkColors.violet.violet2,
        grayViolet: DarkColors.grayViolet.grayViolet2,
        red: DarkColors.red.red2,
        yellow: DarkColors.yellow.yellow2,
        green: DarkColors.green.green2,
        orange: DarkColors.orange.orange2,
        gray: DarkColors.gray.gray2
      }
    },
    secondary: {
      default: {
        violet: DarkColors.violet.violet4,
        grayViolet: DarkColors.grayViolet.grayViolet4,
        red: DarkColors.red.red4,
        yellow: DarkColors.yellow.yellow4,
        green: DarkColors.green.green4,
        orange: DarkColors.orange.orange4,
        gray: DarkColors.gray.gray4
      },
      hover: {
        violet: DarkColors.violet.violet5,
        grayViolet: DarkColors.grayViolet.grayViolet5,
        red: DarkColors.red.red5,
        yellow: DarkColors.yellow.yellow5,
        green: DarkColors.green.green5,
        orange: DarkColors.orange.orange5,
        gray: DarkColors.gray.gray5
      },
      pressed: {
        violet: DarkColors.violet.violet6,
        grayViolet: DarkColors.grayViolet.grayViolet6,
        red: DarkColors.red.red6,
        yellow: DarkColors.yellow.yellow6,
        green: DarkColors.green.green6,
        orange: DarkColors.orange.orange6,
        gray: DarkColors.gray.gray6
      },
      disabled: {
        violet: DarkColors.violet.violet2,
        grayViolet: DarkColors.grayViolet.grayViolet2,
        red: DarkColors.red.red2,
        yellow: DarkColors.yellow.yellow2,
        green: DarkColors.green.green2,
        orange: DarkColors.orange.orange2,
        gray: DarkColors.gray.gray2
      }
    }
  }
};
