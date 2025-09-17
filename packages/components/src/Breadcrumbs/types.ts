import React from "react";
import { TQuenSize } from "../types/size";

export interface IBreadcrumbItemDefault {
  label: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  className?: string;
}

export type TBreadcrumbPropGetItemLabel<ITEM> = (item: ITEM) => string;
export type TBreadcrumbPropGetItemHref<ITEM> = (item: ITEM) => string | undefined;
export type TBreadcrumbPropGetItemIcon<ITEM> = (item: ITEM) => React.ReactNode;
export type TBreadcrumbPropGetItemOnClick<ITEM> = (item: ITEM) => React.MouseEventHandler | undefined;
export type TBreadcrumbsPropOnItemClick<ITEM = IBreadcrumbItemDefault> = (
  item: ITEM,
  e: React.MouseEvent,
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
  /** Container class */
  className?: string;
  /** Class for all elements */
  classNameItem?: string;
  /** Function to get class for element */
  getItemClassName?: TBreadcrumbsPropGetItemClassname<ITEM>;
  /** Separator between elements (default is "/") */
  separator?: React.ReactNode;
  /** Show only icon for first item */
  onlyIconRoot?: boolean;
  /** Inline styles */
  style?: React.CSSProperties;
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
}
