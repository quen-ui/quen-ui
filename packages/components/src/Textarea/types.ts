import React from "react";
import type { TQuenSize } from "../types/size";
import {type IInputBaseProps } from "../InputBase"

export interface ITextareaProps extends IInputBaseProps {
  /** Placeholder text */
  placeholder?: string;
  /** Form textarea name */
  name?: string;
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
}
