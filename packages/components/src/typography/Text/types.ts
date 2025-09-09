import { MouseEventHandler, JSX, CSSProperties } from "react";

export const TEXT_SIZE = ["xl", "l", "m", "s", "xs"] as const;
export const TEXT_TYPE = [
  "secondary",
  "success",
  "warning",
  "danger",
  "disabled"
] as const;

export type TTextSize = (typeof TEXT_SIZE)[number];
export type TTextType = (typeof TEXT_TYPE)[number];

export interface ITextProps {
  /** Controls text size */
  size?: TTextSize;
  /** Custom CSS color value (overrides type) */
  color?: string;
  /** Click event handler */
  onClick?: MouseEventHandler<HTMLElement>;
  /** Semantic state style */
  type?: TTextType;
  /** HTML tag to render */
  as?: keyof JSX.IntrinsicElements;
  /** Custom CSS class */
  className?: string;
  /** Inline styles */
  styles?: CSSProperties
  [key: string]: any;
}
