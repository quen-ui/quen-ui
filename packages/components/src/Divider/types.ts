export const DIVIDER_VIEW = ["primary","disabled", "danger", "warning", "success"] as const;

export type TDividerView = typeof DIVIDER_VIEW[number];


export interface IDividerProps {
  className?: string;
  view?: TDividerView;
  direction: "horizontal" | "vertical";
  align?: "left" | "center" | "right";
  width?: string;
  height?: string;
}
