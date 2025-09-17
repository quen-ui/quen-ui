import React from "react";
import { TQuenSize } from "../types/size";

export interface IAvatarProps {
  /** 	Additional CSS class */
  className?: string;
  /** Controls avatar dimensions */
  size?: TQuenSize;
  /** Image URL (falls back to initials/icon) */
  src?: string;
  /** Alt text for image */
  alt?: string;
  /** Custom fallback content (overrides default icon) */
  children?: React.ReactNode;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Alt text for image */
  imageProps?: React.ComponentPropsWithoutRef<"img">;
  /**  Status indicator badge*/
  status?: "online" | "offline";
  /** Used for initials generation */
  name?: string;
  /** Secondary text for label */
  description?: string;
  /** Shows name/description beside avatar */
  label?: boolean;
  /** Custom background color (overrides auto-generated) */
  color?: string;
  /** 	Palette for auto-generated initials background */
  allowedInitialsColors?: string[];
  [key: string]: any;
}
