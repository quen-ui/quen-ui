import React from "react";
import type { TQuenSize } from "../types/size";

export interface ITextFieldProps {
  /** Visual size */
  size?: TQuenSize;
  /** Input label */
  label?: string;
  /** Marks as required */
  required?: boolean;
  /** Error state/message */
  error?: string | boolean;
  /** Placeholder text */
  placeholder?: string;
  /** Left-side adornment */
  leftContent?: React.ReactNode;
  /** Right-side adornment */
  rightContent?: React.ReactNode;
  /** Disables interaction */
  disabled?: boolean;
  /** DOM ID for input */
  id?: string;
  /** Form input name */
  name?: string;
  /** Container class */
  className?: string;
  /** Blur event handler */
  onBlur?: React.FocusEventHandler;
  /** Focus event handler */
  onFocus?: React.FocusEventHandler;
  /** Value change handler */
  onChange?: (
    value: string,
    event:
      | React.ChangeEvent
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
  /** Clear button handler */
  onClear?: (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
  /** Controlled input value */
  value?: string;
  /** Shows clear button */
  clearable?: boolean;
  /** Input element class */
  classNameInput?: string;
  type?: React.HTMLInputTypeAttribute;
}
