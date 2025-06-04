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
  size?: TTextSize;
  color?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  type?: TTextType;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  styles?: CSSProperties
  [key: string]: any;
}
