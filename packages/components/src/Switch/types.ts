import React, { CSSProperties } from "react";
import { TQuenSize } from "../types/size";

export interface ISwitchProps {
  /** Controlled state (on/off) */
  value?: boolean;
  /** Container class */
  className?: string;
  /** Initial state (uncontrolled) */
  defaultChecked?: boolean;
  /** State change handler */
  onChange?: (value: boolean, event: React.ChangeEvent) => void;
  /** Click event handler */
  onClick?: (value: boolean, event: React.MouseEvent) => void;
  /** Visual size */
  size?: TQuenSize;
  /** Descriptive text */
  label?: string;
  /** Disables interaction */
  disabled?: boolean;
  /** Label placement relative to switch */
  labelPosition?: "after" | "before";
  /** Inline styles */
  style?: CSSProperties;
  /** Icon inside the thumb of the switch */
  thumbIcon?: React.ReactNode;
  [key: string]: any;
}
