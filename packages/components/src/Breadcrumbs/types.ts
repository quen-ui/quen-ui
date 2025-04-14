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
  items: ITEM[];
  getItemLabel?: TBreadcrumbPropGetItemLabel<ITEM>;
  getItemHref?: TBreadcrumbPropGetItemHref<ITEM>;
  getItemIcon?: TBreadcrumbPropGetItemIcon<ITEM>;
  getItemOnClick?: TBreadcrumbPropGetItemOnClick<ITEM>;
  size?: TQuenSize;
  onItemClick?: TBreadcrumbsPropOnItemClick<ITEM>;
  className?: string;
  classNameItem?: string;
  getItemClassName?: TBreadcrumbsPropGetItemClassname<ITEM>;
  separator?: React.ReactNode;
  isOnlyIconRoot?: boolean;
}

export interface IBreadcrumbItemProps<ITEM> {
  size?: TQuenSize;
  item: ITEM;
  getItemLabel?: TBreadcrumbPropGetItemLabel<ITEM>;
  getItemHref?: TBreadcrumbPropGetItemHref<ITEM>;
  getItemIcon?: TBreadcrumbPropGetItemIcon<ITEM>;
  onItemClick?: TBreadcrumbsPropOnItemClick<ITEM>;
  isOnlyIcon?: boolean;
  getItemClassName?: TBreadcrumbsPropGetItemClassname<ITEM>;
  className?: string;
  isLastItem: boolean;
}
