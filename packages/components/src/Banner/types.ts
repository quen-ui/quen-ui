import type { ReactNode, ElementType, HTMLAttributes } from 'react';
import type { TQuenSize } from "../types/size"

export type TBannerVariant = 'info' | 'success' | 'warning' | 'danger' | 'neutral';

export interface IBannerProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /**
   * Unique key for storing the closure state in localStorage.
   * If transferred, the banner will not appear again after closing.
   */
  storageKey?: string;
  /**
   * Visual style of the banner
   * @default 'info'
   */
  variant?: TBannerVariant;

  /** Banner title */
  title?: ReactNode;

  /** Description/banner content */
  description?: ReactNode;

  /** Action element (button, link) */
  action?: ReactNode;

  /** Callback when closing a banner */
  onClose?: () => void;

  /**
   * Whether to show the close button
   * @default false
   */
  dismissible?: boolean;

  /** Custom icon (overrides the icon by variant) */
  icon?: ReactNode;

  /**
   * Banner size
   * @default 'm'
   */
  size?: TQuenSize;

  /**
   * Custom rendering element
   * @default 'div'
   */
  as?: ElementType;
}
