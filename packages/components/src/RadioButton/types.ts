import React, { ChangeEvent } from "react";
import { TQuenSize } from "../types/size"

export interface IRadioButtonProps {
  /** Controlled checked state */
  checked?: boolean;
  /** Disables interaction */
  disabled?: boolean;
  /** Form value when selected */
  value?: string | number;
  /** 	Change event handler */
  onChange?: (isChecked: boolean, event: ChangeEvent<HTMLInputElement>) => void;
  /** Right-aligned label content */
  label?: React.ReactNode;
  /** Group identifier for forms */
  name?: string;
  /** Custom CSS class */
  className?: string;
  /** Visual size */
  size?: TQuenSize;
  /** DOM identifier */
  id?: string;
}

export interface IRadioGroupDefaultItem {
  key?: string | number;
  label: string;
  disabled?: boolean;
  value: string | number;
}

export type TRadioGroupPropGetItemKey<TItem> = (
  item: TItem
) => string | number | undefined;

export type TRadioGroupPropGetItemLabel<TItem> = (item: TItem) => React.ReactNode;
export type TRadioGroupPropGetItemDisabled<TItem> = (
  item: TItem
) => boolean | undefined;
export type TRadioGroupPropGetItemValue<TItem> = (
  item: TItem
) => string | number;

export interface IRadioGroupProps<TItem = IRadioGroupDefaultItem> {
  /** Group label */
  label?: React.ReactNode;
  /** Currently selected value */
  value?: string | number;
  /** Uniform size for all radios */
  size?: TQuenSize;
  /** Disables entire group */
  disabled?: boolean;
  /** Data source for radio items */
  options: TItem[];
  /** Group identifier for forms */
  name?: string;
  /** Layout orientation */
  direction?: "vertical" | "horizontal";
  /**	Selection change handler */
  onChange?: (value: string | number, event: ChangeEvent<HTMLInputElement>) => void;
  /** Custom CSS class */
  className?: string;
  /** Unique key extractor */
  getItemKey?: TRadioGroupPropGetItemKey<TItem>;
  /** Label text extractor */
  getItemLabel?: TRadioGroupPropGetItemLabel<TItem>;
  /** Disabled state extractor */
  getItemDisabled?: TRadioGroupPropGetItemDisabled<TItem>;
  /** Value extractor */
  getItemValue?: TRadioGroupPropGetItemValue<TItem>;
  /** Marks group as required */
  required?: boolean;
  /** Validation error message */
  error?: string;
}
