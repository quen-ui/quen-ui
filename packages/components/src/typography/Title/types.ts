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
  /** Visual size */
  size: TTitleSize;
  /** Custom CSS color value (overrides type) */
  color?: string;
  /** Click event handler */
  onClick?: () => void;
  /** Applies semantic state styling */
  type?: TTitleType;
  /** Custom CSS class */
  className?: string;
  /** DOM element id */
  id?: string;
  /** Defines rendered HTML tag */
  as?: keyof JSX.IntrinsicElements | React.ElementType;
  align?: "start" | "center" | "end";
  [key: string]: any;
}
