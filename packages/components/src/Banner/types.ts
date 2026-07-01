import type { ReactNode, ElementType, HTMLAttributes, CSSProperties } from 'react';
import type { TQuenSize } from "../types/size"

export type TBannerVariant = 'info' | 'success' | 'warning' | 'danger' | 'neutral';

type TBannerSemantic = "root" | "content" | "displayIcon" | "title" | "description" | "action" | "close";

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
  /** Customize class for each semantic structure inside the component */
  classNames?: Partial<Record<TBannerSemantic, string>>;
  /** Customize inline style for each semantic structure inside the component. */
  styles?: Partial<Record<TBannerSemantic, CSSProperties>>;
  /** @deprecated
   * This property is deprecated. Use {@link classNames} instead.
   * Additional classname */
  className?: string;
  /** @deprecated
   * This property is deprecated. Use {@link styles} instead.
   * Additional style */
  style?: CSSProperties;
}
