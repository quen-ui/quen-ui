import React from "react";
import { InputNumberProps } from "rc-input-number";
import { TQuenSize } from "../types/size";

export type TInputNumberFormatter = InputNumberProps["formatter"];
export type TInputNumberParser = InputNumberProps["parser"];

export interface IInputNumberProps {
  defaultValue?: number;
  value?: number;
  decimalSeparator?: string;
  placeholder?: string;
  isDisabled?: boolean;
  max?: number;
  min?: number;
  size?: TQuenSize;
  step?: number;
  isAllowNegative?: boolean;
  onChange?: (value: number | string | null) => void;
  label?: string;
  isRequired?: boolean;
  error?: string | boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  id?: string;
  name?: string;
  className?: string;
  onBlur?: React.FocusEventHandler;
  onFocus?: React.FocusEventHandler;
  classNameInput?: string;
  isClearable?: boolean;
  isAutoFocus?: boolean;
  formatter?: TInputNumberFormatter;
  parser?: TInputNumberParser;
}
