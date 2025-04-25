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
  size?: TQuenSize;
  color?: TBadgeColor | string;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  children?: React.ReactNode;
}
