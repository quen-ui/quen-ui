import React, { ChangeEvent } from "react";
import { TQuenSize } from "../types/size"

export interface ICheckboxProps {
  /** Controlled checked state */
  checked?: boolean;
  /** Disables interaction */
  disabled?: boolean;
  /** Form submission value */
  value?: string | number;
  /** Change event handler */
  onChange?: (isChecked: boolean, event: ChangeEvent<HTMLInputElement>) => void;
  /** Custom label content (supports JSX */
  label?: React.ReactNode;
  /** Form input name */
  name?: string;
  /** Additional CSS class */
  className?: string;
  /** Controls checkbox dimensions */
  size?: TQuenSize;
  /** DOM ID for label association */
  id?: string;
  /** Shows "indeterminate" state (─) */
  intermediate?: boolean;
  [key: string]: any;
}

export interface ICheckboxGroupDefaultItem {
  key?: string | number;
  label: string;
  disabled?: boolean;
  value: string | number;
}

export type TCheckboxGroupPropGetItemKey<TItem> = (
  item: TItem
) => string | number | undefined;

export type TCheckboxGroupPropGetItemLabel<TItem> = (item: TItem) => React.ReactNode;
export type TCheckboxGroupPropGetItemDisabled<TItem> = (
  item: TItem
) => boolean | undefined;
export type TCheckboxGroupPropGetItemValue<TItem, VALUE extends (string | number) = string | number> = (
  item: TItem
) => VALUE;

export interface ICheckboxGroupProps<ITEM = ICheckboxGroupDefaultItem, VALUE extends (string | number) = string | number> {
  /** Group heading label */
  label?: React.ReactNode;
  /** Currently selected values */
  value?: VALUE[];
  /** Controls checkbox sizes */
  size?: TQuenSize;
  /** Disables entire group */
  disabled?: boolean;
  /** Array of checkbox items */
  options: ITEM[];
  /** Group name for form submission */
  name?: string;
  /** Layout orientation */
  direction?: "vertical" | "horizontal";
  /** Selection change handler */
  onChange?: (value: VALUE[], event: ChangeEvent<HTMLInputElement>) => void;
  /** Custom CSS class */
  className?: string;
  /** 	Unique key generator */
  getItemKey?: TCheckboxGroupPropGetItemKey<ITEM>;
  /** Label renderer */
  getItemLabel?: TCheckboxGroupPropGetItemLabel<ITEM>;
  /** Disable state checker */
  getItemDisabled?: TCheckboxGroupPropGetItemDisabled<ITEM>;
  /** Value extractor */
  getItemValue?: TCheckboxGroupPropGetItemValue<ITEM, VALUE>;
  /** Marks as required field */
  required?: boolean;
  /** Validation error message */
  error?: string;
}
