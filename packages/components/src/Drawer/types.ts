import React from "react";
import { TQuenSize } from "../types/size";

export interface IDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  className?: string;
  closeIcon?: React.ReactNode;
  size?: TQuenSize | "full";
  zIndex?: number;
  position?: "left" | "right" | "top" | "bottom";
  children?: React.ReactNode;
  noCloseOnClickOutside?: boolean;
}
