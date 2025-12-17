import React from "react";
import { TQuenSize } from "../types/size";

export interface IModalProps {
  /** Controls modal visibility */
  open: boolean;
  /** Controls width of the content area */
  size?: TQuenSize;
  /** Custom CSS class */
  className?: string;
  /** Custom CSS class for footer */
  classNameFooter?: string;
  /** Header title content */
  title?: React.ReactNode;
  /** Show close (×) button in header */
  closeButton?: boolean;
  /** Full-screen modal */
  fullScreen?: boolean;
  /** Click handler for close button */
  onClickClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Base z-index for modal/overlay */
  zIndex?: number;
  /** Callback when ESC key is pressed */
  onEsc?: () => void;
  /** Optional description below the title */
  description?: React.ReactNode;
  /** Main body content */
  children?: React.ReactNode;
  /** Footer content (e.g., buttons) */
  footer?: React.ReactNode;
  /** Width modal window */
  width?: number;
  [key: string]: any;
}
