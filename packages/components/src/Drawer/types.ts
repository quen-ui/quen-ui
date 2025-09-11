import React from "react";
import { TQuenSize } from "../types/size";

export interface IDrawerProps {
  /** Controls visibility (true = visible) */
  open: boolean;
  /** Callback when closing */
  onClose: () => void;
  /** 	Header content (supports JSX) */
  title?: React.ReactNode;
  /** Custom CSS class */
  className?: string;
  /** Custom close button */
  closeIcon?: React.ReactNode;
  /** Controls drawer dimensions */
  size?: TQuenSize | "full";
  /** Controls stacking order */
  zIndex?: number;
  /** Slide-in direction */
  position?: "left" | "right" | "top" | "bottom";
  /** Main content */
  children?: React.ReactNode;
  /** Disables closing when clicking outside */
  noCloseOnClickOutside?: boolean;
}
