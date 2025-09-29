import React from "react";

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
  className?: string
}

export type TMenuPropGetItemKey<Item> = (item: Item) => string;
export type TMenuPropGetItemIcon<Item> = (item: Item) => React.ReactNode;
export type TMenuPropGetItemLabel<Item> = (item: Item) => React.ReactNode;
export type TMenuPropGetItemOnClick<Item> = (item: Item) => (() => void) | undefined;
export type TMenuPropGetItemActive<Item> = (item: Item) => boolean | undefined;
export type TMenuPropGetItemDisabled<Item> = (item: Item) => boolean | undefined;
export type TMenuPropGetItemClassName<Item> = (item: Item) => string | undefined;

export interface IMenuProps<Item = IMenuDefaultItem> {
  /** List of menu items to display */
  items: Item[];
  /** Orientation of the menu layout */
  direction?: "vertical" | "horizontal";
  /** Custom CSS class */
  className?: string;
  /** Unique key extractor */
  getItemKey?: TMenuPropGetItemKey<Item>;
  /** Label text extractor */
  getItemLabel?: TMenuPropGetItemLabel<Item>;
  /** Disabled state extractor */
  getItemDisabled?: TMenuPropGetItemDisabled<Item>;
  /** Extracts content shown before the label */
  getItemLeftContent?: TMenuPropGetItemIcon<Item>;
  /** Extracts content shown after the label */
  getItemRightContent?: TMenuPropGetItemIcon<Item>;
  /** Provides the click handler for the item. */
  getItemOnClick?: TMenuPropGetItemOnClick<Item>;
  /** Marks the item as active (highlighted) */
  getItemActive?: TMenuPropGetItemActive<Item>;
  /** Custom class name for a specific item. */
  getItemClassName?: TMenuPropGetItemClassName<Item>;
  /** Inline styles applied to the container */
  style?: React.CSSProperties;
}
