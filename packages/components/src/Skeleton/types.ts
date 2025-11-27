import type { ReactNode, CSSProperties, ReactElement } from "react";
import type { TQuenSize } from "../types/size";
import { IFlexProps } from "../Flex";

export type TSkeletonAnimation = "pulse" | "shimmer";
export type TSkeletonVariant = "text" | "circle" | "rect" | "rounded";
export interface ISkeletonProps {
  /** Skeleton width */
  width?: number | string;
  /** Skeleton height */
  height?: number | string;
  /** Skeleton type */
  variant?: TSkeletonVariant;
  /** Animation */
  animation?: TSkeletonAnimation;
  /** Number of lines for variant="text" */
  lines?: number;
  /** Controls the skeleton/content switch */
  loading?: boolean;
  /** Content displayed when loading=false. */
  children?: ReactNode;
  /** Additional classname */
  className?: string;
  /** Additional style */
  style?: CSSProperties;
}

export interface ISkeletonButtonProps
  extends Omit<ISkeletonProps, "height" | "variant"> {
  /** Button size */
  size?: TQuenSize;
}

export type TSkeletonListProps = IFlexProps &
  Pick<ISkeletonProps, "loading"> & {
    /** Count of elements */
    count: number;
    /** Single element skeleton template */
    skeleton: ReactElement;
  };

export interface ISkeletonLayoutSchema {
  /** Avatar(s) in the layout */
  avatar?: boolean | number | { size: TQuenSize };
  /** Heading lines */
  title?: boolean | number;
  /** Number of lines of text */
  text?: number;
  /** Buttons */
  button?: boolean | number | { width: number; size: TQuenSize };
  /** User node */
  custom?: ReactNode;
}

export interface ISkeletonLayoutProps {
  /** Layout structure */
  schema?: ISkeletonLayoutSchema;
  /** Content after loading */
  children?: ReactNode;
  /** Loading status */
  loading?: boolean;
  /** Indents */
  gap?: number | TQuenSize;
  /** Layout direction */
  direction?: "row" | "column";
  /** Additional style */
  style?: CSSProperties;
  /** Animation */
  animation?: TSkeletonAnimation;
  /** Additional classname */
  className?: string;
}

export interface ISkeletonAvatarProps
  extends Pick<
    ISkeletonProps,
    "loading" | "className" | "style" | "children" | "animation"
  > {
  /** Avatar size */
  size?: TQuenSize;
}
