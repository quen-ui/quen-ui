import React, { type CSSProperties } from "react";
import { TQuenSize } from "../types/size";

type TModalSemantic = "root" | "container" | "header" | "title" | "close" | "description" | "footer" | "content";

export interface IModalProps {
  /** Controls modal visibility */
  open: boolean;
  /** Controls width of the content area */
  size?: TQuenSize;
  /** @deprecated - use classNames
   * Custom CSS class */
  className?: string;
  /** @deprecated - use classNames
   * Custom CSS class for footer */
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
  /** Customize class for each semantic structure inside the component */
  classNames?: Partial<Record<TModalSemantic, string>>;
  /** Customize inline style for each semantic structure inside the component. */
  styles?: Partial<Record<TModalSemantic, CSSProperties>>;
  [key: string]: any;
}
