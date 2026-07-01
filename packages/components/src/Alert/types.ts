import type { CSSProperties, ReactNode, MouseEventHandler } from "react";
import { TQuenSize } from "../types/size";

export type TAlertSemantic =
  | "root"
  | "icon"
  | "content"
  | "title"
  | "description"
  | "action"
  | "close";

export interface IAlertProps {
  /** 	Main heading text (supports JSX) */
  title?: ReactNode;
  /** Custom action button/component (placed bottom) */
  action?: ReactNode;
  /** Shows close button when true */
  closable?: boolean;
  /** Secondary text content */
  description?: ReactNode;
  /** 	Custom icon component (placed left) */
  icon?: ReactNode;
  /** Callback when alert is closed */
  onClose?: MouseEventHandler;
  /** Color scheme and icon (default: "info") */
  type?: "success" | "warning" | "danger" | "info";
  /** Controls dimensions */
  size?: TQuenSize;
  /** @deprecated
   * This property is deprecated. Use {@link classNames} instead.
   * Additional classname */
  className?: string;
  /** @deprecated
   * This property is deprecated. Use {@link styles} instead.
   * Additional style */
  style?: CSSProperties;
  /** Customize class for each semantic structure inside the component */
  classNames?: Partial<Record<TAlertSemantic, string>>;
  /** Customize inline style for each semantic structure inside the component. */
  styles?: Partial<Record<TAlertSemantic, CSSProperties>>;
  [key: string]: any;
}
