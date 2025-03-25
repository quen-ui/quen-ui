import React, { ChangeEvent } from "react";
import { TQuenSize } from "../types/size"

export interface ICheckboxProps {
  isChecked?: boolean;
  isDisabled?: boolean;
  value?: string | number;
  onChange?: (isChecked: boolean, event: ChangeEvent<HTMLInputElement>) => void;
  label?: React.ReactNode;
  name?: string;
  className?: string;
  size?: TQuenSize;
  id?: string;
  isIntermediate?: boolean;
}

export interface ICheckboxGroupDefaultItem {
  key?: string | number;
  label: string;
  isDisabled?: boolean;
  value: string | number;
}

export type TCheckboxGroupPropGetItemKey<TItem> = (
  item: TItem
) => string | number | undefined;

export type TCheckboxGroupPropGetItemLabel<TItem> = (item: TItem) => string;
export type TCheckboxGroupPropGetItemDisabled<TItem> = (
  item: TItem
) => boolean | undefined;
export type TCheckboxGroupPropGetItemValue<TItem> = (
  item: TItem
) => string | number;

export interface ICheckboxGroupProps<TItem = ICheckboxGroupDefaultItem> {
  label?: React.ReactNode;
  value?: (string | number)[];
  size?: TQuenSize;
  isDisabled?: boolean;
  options: TItem[];
  name?: string;
  direction?: "vertical" | "horizontal";
  onChange?: (value: (string | number)[], event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  getItemKey?: TCheckboxGroupPropGetItemKey<TItem>;
  getItemLabel?: TCheckboxGroupPropGetItemLabel<TItem>;
  getItemDisabled?: TCheckboxGroupPropGetItemDisabled<TItem>;
  getItemValue?: TCheckboxGroupPropGetItemValue<TItem>;
  isRequired?: boolean;
  error?: string;
}
