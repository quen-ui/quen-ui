import React from "react";
import type { InputNumberProps } from "rc-input-number";
import type { TQuenSize } from "../types/size";
import type { IInputBaseProps} from "../InputBase";

export type TInputNumberFormatter = InputNumberProps["formatter"];
export type TInputNumberParser = InputNumberProps["parser"];

export interface IInputNumberProps extends IInputBaseProps {
  /** Initial uncontrolled value */
  defaultValue?: number;
  /** Controlled input value */
  value?: number | null;
  /** Decimal separator character */
  decimalSeparator?: string;
  /** Placeholder text */
  placeholder?: string;
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
  /** Form input name */
  name?: string;
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
}
