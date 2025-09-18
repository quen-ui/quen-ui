export const DIVIDER_VIEW = ["primary","disabled", "danger", "warning", "success"] as const;

export type TDividerView = typeof DIVIDER_VIEW[number];

export interface IDividerProps {
  /** Additional CSS class */
  className?: string;
  /** Visual style variant */
  view?: TDividerView;
  /** Orientation of divider */
  direction: "horizontal" | "vertical";
  /** Horizontal alignment (ignored in vertical mode  */
  align?: "left" | "center" | "right";
  /** Custom width (horizontal dividers) */
  width?: string;
  /** Custom height (vertical dividers) */
  height?: string;
  [key: string]: any;
}
