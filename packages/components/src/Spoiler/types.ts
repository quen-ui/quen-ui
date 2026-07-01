import type { ReactNode, CSSProperties } from "react";

type TSpoilerSemantic = "root" | "content" | "toggle";

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
  /** @deprecated
   * This property is deprecated. Use {@link classNames} instead.
   * Additional classname */
  className?: string;
  /** @deprecated
   * This property is deprecated. Use {@link styles} instead.
   * Additional style */
  style?: CSSProperties;
  /** Spoiler reveal transition duration in ms */
  transitionDuration?: number;
  /** Customize class for each semantic structure inside the component */
  classNames?: Partial<Record<TSpoilerSemantic, string>>;
  /** Customize inline style for each semantic structure inside the component. */
  styles?: Partial<Record<TSpoilerSemantic, CSSProperties>>;
}
