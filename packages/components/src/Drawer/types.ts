import type  { CSSProperties, ReactNode } from "react";
import { TQuenSize } from "../types/size";

type TDrawerSemantic = "root" | "dialog" | "header" | "title" | "close" | "content";

export interface IDrawerProps {
  /** Controls visibility (true = visible) */
  open: boolean;
  /** Callback when closing */
  onClose: () => void;
  /** 	Header content (supports JSX) */
  title?: ReactNode;
  /** @deprecated - use classNames
   * Custom CSS class */
  className?: string;
  /** Custom close button */
  closeIcon?: ReactNode;
  /** Controls drawer dimensions */
  size?: TQuenSize | "full";
  /** Controls stacking order */
  zIndex?: number;
  /** Slide-in direction */
  position?: "left" | "right" | "top" | "bottom";
  /** Main content */
  children?: ReactNode;
  /** Disables closing when clicking outside */
  noCloseOnClickOutside?: boolean;
  /** Customize class for each semantic structure inside the component */
  classNames?: Partial<Record<TDrawerSemantic, string>>;
  /** Customize inline style for each semantic structure inside the component. */
  styles?: Partial<Record<TDrawerSemantic, CSSProperties>>;
}
