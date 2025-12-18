import React from "react";
import type { IInputBaseProps } from "../InputBase";

export interface ITextFieldProps extends IInputBaseProps{
  /** Placeholder text */
  placeholder?: string;
  /** Form input name */
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
