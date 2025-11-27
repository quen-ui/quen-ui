import type { ReactNode, CSSProperties, ReactElement } from "react";
import type { TQuenSize } from "../types/size";
import { IFlexProps } from "../Flex";

export type TSkeletonAnimation = "pulse" | "shimmer" | "none";
export type TSkeletonVariant = "text" | "circle" | "rect" | "rounded";
export interface ISkeletonProps {
  width?: number | string;
  height?: number | string;
  variant?: TSkeletonVariant;
  animation?: TSkeletonAnimation;
  lines?: number;
  loading?: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export interface ISkeletonButtonProps
  extends Omit<ISkeletonProps, "height" | "variant"> {
  size?: TQuenSize;
}

export type TSkeletonListProps = IFlexProps &
  Pick<ISkeletonProps, "loading"> & {
    count: number;
    skeleton: ReactElement;
  };

export interface ISkeletonLayoutSchema {
  avatar?: boolean | number | { size: TQuenSize };
  title?: boolean | number;
  text?: number;
  button?: boolean | number | { width: number; size: TQuenSize };
  custom?: ReactNode;
}

export interface ISkeletonLayoutProps {
  schema?: ISkeletonLayoutSchema;
  children?: ReactNode;
  loading?: boolean;
  gap?: number | TQuenSize;
  direction?: "row" | "column";
  style?: CSSProperties;
  animation?: TSkeletonAnimation;
  className?: string;
}

export interface ISkeletonAvatarProps
  extends Pick<
    ISkeletonProps,
    "loading" | "className" | "style" | "children" | "animation"
  > {
  size?: TQuenSize;
}
