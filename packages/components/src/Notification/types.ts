import React from "react";

export const NOTIFICATION_STATUSES = [
  "success",
  "warning",
  "error",
  "info"
] as const;

export type TNotificationStatus = (typeof NOTIFICATION_STATUSES)[number];

export interface INotificationsContext {
  /** Displays new notification */
  show: (notification: INotificationParams) => string;
  /** Removes specific notification */
  hide: (id: string) => string;
  /** Updates existing notification */
  update: (notification: Partial<INotificationParams>) => string;
  /** Clears all notifications */
  clean: () => void;
}

export type TNotificationPosition =
  | "top-left"
  | "top-right"
  | "top"
  | "bottom-left"
  | "bottom-right"
  | "bottom";

export interface INotificationParams {
  /** Unique notification identifier */
  id?: string;
  /** Display position */
  position?: TNotificationPosition;
  /** Bold header text (supports JSX) */
  title?: React.ReactNode;
  /** Primary content (supports JSX) */
  message?: React.ReactNode;
  /** Shows loading spinner (overrides icon) */
  loading?: boolean;
  /** Close delay (ms) or false to disable */
  autoClose?: boolean | number;
  /** Callback when notification closes */
  onClose?: (params: INotificationParams) => void;
  /** Visual status type */
  status?: TNotificationStatus;
  /** Shows/hides close button */
  closeButton?: boolean;
  /** Stacking context */
  zIndex?: number;
  /** Custom container class */
  className?: string;
  /** Custom icon or false to hide */
  icon?: true | React.ReactNode;
  [key: string]: any;
}
