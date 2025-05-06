import React from "react";
import { TQuenSize } from "../types/size";

export interface IAvatarProps {
  className?: string;
  size?: TQuenSize;
  src?: string;
  alt?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  imageProps?: React.ComponentPropsWithoutRef<"img">;
  status?: "online" | "offline";
  name?: string;
  description?: string;
  isLabel?: boolean;
  color?: string;
  allowedInitialsColors?: string[];
}
