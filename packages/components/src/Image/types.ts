import React, { type CSSProperties } from "react";

type TImageSemantic = "root" | "placeholder" | "image" | "loader" | "preview" | "fullscreenOverlay" | "fullscreen" | "close";

export interface IImageProps {
  /** Alternative text for accessibility */
  alt?: string;
  /** Fallback image URL when main fails to load */
  fallback?: string;
  /** Image height */
  height?: number | string;
  /** Custom placeholder while loading */
  placeholder?: React.ReactNode;
  /** Enables lightbox preview on click */
  preview?: boolean;
  /** Image source URL */
  src?: string;
  /** Image width */
  width?: number | string;
  /** Error handler for failed loads */
  onError?: (event: React.SyntheticEvent) => void;
  /** @deprecated - use classNames
   * Custom class */
  className?: string;
  /** @deprecated - use styles
   * Inline styles */
  style?: CSSProperties;
  /** Customize class for each semantic structure inside the component */
  classNames?: Partial<Record<TImageSemantic, string>>;
  /** Customize inline style for each semantic structure inside the component. */
  styles?: Partial<Record<TImageSemantic, CSSProperties>>;
  [key: string]: any;
}
