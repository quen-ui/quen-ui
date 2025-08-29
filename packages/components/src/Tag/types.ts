import React from "react";
import { TQuenSize } from "../types/size";

export interface ITagProps {
  /** Disables interaction */
  isDisabled?: boolean;
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
  /** Content */
  children: React.ReactNode;
  [key: string]: any;
}
