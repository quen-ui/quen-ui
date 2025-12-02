import type { ReactNode } from "react";
import type { ILoaderProps } from "../Loader";

export interface ILoadingOverlayProps {
  /** Whether to show overlay */
  loading?: boolean;
  /** Text under the spinner */
  label?: string;
  /** Should I darken the background */
  backdrop?: boolean;
  /** Control rendering via children */
  children?: ReactNode;
  /** Visual style of the loading indicator */
  loaderVariant?: ILoaderProps["view"];
  /** Controls overlay */
  zIndex?: number
}
