import type { TQuenSize } from "../types/size";
import type { ITooltipProps } from "../Tooltip";
import type { CSSProperties } from "react";
import type { IQuenUITheme } from "@quen-ui/theme";

export type TSliderSingleValue = number;
export type TSliderRangeValue = [number, number];
export type TSliderValue = TSliderSingleValue | TSliderRangeValue;

export interface TSliderMark {
  value: number;
  label?: string;
  style?: CSSProperties;
  className?: string;
}

export interface ISliderTooltipProps {
  color?: ITooltipProps["color"];
  position?: ITooltipProps["position"];
  zIndex?: ITooltipProps["zIndex"];
  width?: ITooltipProps["width"];
  className?: ITooltipProps["className"];
  classNameContent?: ITooltipProps["classNameContent"];
  open?: ITooltipProps["open"];
}

export interface ISliderProps {
  value?: TSliderValue;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: TSliderValue) => void;
  showTooltip?: boolean;
  size?: TQuenSize;
  range?: boolean;
  orientation?: "horizontal" | "vertical";
  marks?: TSliderMark[];
  draggableTrack?: boolean;
  tooltip?: ISliderTooltipProps;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  color?: keyof IQuenUITheme["colors"];
}
