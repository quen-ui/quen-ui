import React from "react";
import type { IInputBaseProps } from "../InputBase";
import type {
  TCalendarSingleProps,
  TCalendarBaseProps,
  TCalendarRangeProps
} from "../Calendar";

export type TInputDateBaseProps = {
  /** Placeholder text */
  placeholder?: string | [string, string];
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
  onClear?: (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;

  dateFormat?: "dd.mm.yyyy" | "yyyy-mm-dd" | "mm/dd/yyyy";
  valueFormatter?: (raw: string) => string;
};

export type TInputDateProps =
  | (IInputBaseProps &
      TCalendarBaseProps &
      TInputDateBaseProps &
      TCalendarSingleProps)
  | (IInputBaseProps &
      TCalendarBaseProps &
      TInputDateBaseProps &
      TCalendarRangeProps);
