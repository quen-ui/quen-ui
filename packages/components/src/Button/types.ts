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
  /** Controls button dimensions */
  size?: TButtonSize;
  /** Visual style variant */
  view?: TButtonView;
  /** Disables interactions and applies visual styling */
  disabled?: boolean;
  /** Shows loading spinner and blocks interactions */
  loading?: boolean;
  /** Forces 100% container width */
  fullWidth?: boolean;
  /** Left-aligned icon/content */
  leftContent?: React.ReactNode;
  /** Right-aligned icon/content */
  rightContent?: React.ReactNode;
  /** Customizes loading spinner */
  loaderProps?: ILoaderProps;
  /** Click event handler */
  onClick?: MouseEventHandler;
  /** Keyboard press handler */
  onKeyPress?: KeyboardEventHandler;
  /** Key release handler */
  onKeyUp?: KeyboardEventHandler;
  /** Additional CSS class */
  className?: string;
  /** Renders as custom element (e.g., "a" for links) */
  as?: keyof JSX.IntrinsicElements | React.ElementType;
  [key: string]: any;
}
