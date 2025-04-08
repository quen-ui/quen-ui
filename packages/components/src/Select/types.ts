import { TQuenSize } from "../types/size";
import React, { CSSProperties } from "react";

export interface ISelectDefaultItem {
  label: string;
  value: string | number;
  groupId?: string | number;
  isDisabled?: boolean;
}

export type TSelectItemOnChange<ITEM> = (
  value: ITEM | null,
  event: React.SyntheticEvent
) => void;
export type TSelectValueOnChange = (
  value: string | number| null,
  event: React.SyntheticEvent
) => void;

type TSelectOnChange<
  ITEM = ISelectDefaultItem,
> =
  | { onChange?: TSelectItemOnChange<ITEM>; onChangeReturnValue: "item" }
  | { onChange?: TSelectValueOnChange; onChangeReturnValue: "value" };

export type TSelectGetItemDisabled<ITEM> = (item: ITEM) => boolean | undefined;
export type TSelectGetItemValue<ITEM> = (item: ITEM | null) => string | number | null;
export type TSelectGetItemLabel<Item> = (item: Item) => string;

export type TSelectProps<
  ITEM,
> =  TSelectOnChange<ITEM> & {
  size?: TQuenSize;
  isDisabled?: boolean;
  label?: string;
  isRequired?: boolean;
  error?: string | boolean;
  placeholder?: string;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  name?: string;
  className?: string;
  items: ITEM[];
  onBlur?: React.FocusEventHandler;
  onFocus?: React.FocusEventHandler;
  onClear?: (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
  value?: ITEM | string | number | null;
  isClearable?: boolean;
  getItemDisabled?: TSelectGetItemDisabled<ITEM>;
  getItemValue?: TSelectGetItemValue<ITEM>;
  getItemLabel?: TSelectGetItemLabel<ITEM>;
  style?: CSSProperties;
  messageNoData?: string;
};
