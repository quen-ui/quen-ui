import React, { type CSSProperties } from "react";
import type { IInputBaseProps, TInputBaseSemantic } from "../InputBase";
import type {
  TCalendarSingleProps,
  TCalendarBaseProps,
  TCalendarRangeProps,
  TCalendarSemantic,
} from "../Calendar";

type TInputDateSemantic = TInputBaseSemantic;

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

interface IInputBaseStylesProps {
  /** Customize class for each semantic structure inside the component */
  classNames?: Partial<
    Record<TInputDateSemantic, string> & {
      calendar: Partial<Record<TCalendarSemantic, string>>;
    }
  >;
  /** Customize inline style for each semantic structure inside the component. */
  styles?: Partial<
    Record<TInputDateSemantic, CSSProperties> & {
      calendar: Partial<Record<TCalendarSemantic, CSSProperties>>;
    }
  >;
}

export type TInputDateProps =
  | (IInputBaseProps &
      TCalendarBaseProps &
      TInputDateBaseProps &
      TCalendarSingleProps &
      IInputBaseStylesProps)
  | (IInputBaseProps &
      TCalendarBaseProps &
      TInputDateBaseProps &
      TCalendarRangeProps &
      IInputBaseStylesProps);
