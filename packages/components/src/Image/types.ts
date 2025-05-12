import React from "react";

export interface IImageProps {
  alt?: string;
  fallback?: string;
  height?: number | string;
  placeholder?: React.ReactNode;
  isPreview?: boolean;
  src?: string;
  width?: number | string;
  onError?: (event: React.SyntheticEvent) => void;
}
