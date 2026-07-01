import React, { type CSSProperties } from "react";
import { TQuenSize } from "../types/size";

type TProgressSemantic = "root" | "body" | "rail" | "track" | "info" | "label";

export const COLOR_PROGRESS = ["violet", "grayViolet", "red", "yellow", "green", "orange"] as const;

export type TProgressColor = typeof COLOR_PROGRESS[number];

export interface IProgressProps {
  /** Controls track height. Default size 'm' */
  size?: TQuenSize;
  /** Shows numeric value inside bar */
  showInfo?: boolean;
  /** Custom label component/text* */
  label?: React.ReactNode;
  /** Completion percentage (0-100) */
  value: number;
  /** Progress bar color */
  color?: TProgressColor;
  /** @deprecated - use classNames
   * Container class */
  className?: string;
  /** @deprecated - use styles
   * Inline styles */
  style?: React.CSSProperties;
  /** Customize class for each semantic structure inside the component */
  classNames?: Partial<Record<TProgressSemantic, string>>;
  /** Customize inline style for each semantic structure inside the component. */
  styles?: Partial<Record<TProgressSemantic, CSSProperties>>;
  [key: string]: any;
}
