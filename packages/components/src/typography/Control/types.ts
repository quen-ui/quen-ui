import { JSX } from "react";

export const CONTROL_SIZE = ["xl", "l", "m", "s", "xs"] as const;
export const CONTROL_TYPE = [
  "secondary",
  "success",
  "warning",
  "danger",
  "disabled"
] as const;

export type TControlSize = (typeof CONTROL_SIZE)[number];
export type TControlType = (typeof CONTROL_TYPE)[number];

export interface IControlProps {
  size: TControlSize;
  color?: string;
  onClick?: () => void;
  type?: TControlType;
  as?: keyof JSX.IntrinsicElements;
}
