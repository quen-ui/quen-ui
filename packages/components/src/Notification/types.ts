import React from "react";

export const NOTIFICATION_STATUSES = ["success", "warning", "error", "info"] as const;

export type TNotificationStatus = typeof NOTIFICATION_STATUSES[number];

export interface INotificationsContext {
  show: () => string;
  hide: () => string;
  update: () => string;
  clean: () => string;
}

export type TNotificationPosition =   | 'top-left'
  | 'top-right'
  | 'top'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom';

export interface INotificationParams {
  id?: string;
  position?: TNotificationPosition;
  title?: React.ReactNode;
  message?: React.ReactNode;
  loading?: boolean;
  autoClose?: boolean | number;
  onClose?: (params: INotificationParams) => void;
  status?: TNotificationStatus;
  isCloseButton?: boolean;
  zIndex?: number;
  className?: string;
  icon?: true | React.ReactNode;
}
