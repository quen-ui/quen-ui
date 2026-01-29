import { CSSProperties, ReactNode } from "react";
import { TQuenSize } from "../types/size";

export interface IInputBaseProps {
  /** Disable input interaction */
  disabled?: boolean;
  /** Control input size */
  size?: TQuenSize;
  /** Input label text */
  label?: string;
  /** Mark as required field */
  required?: boolean;
  /** Error message or error state flag */
  error?: string | boolean;
  /** Left adornment (icon/prefix) */
  leftContent?: ReactNode;
  /** Determines the visual display mode of leftContent */
  leftContentVariant?: "icon" | "text" | "addon";
  /** Right adornment (icon/suffix) */
  rightContent?: ReactNode;
  /** Determines the visual display mode of rightContent */
  rightContentVariant?: "icon" | "text" | "addon";
  /** DOM ID for label association */
  id?: string;
  /** Container class name */
  className?: string;
  /** 	Show clear button */
  style?: CSSProperties;
  [key: string]: any;
}
