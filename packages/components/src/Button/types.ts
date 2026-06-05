import React, {
  MouseEventHandler,
  KeyboardEventHandler,
  JSX,
  Ref,
  type ReactNode,
  type CSSProperties
} from "react";
import type { TQuenSize } from "../types/size";
import { ILoaderProps } from "../Loader";

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

export type TButtonView = (typeof BUTTON_VIEW)[number];

export interface IButtonProps {
  /** Controls button dimensions */
  size?: TQuenSize;
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
  /** Inline styles */
  style?: React.CSSProperties;
  /** Renders as custom element (e.g., "a" for links) */
  as?: keyof JSX.IntrinsicElements | React.ElementType;
  ref?: Ref<HTMLElement>;
  [key: string]: any;
}

export interface IButtonGroupProps {
  /** Child elements (expected Button components) */
  children: ReactNode;
  /** Forces the size of all buttons in the group (if not specified for the button itself) */
  size?: TQuenSize;
  /** Forces a design option for all buttons in a group (if not specified for the button itself) */
  view?: TButtonView;
  /** Group orientation: horizontal or vertical */
  orientation?: "horizontal" | "vertical";
  /** Stretches the group to the full width of the container */
  fullWidth?: boolean;
  /** Additional CSS class */
  className?: string;
  /** Inline styles */
  style?: CSSProperties;
  /** ARIA role (default "group") */
  role?: string;
  /** Screen reader friendly name */
  "aria-label"?: string;
}
