import React, { CSSProperties } from "react";
import { TQuenSize } from "../types/size";

type TSwitchSemantic = "root" | "label" | "indicator" | "icon";

export interface ISwitchProps {
  /** Controlled state (on/off) */
  value?: boolean;
  /** @deprecated
   * This property is deprecated. Use {@link classNames} instead.
   * Additional classname */
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
  /** @deprecated
   * This property is deprecated. Use {@link styles} instead.
   * Additional style */
  style?: CSSProperties;
  /** Icon inside the thumb of the switch */
  thumbIcon?: React.ReactNode;
  /** Customize class for each semantic structure inside the component */
  classNames?: Partial<Record<TSwitchSemantic, string>>;
  /** Customize inline style for each semantic structure inside the component. */
  styles?: Partial<Record<TSwitchSemantic, CSSProperties>>;
  id?: string;
  [key: string]: any;
}
