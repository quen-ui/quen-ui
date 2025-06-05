import React from "react";
import { IQuenUITheme } from "@quen-ui/theme";

export interface IFlexProps {
  className?: string;
  children?: React.ReactNode;
  gap?: keyof IQuenUITheme["space"] | number;
  align?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly";
  columnGap?: keyof IQuenUITheme["space"] | number;
  rowGap?: keyof IQuenUITheme["space"] | number;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
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
