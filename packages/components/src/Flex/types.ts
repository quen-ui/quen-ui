import React, { RefObject } from "react";
import { IQuenUITheme } from "@quen-ui/theme";

export interface IFlexProps {
  /**	Custom CSS class */
  className?: string;
  /** Content */
  children?: React.ReactNode;
  /** Spacing between all children (CSS gap) */
  gap?: keyof IQuenUITheme["space"] | number;
  /** Cross-axis alignment (align-items) */
  align?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly";
  /** Horizontal spacing between columns */
  columnGap?: keyof IQuenUITheme["space"] | number;
  /** Vertical spacing between rows */
  rowGap?: keyof IQuenUITheme["space"] | number;
  /** Main axis direction */
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  /** Main-axis alignment (justify-content) */
  justify?:
    | "start"
    | "center"
    | "end"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
}
