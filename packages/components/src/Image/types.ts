import React from "react";

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
  [key: string]: any;
}
