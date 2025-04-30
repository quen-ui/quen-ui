import React from "react";
import { TQuenSize } from "../types/size";

export interface IAlertProps {
  title?: React.ReactNode;
  action?: React.ReactNode;
  isClosable?: boolean;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  onClose?: React.MouseEventHandler;
  type?: "success" | "warning" | "danger" | "info";
  size?: TQuenSize;
  className?: string;
  style?: React.CSSProperties;
}
