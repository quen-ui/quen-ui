import React from "react";
import type { IQuenUITheme } from "@quen-ui/theme";
import type { TQuenSize } from "../types/size"

export interface ITagProps {
  /** Disables interaction */
  disabled?: boolean;
  /** Left-aligned icon */
  icon?: React.ReactNode;
  /** Whole tag click handler */
  onClick?: React.MouseEventHandler;
  /** Shows close button */
  closable?: boolean;
  /** Close button handler */
  onClickClose?: React.MouseEventHandler;
  /** Custom CSS class */
  className?: string;
  /** Content */
  children: React.ReactNode;
  /** Controls track height. Default size 'm' */
  size?: TQuenSize;
  /** Background color from theme tokens */
  color?: keyof IQuenUITheme["colors"]
  [key: string]: any;
}
