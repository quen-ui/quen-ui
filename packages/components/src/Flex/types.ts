import React from "react";
import { ITheme } from "@quen-ui/theme";

export interface IFlexProps {
  children?: React.ReactNode;
  gap?: keyof ITheme["space"] | number;
  align?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly";
  columnGap?: keyof ITheme["space"] | number;
  rowGap?: keyof ITheme["space"] | number;
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
