import { IColors } from "./colors";

export interface IThemeColors extends IColors {
  backgroundPrimaryMain: string;
  text: {
    default: string;
    hover: string;
    pressed: string;
    disabled: string;
    colors: {
      violet: string;
      grayViolet: string;
      red: string;
      yellow: string;
      green: string;
      orange: string;
    };
  };
  component: {
    primary: {
      default: {
        violet: string;
        grayViolet: string;
        red: string;
        yellow: string;
        green: string;
        orange: string;
        gray: string;
      };
      hover: {
        violet: string;
        grayViolet: string;
        red: string;
        yellow: string;
        green: string;
        orange: string;
        gray: string;
      };
      pressed: {
        violet: string;
        grayViolet: string;
        red: string;
        yellow: string;
        green: string;
        orange: string;
        gray: string;
      };
      disabled: {
        violet: string;
        grayViolet: string;
        red: string;
        yellow: string;
        green: string;
        orange: string;
        gray: string;
      }
    };
    secondary: {
      default: {
        violet: string;
        grayViolet: string;
        red: string;
        yellow: string;
        green: string;
        orange: string;
        gray: string;
      };
      hover: {
        violet: string;
        grayViolet: string;
        red: string;
        yellow: string;
        green: string;
        orange: string;
        gray: string;
      };
      pressed: {
        violet: string;
        grayViolet: string;
        red: string;
        yellow: string;
        green: string;
        orange: string;
        gray: string;
      };
      disabled: {
        violet: string;
        grayViolet: string;
        red: string;
        yellow: string;
        green: string;
        orange: string;
        gray: string;
      }
    };
  };
}

export interface ITheme {
  name: string;
  colors: IThemeColors;
}
