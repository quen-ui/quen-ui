import React from "react";
import {TQuenSize} from "../types/size";

export interface ITagProps {
  isDisabled?: boolean;
  size?: TQuenSize;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  isClosable?: boolean;
  onClickClose?: React.MouseEventHandler;
  className?: string;
}
