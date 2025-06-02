import React, { MouseEventHandler, KeyboardEventHandler, JSX } from "react";
import { ILoaderProps } from "../Loader";
export const BUTTON_SIZE = ["l", "m", "s", "xs"] as const;
export const BUTTON_VIEW = [
  "primary",
  "secondary",
  "ghost",
  "link",
  "icon",
  "danger",
  "warning",
  "success"
] as const;

export type TButtonSize = (typeof BUTTON_SIZE)[number];
export type TButtonView = (typeof BUTTON_VIEW)[number];

export interface IButtonProps {
  size?: TButtonSize;
  view?: TButtonView;
  isDisabled?: boolean;
  isLoading?: boolean;
  fullWidth?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  loaderProps?: ILoaderProps;
  onClick?: MouseEventHandler;
  onKeyPress?: KeyboardEventHandler;
  onKeyUp?: KeyboardEventHandler;
  className?: string;
  as?: keyof JSX.IntrinsicElements | React.ElementType;
  [key: string]: any;
}
