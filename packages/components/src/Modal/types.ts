import React from "react";
import { TQuenSize } from "../types/size";

export interface IModalProps {
  isOpen: boolean;
  size?: TQuenSize;
  className?: string;
  title?: React.ReactNode;
  isCloseButton?: boolean;
  isFullScreen?: boolean;
  onClickClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  zIndex?: number;
  onEsc?: () => void;
  description?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}
