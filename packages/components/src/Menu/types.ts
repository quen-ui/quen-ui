import React from "react";
import { TQuenSize } from "../types/size";

export interface IMenuDefaultItem {
  /** Unique item identifier */
  key: string;
  /** Icon displayed before label */
  leftContent?: React.ReactNode;
  /** Icon displayed after label */
  rightContent?: React.ReactNode;
  /** Menu item content */
  label: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Visual active state (highlighting) */
  active?: boolean;
  /** Disables interaction */
  disabled?: boolean;
  /** Custom CSS classes */
  className?: string;
}

export type TMenuPropGetItemKey<Item> = (item: Item) => string;
export type TMenuPropGetItemIcon<Item> = (item: Item) => React.ReactNode;
export type TMenuPropGetItemLabel<Item> = (item: Item) => React.ReactNode;
export type TMenuPropGetItemOnClick<Item> = (
  item: Item
) => (() => void) | undefined;
export type TMenuPropGetItemDisabled<Item> = (
  item: Item
) => boolean | undefined;
export type TMenuPropGetItemClassName<Item> = (
  item: Item
) => string | undefined;

export type TMenuRecursiveItem<T> = T & { children?: TMenuRecursiveItem<T>[] };

export interface IMenuProps<
  Item extends Record<string, any> = IMenuDefaultItem
> {
  /** List of menu items to display */
  items: TMenuRecursiveItem<Item>[];
  /** Orientation of the menu layout */
  direction?: "vertical" | "horizontal";
  /** Custom CSS class */
  className?: string;
  /** Unique key extractor */
  getItemKey?: TMenuPropGetItemKey<TMenuRecursiveItem<Item>>;
  /** Label text extractor */
  getItemLabel?: TMenuPropGetItemLabel<TMenuRecursiveItem<Item>>;
  /** Disabled state extractor */
  getItemDisabled?: TMenuPropGetItemDisabled<TMenuRecursiveItem<Item>>;
  /** Extracts content shown before the label */
  getItemLeftContent?: TMenuPropGetItemIcon<TMenuRecursiveItem<Item>>;
  /** Extracts content shown after the label */
  getItemRightContent?: TMenuPropGetItemIcon<TMenuRecursiveItem<Item>>;
  /** Provides the click handler for the item. */
  getItemOnClick?: TMenuPropGetItemOnClick<TMenuRecursiveItem<Item>>;
  /** Custom class name for a specific item. */
  getItemClassName?: TMenuPropGetItemClassName<TMenuRecursiveItem<Item>>;
  /** Inline styles applied to the container */
  style?: React.CSSProperties;
  /** Controls menu item sizes */
  size?: TQuenSize;
  /** Array with the keys of currently active menu items */
  activeKeys?: string[];
}

export interface IMenuItemProps<Item extends Record<string, any> = IMenuDefaultItem> {
  /** Controls menu item sizes */
  size?: TQuenSize;
  /** Menu item to display */
  item: TMenuRecursiveItem<Item>;
  /** Unique key extractor */
  getItemKey: TMenuPropGetItemKey<TMenuRecursiveItem<Item>>;
  /** Label text extractor */
  getItemLabel: TMenuPropGetItemLabel<TMenuRecursiveItem<Item>>;
  /** Disabled state extractor */
  getItemDisabled: TMenuPropGetItemDisabled<TMenuRecursiveItem<Item>>;
  /** Extracts content shown before the label */
  getItemLeftContent: TMenuPropGetItemIcon<TMenuRecursiveItem<Item>>;
  /** Extracts content shown after the label */
  getItemRightContent: TMenuPropGetItemIcon<TMenuRecursiveItem<Item>>;
  /** Provides the click handler for the item. */
  getItemOnClick: TMenuPropGetItemOnClick<TMenuRecursiveItem<Item>>;
  /** Custom class name for a specific item. */
  getItemClassName: TMenuPropGetItemClassName<TMenuRecursiveItem<Item>>;
  /** Orientation of the menu layout */
  direction: "vertical" | "horizontal";
  /** Array with the keys of currently active menu items */
  activeKeys?: string[];
  arrowIcon?: boolean;
  level?: number;
}
