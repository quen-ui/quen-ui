import { IQuenUITheme } from "../theme/types";

export interface IBannerTokens {
  info: {
    background: string;
    borderColor: string;
    color: string;
    iconColor: string;
  };
  success: {
    background: string;
    borderColor: string;
    color: string;
    iconColor: string;
  };
  warning: {
    background: string;
    borderColor: string;
    color: string;
    iconColor: string;
  };
  danger: {
    background: string;
    borderColor: string;
    color: string;
    iconColor: string;
  };
  neutral: {
    background: string;
    borderColor: string;
    color: string;
    iconColor: string;
  };
}

export const generateBannerTokens = (theme: IQuenUITheme): IBannerTokens => ({
  info: {
    background:
      theme.components.Banner?.info?.background ?? theme.colors.grayViolet[6],
    borderColor:
      theme.components.Banner?.info?.borderColor ?? theme.colors.violet[6],
    color: theme.components.Banner?.info?.color ?? theme.colors.violet[9],
    iconColor:
      theme.components.Banner?.info?.iconColor ?? theme.colors.violet[7]
  },
  success: {
    background:
      theme.components.Banner?.success?.background ?? theme.colors.green[2],
    borderColor:
      theme.components.Banner?.success?.borderColor ?? theme.colors.green[6],
    color: theme.components.Banner?.success?.color ?? theme.colors.green[9],
    iconColor:
      theme.components.Banner?.success?.iconColor ?? theme.colors.green[7]
  },
  warning: {
    background:
      theme.components.Banner?.warning?.background ?? theme.colors.orange[2],
    borderColor:
      theme.components.Banner?.warning?.borderColor ?? theme.colors.orange[6],
    color: theme.components.Banner?.warning?.color ?? theme.colors.orange[9],
    iconColor:
      theme.components.Banner?.warning?.iconColor ?? theme.colors.orange[7]
  },
  danger: {
    background:
      theme.components.Banner?.danger?.background ?? theme.colors.red[2],
    borderColor:
      theme.components.Banner?.danger?.borderColor ?? theme.colors.red[6],
    color: theme.components.Banner?.danger?.color ?? theme.colors.red[9],
    iconColor: theme.components.Banner?.danger?.iconColor ?? theme.colors.red[7]
  },
  neutral: {
    background:
      theme.components.Banner?.neutral?.background ??
      theme.colors.grayViolet[1],
    borderColor:
      theme.components.Banner?.neutral?.borderColor ?? theme.colors.gray[7],
    color: theme.components.Banner?.neutral?.color ?? theme.colors.gray[9],
    iconColor:
      theme.components.Banner?.neutral?.iconColor ?? theme.colors.violet[7]
  }
});
