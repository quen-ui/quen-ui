import type { CSSProperties, ReactNode } from "react";
import { TQuenSize } from "../types/size";

export const BADGE_COLOR = [
  "secondary",
  "success",
  "warning",
  "danger",
  "disabled"
] as const;

export type TBadgeColor = typeof BADGE_COLOR[number];

type TBadgeSemantic = "wrapper" | "badge" | "text" | "leftContent" | "rightContent";

export interface IBadgeProps {
  /** Controls padding and typography size */
  size?: TQuenSize;
  /** Preset or custom color value */
  color?: TBadgeColor | string;
  /** Left-aligned icon or element */
  leftContent?: ReactNode;
  /** Right-aligned icon or element */
  rightContent?: ReactNode;
  /** Main badge text content */
  text: ReactNode;
  /** @deprecated
   * This property is deprecated. Use {@link classNames} instead.
   * Additional classname */
  className?: string;
  /** @deprecated
   * This property is deprecated. Use {@link styles} instead.
   * Additional style */
  style?: CSSProperties;
  children?: ReactNode;
  /** Customize class for each semantic structure inside the component */
  classNames?: Partial<Record<TBadgeSemantic, string>>;
  /** Customize inline style for each semantic structure inside the component. */
  styles?: Partial<Record<TBadgeSemantic, CSSProperties>>;
  [key: string]: any;
}
