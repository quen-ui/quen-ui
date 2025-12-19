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
  /** Current value or range */
  value?: TSliderValue;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** The moving step includes a snap magnet */
  step?: number;
  /** Called when the value changes */
  onChange?: (value: TSliderValue) => void;
  /** Show tooltip above thumbs */
  showTooltip?: boolean;
  /** Enables range mode */
  range?: boolean;
  /** Orientation */
  orientation?: "horizontal" | "vertical";
  /** Tags and signatures */
  marks?: TSliderMark[];
  /** Allows you to move the entire range */
  draggableTrack?: boolean;
  /** */
  tooltip?: ISliderTooltipProps;
  /** Additional class for container */
  className?: string;
  /** Additional styles */
  style?: CSSProperties;
  /** Disabled mode */
  disabled?: boolean;
  /** Controls color of track and thumb*/
  color?: keyof IQuenUITheme["colors"];
}
