import React, { CSSProperties } from "react";
import { TQuenSize } from "../types/size";

export interface ISwitchProps {
  value?: boolean;
  className?: string;
  defaultChecked?: boolean;
  onChange?: (value: boolean, event: React.ChangeEvent) => void;
  onClick?: (value: boolean, event: React.MouseEvent) => void;
  size?: TQuenSize;
  label?: string;
  isDisabled?: boolean;
  labelPosition?: "after" | "before";
  style?: CSSProperties;
}
