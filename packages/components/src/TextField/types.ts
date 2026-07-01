import React, { CSSProperties } from "react";
import type { IInputBaseProps, TInputBaseSemantic } from "../InputBase";

export type TTextFieldSemantic = TInputBaseSemantic | "input" | "clear";

export interface ITextFieldProps extends IInputBaseProps {
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
  /** @deprecated - use classNames
   *
   * Input element class */
  classNameInput?: string;
  type?: React.HTMLInputTypeAttribute;
  /** Customize class for each semantic structure inside the component */
  classNames?: Partial<Record<TTextFieldSemantic, string>>;
  /** Customize inline style for each semantic structure inside the component. */
  styles?: Partial<Record<TTextFieldSemantic, CSSProperties>>;
}
