import type {
  ReactNode,
  MouseEventHandler,
  MouseEvent,
  CSSProperties
} from "react";
import type { TQuenSize } from "../types/size";

type TBreadcrumbSemantic = "root" | "item" | "text" | "icon" | "label";

export interface IBreadcrumbItemDefault {
  label: string;
  icon?: ReactNode;
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  className?: string;
}

export type TBreadcrumbPropGetItemLabel<ITEM> = (item: ITEM) => string;
export type TBreadcrumbPropGetItemHref<ITEM> = (item: ITEM) => string | undefined;
export type TBreadcrumbPropGetItemIcon<ITEM> = (item: ITEM) => ReactNode;
export type TBreadcrumbPropGetItemOnClick<ITEM> = (item: ITEM) => MouseEventHandler | undefined;
export type TBreadcrumbsPropOnItemClick<ITEM = IBreadcrumbItemDefault> = (
  item: ITEM,
  e: MouseEvent,
) => void;
export type TBreadcrumbsPropGetItemClassname<ITEM> = (item: ITEM) => string | undefined;

export interface IBreadcrumbsProps<ITEM = IBreadcrumbItemDefault> {
  /** Array of elements to display */
  items: ITEM[];
  /** Function to get element text */
  getItemLabel?: TBreadcrumbPropGetItemLabel<ITEM>;
  /** Function to get element link */
  getItemHref?: TBreadcrumbPropGetItemHref<ITEM>;
  /** Function for getting element icon*/
  getItemIcon?: TBreadcrumbPropGetItemIcon<ITEM>;
  /** Function to get click handler */
  getItemOnClick?: TBreadcrumbPropGetItemOnClick<ITEM>;
  /** Text and separator size */
  size?: TQuenSize;
  /** Global click handler for all elements */
  onItemClick?: TBreadcrumbsPropOnItemClick<ITEM>;
  /** @deprecated
   * This property is deprecated. Use {@link classNames} instead.
   * Additional classname */
  className?: string;
  /** @deprecated
   * This property is deprecated. Use {@link classNames} instead.
   * Class for all elements */
  classNameItem?: string;
  /** Function to get class for element */
  getItemClassName?: TBreadcrumbsPropGetItemClassname<ITEM>;
  /** Separator between elements (default is "/") */
  separator?: ReactNode;
  /** Show only icon for first item */
  onlyIconRoot?: boolean;
  /** @deprecated
   * This property is deprecated. Use {@link styles} instead.
   * Additional style */
  style?: CSSProperties;
  /** Customize class for each semantic structure inside the component */
  classNames?: Partial<Record<TBreadcrumbSemantic, string>>;
  /** Customize inline style for each semantic structure inside the component. */
  styles?: Partial<Record<TBreadcrumbSemantic, CSSProperties>>;
  [key: string]: any;
}

export interface IBreadcrumbItemProps<ITEM> {
  size?: TQuenSize;
  item: ITEM;
  getItemLabel?: TBreadcrumbPropGetItemLabel<ITEM>;
  getItemHref?: TBreadcrumbPropGetItemHref<ITEM>;
  getItemIcon?: TBreadcrumbPropGetItemIcon<ITEM>;
  onItemClick?: TBreadcrumbsPropOnItemClick<ITEM>;
  onlyIcon?: boolean;
  getItemClassName?: TBreadcrumbsPropGetItemClassname<ITEM>;
  className?: string;
  lastItem: boolean;
  /** Customize class for each semantic structure inside the component */
  classNames?: Partial<Record<TBreadcrumbSemantic, string>>;
  /** Customize inline style for each semantic structure inside the component. */
  styles?: Partial<Record<TBreadcrumbSemantic, CSSProperties>>;
}
