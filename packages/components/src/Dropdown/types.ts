import React, { RefObject } from "react";
import { TransitionStatus  } from "react-transition-state";
import { TQuenSize} from "../types/size";

export const direction = [
  "bottomLeft",
  "bottomRight",
  "topLeft",
  "topRight",
  "bottom",
  "top",
  "left",
  "right"
] as const;

export type TDropdownSortGroup = (
  a: string | number,
  b: string | number
) => number;

export type TDropdownDirection = (typeof direction)[number];

export type TDropdownOnClick<Item> = (item: Item, event: React.MouseEvent) => void;

export interface IDropdownDefaultItem {
  key?: string | number;
  label: React.ReactNode;
  leftContent?: React.ReactNode;
  disabled?: boolean;
  onClick?: TDropdownOnClick<IDropdownDefaultItem>;
  groupId?: string | number;
}

export interface IDropdownMappersItem<ITEM> {
  /** Label renderer */
  getItemLabel?: TDropdownGetItemLabel<ITEM>;
  /** Unique key extractor */
  getItemKey?: TDropdownGetItemKey<ITEM>;
  /** Disable state checker */
  getItemDisabled?: TDropdownGetItemDisabled<ITEM>;
  getItemLeftContent?: TDropdownGetItemLeftContent<ITEM>;
  /** Group identifier */
  getItemGroupId?: TDropdownGetItemGroupId<ITEM>;
  getItemOnClick?: TDropdownGetItemOnClick<ITEM>;
}

export interface IDropdownProps<ITEM = IDropdownDefaultItem> extends IDropdownMappersItem<ITEM> {
  /** Opening direction */
  direction?: TDropdownDirection;
  /** Array of dropdown items */
  items?: ITEM[];
  /** Item selection handler */
  onItemClick?: TDropdownOnClick<ITEM>;
  /** Click outside handler */
  onClickOutside?: () => void;
  /** Additional CSS class */
  className?: string;
  /**	Group sorting function */
  sortGroup?: TDropdownSortGroup;
  /** Custom close handler */
  onClickClose?: () => void;
  /** Custom width */
  width?: string;
  /** Custom height */
  height?: string;
  /**	Controls visibility */
  open?: boolean;
  /**  */
  content?: React.ReactElement;
  /** Disable close on outside click */
  notCloseOutside?: boolean;
  /** Disable entire dropdown */
  disabled?: boolean;
  /** Size variant */
  size?: TQuenSize;
  /** Reference to anchor element */
  anchorRef: RefObject<HTMLElement | null>
}

export type TDropdownListProps<Item> = Omit<
  IDropdownProps<Item>,
  "children" | "height"
> & {
  top?: number;
  left?: number;
};

export type TDropdownPortalProps<Item> = Omit<
  TDropdownListProps<Item>,
  "children" | "ref"
> & {
  direction: TDropdownDirection;
  anchorRect: DOMRect;
  height?: string;
  anchorRef: React.RefObject<HTMLElement | null>;
  transitionStatus: TransitionStatus;
};


export type TDropdownGetItemLabel<Item> = (item: Item) => React.ReactNode;

export type TDropdownGetItemKey<Item> = (
  item: Item
) => string | number | undefined;

export type TDropdownGetItemDisabled<Item> = (
  item: Item
) => boolean | undefined;

export type TDropdownGetItemLeftContent<Item> = (
  item: Item
) => React.ReactNode | undefined;

export type TDropdownGetItemGroupId<Item> = (
  item: Item
) => string | number | undefined;

export type TDropdownGetItemOnClick<Item> = (
  item: Item
) => TDropdownOnClick<Item> | undefined;

export type TDropdownItemProps<ITEM> = Omit<
  IDropdownMappersItem<ITEM>,
  "getItemKey" | "getItemGroupId"
> &
  Required<Pick<IDropdownMappersItem<ITEM>, "getItemLabel">> & {
  item: ITEM;
  onItemClick?: TDropdownOnClick<ITEM>;
  size: TQuenSize;
};

