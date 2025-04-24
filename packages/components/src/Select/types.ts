import { TQuenSize } from "../types/size";
import React, { CSSProperties } from "react";

export interface ISelectDefaultItem {
  label: string;
  value: string | number;
  groupId?: string | number;
  isDisabled?: boolean;
}

export type TSelectSingleValue = string | number;

export type TSingleSelectItemOnChange<ITEM> = (
  value: ITEM | null,
) => void;
export type TSingleSelectValueOnChange = (
  value: TSelectSingleValue | null,
) => void;

export type TMultiSelectItemOnChange<ITEM> = (
  value: ITEM[] | null,
) => void;

export type TMultiSelectValueOnChange = (
  value: TSelectSingleValue[] | null,
) => void;

type TSingleSelectOnChange<
  ITEM = ISelectDefaultItem,
> =
  | { onChange?: TSingleSelectItemOnChange<ITEM>; onChangeReturnValue: "item" }
  | { onChange?: TSingleSelectValueOnChange; onChangeReturnValue: "value" };

type TMultiSelectOnChange<
  ITEM = ISelectDefaultItem,
> =
  | { onChange?: TMultiSelectItemOnChange<ITEM>; onChangeReturnValue: "item" }
  | { onChange?: TMultiSelectValueOnChange; onChangeReturnValue: "value" };

export type TSelectGetItemDisabled<ITEM> = (item: ITEM) => boolean | undefined;
export type TSelectGetItemValue<ITEM> = (item: ITEM | null) => TSelectSingleValue | null;
export type TSelectGetItemLabel<Item> = (item: Item) => string;

export type TSingleSelectProps<ITEM,> =  TSingleSelectOnChange<ITEM> & {
  value?: ITEM | TSelectSingleValue | null;
  isMulti?: undefined | false
}

export type TMultiSelectProps<ITEM> = TMultiSelectOnChange & {
  value?: ITEM[] | TSelectSingleValue[] | null;
  isMulti: true
}

export type TSelectProps<
  ITEM,
> =  (TSingleSelectProps<ITEM> | TMultiSelectProps<ITEM>) & {
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
  onClear?: () => void;
  isClearable?: boolean;
  getItemDisabled?: TSelectGetItemDisabled<ITEM>;
  getItemValue?: TSelectGetItemValue<ITEM>;
  getItemLabel?: TSelectGetItemLabel<ITEM>;
  style?: CSSProperties;
  messageNoData?: string;
  notFoundContent?: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  isLoading?: boolean;
  isAutoFocus?: boolean;
};
