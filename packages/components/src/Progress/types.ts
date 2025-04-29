import React from "react";
import { TQuenSize } from "../types/size.ts";

export const COLOR_PROGRESS = ["violet", "grayViolet", "red", "yellow", "green", "orange"] as const;

export interface IProgressProps {
  size?: TQuenSize;
  isShowInfo?: boolean;
  label?: React.ReactNode;
  value: number;
  color?: typeof COLOR_PROGRESS[number];
  className?: string;
  style: React.CSSProperties;
}
