import React, { CSSProperties } from "react";
import type { IQuenUITheme } from "@quen-ui/theme";
import type { TQuenSize } from "../types/size"

type TTagSemantic = "root" | "content" | "icon" | "close";

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
  /** @deprecated - use classNames
   * Custom CSS class */
  className?: string;
  /** @deprecated - use styles */
  style?: CSSProperties;
  /** Content */
  children: React.ReactNode;
  /** Controls track height. Default size 'm' */
  size?: TQuenSize;
  /** Background color from theme tokens */
  color?: keyof IQuenUITheme["colors"];
  /** Customize class for each semantic structure inside the component */
  classNames?: Partial<Record<TTagSemantic, string>>;
  /** Customize inline style for each semantic structure inside the component. */
  styles?: Partial<Record<TTagSemantic, CSSProperties>>;
  [key: string]: any;
}
