import type { CSSProperties, ReactNode } from "react";

type TEmptyStateSemantic = "root" | "image" | "title" | "description"

export interface IEmptyStateProps {
  title?: string;
  description?: ReactNode;
  image?: ReactNode;
  imageStyle?: CSSProperties;
  /** @deprecated - use classNames */
  className?: string;
  /** @deprecated - use styles */
  style?: CSSProperties;
  children?: ReactNode;
  /** Customize class for each semantic structure inside the component */
  classNames?: Partial<Record<TEmptyStateSemantic, string>>;
  /** Customize inline style for each semantic structure inside the component. */
  styles?: Partial<Record<TEmptyStateSemantic, CSSProperties>>;
}
