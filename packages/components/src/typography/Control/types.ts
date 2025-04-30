import {
  JSX,
  MouseEventHandler,
  ElementType,
  JSXElementConstructor
} from "react";

export const CONTROL_SIZE = ["xl", "l", "m", "s", "xs"] as const;
export const CONTROL_VIEW = [
  "secondary",
  "success",
  "warning",
  "danger",
  "disabled"
] as const;

export type TControlSize = (typeof CONTROL_SIZE)[number];
export type TControlView = (typeof CONTROL_VIEW)[number];

export type TControlProps<
  Tag extends keyof JSX.IntrinsicElements | JSXElementConstructor<any> = "span"
> =  Omit<ElementType<Tag>, "size"> & {
  size: TControlSize;
  color?: string;
  onClick?: MouseEventHandler;
  view?: TControlView;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}
