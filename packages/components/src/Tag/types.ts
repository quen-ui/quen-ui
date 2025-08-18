import React from "react";
import { TQuenSize } from "../types/size";

export interface ITagProps {
  /** Disables interaction */
  isDisabled?: boolean;
  /** Visual size */
  size?: TQuenSize;
  /** Left-aligned icon */
  icon?: React.ReactNode;
  /** Whole tag click handler */
  onClick?: React.MouseEventHandler;
  /** Shows close button */
  isClosable?: boolean;
  /** Close button handler */
  onClickClose?: React.MouseEventHandler;
  /** Custom CSS class */
  className?: string;
  [key: string]: any;
}
