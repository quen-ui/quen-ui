import type { ReactNode, CSSProperties } from "react";

export interface ISpoilerProps {
  /** Maximum height when closed */
  maxHeight?: number;
  /** Initial state - open or closed */
  initiallyOpen?: boolean;
  /** Controlled state */
  open?: boolean;
  /** Callback on state change */
  onOpenChange?: (open: boolean) => void;
  /** Button text of show */
  showLabel?: string;
  /** Button text of hide */
  hideLabel?: string;
  /** Spoiler content */
  children: ReactNode;
  /** Additional classname */
  className?: string;
  /** Additional style */
  style?: CSSProperties;
  /** Spoiler reveal transition duration in ms */
  transitionDuration?: number;
}
