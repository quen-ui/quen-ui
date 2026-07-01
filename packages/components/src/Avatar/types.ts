import type { CSSProperties, ReactNode, ComponentPropsWithoutRef } from "react";
import { TQuenSize } from "../types/size";

type TAvatarSemantic =
  | "root"
  | "avatar"
  | "icon"
  | "label"
  | "name"
  | "description";

export interface IAvatarProps {
  /** @deprecated
   * This property is deprecated. Use {@link classNames} instead.
   * Additional classname */
  className?: string;
  /** Controls avatar dimensions */
  size?: TQuenSize;
  /** Image URL (falls back to initials/icon) */
  src?: string;
  /** Alt text for image */
  alt?: string;
  /** Custom fallback content (overrides default icon) */
  children?: ReactNode;
  /** @deprecated
   * This property is deprecated. Use {@link styles} instead.
   * Additional style */
  style?: CSSProperties;
  /** Alt text for image */
  imageProps?: ComponentPropsWithoutRef<"img">;
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
  /** Customize class for each semantic structure inside the component */
  classNames?: Partial<Record<TAvatarSemantic, string>>;
  /** Customize inline style for each semantic structure inside the component. */
  styles?: Partial<Record<TAvatarSemantic, CSSProperties>>;
  [key: string]: any;
}
