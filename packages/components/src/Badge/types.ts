import React from "react";
import { TQuenSize } from "../types/size";

export const BADGE_COLOR = [
  "secondary",
  "success",
  "warning",
  "danger",
  "disabled"
] as const;

export type TBadgeColor = typeof BADGE_COLOR[number];

export interface IBadgeProps {
  /** Controls padding and typography size */
  size?: TQuenSize;
  /** Preset or custom color value */
  color?: TBadgeColor | string;
  /** Left-aligned icon or element */
  leftContent?: React.ReactNode;
  /** Right-aligned icon or element */
  rightContent?: React.ReactNode;
  /** Main badge text content */
  children?: React.ReactNode;
  /** Additional classname */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
}
