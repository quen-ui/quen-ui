import React from "react";
import type { TQuenSize } from "../types/size";

export interface ITextareaProps {
  size?: TQuenSize;
  label?: string;
  isRequired?: boolean;
  error?: string | boolean;
  placeholder?: string;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  isDisabled?: boolean;
  id?: string;
  name?: string;
  className?: string;
  onBlur?: React.FocusEventHandler;
  onFocus?: React.FocusEventHandler;
  onChange?: (
    value: string,
    event:
      | React.ChangeEvent
  ) => void;
  onClear?: (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  value?: string;
  isClearable?: boolean;
  classNameTextarea?: string;
  autosize?: boolean;
  maxRows?: number;
  minRows?: number;
}
