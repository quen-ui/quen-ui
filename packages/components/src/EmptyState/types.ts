import { CSSProperties, ReactNode } from "react";

export interface IEmptyStateProps {
  title?: string;
  description?: ReactNode;
  image?: ReactNode;
  imageStyle?: CSSProperties;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}
