import React, { JSX } from "react";

export const TITLE_SIZE = ["2xl", "xl", "l", "m", "s", "xs"] as const;
export const TITLE_TYPE = [
  "secondary",
  "success",
  "warning",
  "danger",
  "disabled"
] as const;

export type TTitleSize = (typeof TITLE_SIZE)[number];
export type TTitleType = (typeof TITLE_TYPE)[number];

export interface ITitleProps {
  size: TTitleSize;
  color?: string;
  onClick?: () => void;
  type?: TTitleType;
  className?: string;
  id?: string;
  as?: keyof JSX.IntrinsicElements | React.ElementType;
  [key: string]: any;
}
