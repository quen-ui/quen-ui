import React from "react";
import { TQuenSize } from "../types/size";

export interface IAlertProps {
  /** 	Main heading text (supports JSX) */
  title?: React.ReactNode;
  /** Custom action button/component (placed bottom) */
  action?: React.ReactNode;
  /** Shows close button when true */
  isClosable?: boolean;
  /** Secondary text content */
  description?: React.ReactNode;
  /** 	Custom icon component (placed left) */
  icon?: React.ReactNode;
  /** Callback when alert is closed */
  onClose?: React.MouseEventHandler;
  /** Color scheme and icon (default: "info") */
  type?: "success" | "warning" | "danger" | "info";
  /** Controls dimensions */
  size?: TQuenSize;
  /** 	Additional CSS class */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
}
