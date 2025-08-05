import React from "react";
import { TQuenSize } from "../types/size";

export const COLOR_PROGRESS = ["violet", "grayViolet", "red", "yellow", "green", "orange"] as const;

export interface IProgressProps {
  /** Controls track height. Default size 'm' */
  size?: TQuenSize;
  /** Shows numeric value inside bar */
  isShowInfo?: boolean;
  /* Custom label component/text* */
  label?: React.ReactNode;
  /** Completion percentage (0-100) */
  value: number;
  /** Progress bar color */
  color?: typeof COLOR_PROGRESS[number];
  /** Container class */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
}
