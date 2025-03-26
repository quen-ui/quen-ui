import React, { ChangeEvent } from "react";
import { TQuenSize } from "../types/size"

export interface IRadioButtonProps {
  isChecked?: boolean;
  isDisabled?: boolean;
  value?: string | number;
  onChange?: (isChecked: boolean, event: ChangeEvent<HTMLInputElement>) => void;
  label?: React.ReactNode;
  name?: string;
  className?: string;
  size?: TQuenSize;
  id?: string;
}

export interface IRadioGroupDefaultItem {
  key?: string | number;
  label: string;
  isDisabled?: boolean;
  value: string | number;
}

export type TRadioGroupPropGetItemKey<TItem> = (
  item: TItem
) => string | number | undefined;

export type TRadioGroupPropGetItemLabel<TItem> = (item: TItem) => string;
export type TRadioGroupPropGetItemDisabled<TItem> = (
  item: TItem
) => boolean | undefined;
export type TRadioGroupPropGetItemValue<TItem> = (
  item: TItem
) => string | number;

export interface IRadioGroupProps<TItem = IRadioGroupDefaultItem> {
  label?: React.ReactNode;
  value?: string | number;
  size?: TQuenSize;
  isDisabled?: boolean;
  options: TItem[];
  name?: string;
  direction?: "vertical" | "horizontal";
  onChange?: (value: string | number, event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  getItemKey?: TRadioGroupPropGetItemKey<TItem>;
  getItemLabel?: TRadioGroupPropGetItemLabel<TItem>;
  getItemDisabled?: TRadioGroupPropGetItemDisabled<TItem>;
  getItemValue?: TRadioGroupPropGetItemValue<TItem>;
  isRequired?: boolean;
  error?: string;
}
