import type { ReactNode, CSSProperties, ReactElement } from "react";
import type { TQuenSize } from "../types/size";
import type { IFlexProps } from "../Flex";

type TSkeletonSemantic = "root" | "line" | "header" | "text";

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
  /** @deprecated - use classNames
   * Additional classname */
  className?: string;
  /** @deprecated - use styles
   * Additional style */
  style?: CSSProperties;
  /** Customize class for each semantic structure inside the component */
  classNames?: Partial<Record<TSkeletonSemantic, string>>;
  /** Customize inline style for each semantic structure inside the component. */
  styles?: Partial<Record<TSkeletonSemantic, CSSProperties>>;
}

export interface ISkeletonButtonProps
  extends Omit<ISkeletonProps, "height" | "variant"> {
  /** Button size */
  size?: TQuenSize;
}

export type TSkeletonListProps = IFlexProps &
  Pick<ISkeletonProps, "loading"| "classNames" | "styles"> & {
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
