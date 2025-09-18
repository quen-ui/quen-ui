import React from "react";
import { InputNumberProps } from "rc-input-number";
import { TQuenSize } from "../types/size";

export type TInputNumberFormatter = InputNumberProps["formatter"];
export type TInputNumberParser = InputNumberProps["parser"];

export interface IInputNumberProps {
  /** Initial uncontrolled value */
  defaultValue?: number;
  /** Controlled input value */
  value?: number | null;
  /** Decimal separator character */
  decimalSeparator?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Disable input interaction */
  disabled?: boolean;
  /** Maximum allowed value */
  max?: number;
  /** Minimum allowed value */
  min?: number;
  /** Control input size */
  size?: TQuenSize;
  /** Increment/decrement step value */
  step?: number;
  /** Allow negative values */
  allowNegative?: boolean;
  /** Value change handler */
  onChange?: (value: number | string | null) => void;
  /** Input label text */
  label?: string;
  /** Mark as required field */
  required?: boolean;
  /** Error message or error state flag */
  error?: string | boolean;
  /** Left adornment (icon/prefix) */
  leftContent?: React.ReactNode;
  /** 	Right adornment (icon/suffix) */
  rightContent?: React.ReactNode;
  /** DOM ID for label association */
  id?: string;
  /** Form input name */
  name?: string;
  /** Container class name */
  className?: string;
  /** Blur event handler */
  onBlur?: React.FocusEventHandler;
  /** Focus event handler */
  onFocus?: React.FocusEventHandler;
  /** Input element class name */
  classNameInput?: string;
  /** 	Show clear button */
  clearable?: boolean;
  /** Auto-focus on mount */
  isAutoFocus?: boolean;
  /** Value display formatter (value: number) => strin */
  formatter?: TInputNumberFormatter;
  /** Input parser (displayValue: string) => number */
  parser?: TInputNumberParser;
  onClear?: (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
  [key: string]: any;
}
