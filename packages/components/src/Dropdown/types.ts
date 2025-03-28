import React, { RefObject } from "react";
import { TransitionStatus  } from "react-transition-state";
import { TQuenSize} from "../types/size";

const direction = [
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
  isDisabled?: boolean;
  onClick?: TDropdownOnClick<IDropdownDefaultItem>;
  groupId?: string | number;
}

export interface IDropdownMappersItem<ITEM> {
  getItemLabel?: TDropdownGetItemLabel<ITEM>;
  getItemKey?: TDropdownGetItemKey<ITEM>;
  getItemDisabled?: TDropdownGetItemDisabled<ITEM>;
  getItemLeftContent?: TDropdownGetItemLeftContent<ITEM>;
  getItemGroupId?: TDropdownGetItemGroupId<ITEM>;
  getItemOnClick?: TDropdownGetItemOnClick<ITEM>;
}

export interface IDropdownProps<ITEM = IDropdownDefaultItem> extends IDropdownMappersItem<ITEM> {
  children?: React.ReactNode;
  direction?: TDropdownDirection;
  items?: ITEM[];
  onItemClick?: TDropdownOnClick<ITEM>;
  onClickOutside?: () => void;
  className?: string;
  sortGroup?: TDropdownSortGroup;
  onClickClose?: () => void;
  width?: string;
  height?: string;
  isOpen?: boolean;
  content?: React.ReactElement;
  isNotCloseOutside?: boolean;
  isDisabled?: boolean;
  size?: TQuenSize;
}

export type TDropdownListProps<Item> = Omit<
  IDropdownProps<Item>,
  "children" | "height"
> & {
  top?: number;
  left?: number;
  ref: RefObject<HTMLDivElement | null>
};

export type TDropdownPortalProps<Item> = Omit<
  TDropdownListProps<Item>,
  "children" | "ref"
> & {
  direction: TDropdownDirection;
  anchorRect: DOMRect;
  height?: string;
  onClickOutsideClose: () => void;
  anchorRef: React.RefObject<HTMLDivElement | null>;
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

