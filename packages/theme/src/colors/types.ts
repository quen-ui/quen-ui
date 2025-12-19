export const QUENUI_COlORS_PALETTE= ["violet", "gray", "grayViolet", "red", "yellow", "green", "orange"] as const;

export interface IQuenUIColor {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
}

export type TDefaultQuenUIColors = typeof QUENUI_COlORS_PALETTE[number];

export type TQuenUIColors = Record<TDefaultQuenUIColors, IQuenUIColor>;

export interface IQuenUICommonTokensColor {
  successColor: string;
  warningColor: string;
  dangerColor: string;
  dangerBackground: string;
  secondaryColor: string;
  secondaryBackground: string;
  disabledColor: string;
  disabledBackground: string;
  successBackground: string;
  warningBackground: string
  primaryBackground: string;
  borderColor: string;
  overlayBackground: string;
  hoverBackground: string;
  activeBackground: string;
}
