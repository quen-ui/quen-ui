import React, { ChangeEvent } from "react";
import { TQuenSize } from "../types/size"

export interface ICheckboxProps {
  isChecked?: boolean;
  isDisabled?: boolean;
  value?: string;
  onChange?: (isChecked: boolean, event: ChangeEvent<HTMLInputElement>) => void;
  label?: React.ReactNode;
  name?: string;
  className?: string;
  size?: TQuenSize;
  id?: string;
  isIntermediate?: boolean;
}
