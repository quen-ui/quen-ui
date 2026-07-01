import { CSSProperties, ReactNode } from "react";
import { TQuenSize } from "../types/size";

export type TInputBaseSemantic = "root" | "label" | "container" | "leftContent" | "rightContent" | "error";

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
  /** @deprecated - use classNames
   * Container class name */
  className?: string;
  /** @deprecated - use styles */
  style?: CSSProperties;
  /** Customize class for each semantic structure inside the component */
  classNames?: Partial<Record<TInputBaseSemantic, string>>;
  /** Customize inline style for each semantic structure inside the component. */
  styles?: Partial<Record<TInputBaseSemantic, CSSProperties>>;
  [key: string]: any;
}
