import React, { CSSProperties } from "react";
import { type IInputBaseProps, type TInputBaseSemantic } from "../InputBase";

export type TTextareaSemantic = TInputBaseSemantic | "input" | "clear";

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
  onChange?: (value: string, event: React.ChangeEvent) => void;
  /** Clear button handler */
  onClear?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
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
  /** Customize class for each semantic structure inside the component */
  classNames?: Partial<Record<TTextareaSemantic, string>>;
  /** Customize inline style for each semantic structure inside the component. */
  styles?: Partial<Record<TTextareaSemantic, CSSProperties>>;
}
