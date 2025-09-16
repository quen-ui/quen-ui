import type { TQuenSize } from "../types/size";

export const LOADER_VIEW = ["bars", "dots", "oval"] as const;

export type TLoaderView = typeof LOADER_VIEW[number];

export interface ILoaderProps {
  /** Visual style of the loading indicator */
  view?: TLoaderView;
  /** Size of the loading indicator */
  size?: TQuenSize | number;
  /** Additional classname */
  className?: string;
}
