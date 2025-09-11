import React from "react";
import type { TQuenSize } from "../types/size";

export interface ITextareaProps {
  /** Visual size */
  size?: TQuenSize;
  /** Field label */
  label?: string;
  /** Marks as required */
  required?: boolean;
  /** Error state/message */
  error?: string | boolean;
  /** Placeholder text */
  placeholder?: string;
  /** Left adornment */
  leftContent?: React.ReactNode;
  /** Right adornment */
  rightContent?: React.ReactNode;
  /** Disables interaction */
  disabled?: boolean;
  /** DOM ID for textarea  */
  id?: string;
  /** Form textarea name */
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
  ) => void;
  /** Clear button handler */
  onClear?: (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  /** Controlled value */
  value?: string;
  /** Shows clear button */
  clearable?: boolean;
  /** Textarea-specific class */
  classNameTextarea?: string;
  /** Auto-adjusts height */
  autosize?: boolean;
  /** Maximum visible rows */
  maxRows?: number;
  /**	Minimum visible rows */
  minRows?: number;
  [key: string]: any;
}
