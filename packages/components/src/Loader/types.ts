import type { TQuenSize } from "../types/size";

export const LOADER_VIEW = ["bars", "dots", "oval"] as const;

export type TLoaderView = typeof LOADER_VIEW[number];

export interface ILoaderProps {
  view?: TLoaderView;
  size?: TQuenSize | number;
}
