import type { CSSProperties } from "react";
import type {
  HslColor,
  HslaColor,
  RgbColor,
  RgbaColor
} from "polished/lib/types/color";
import type { TQuenSize } from "../types/size";
import type { ITextFieldProps } from "../TextField";

export type TColorFormat = "hex" | "hexa" | "rgb" | "rgba" | "hsl" | "hsla";

export type TRgbColor = RgbColor | RgbaColor;

export type THslColor = HslColor | HslaColor;
export type TColorValue = string | TRgbColor | THslColor;

export interface IBaseColorPickerProps {
  value?: TColorValue;
  defaultValue?: TColorValue;
  onChange?: (color: TColorValue) => void;
  onChangeComplete?: (color: TColorValue) => void;
  format?: TColorFormat;
  disabled?: boolean;
  size?: TQuenSize;
  className?: string;
  style?: CSSProperties;
}

export interface IColorPickerProps extends IBaseColorPickerProps {
  presets?: Array<TColorValue>;
  hideInputs?: boolean;
  hidePresets?: boolean;
}

export interface IInputsColorProps {
  format: TColorFormat;
  onChangeHex: (color: string) => void;
  onBlur: () => void;
  size: TQuenSize;
  onChangeRGB: (color: TRgbColor) => void;
  hsl: THslColor;
  onChangeHSL: (color: THslColor) => void;
}

export type TInputColorProps = Pick<
  IColorPickerProps,
  "format" | "onChange" | "presets" | "hidePresets"
> &
  Omit<ITextFieldProps, "onChange" | "leftContent"> & {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    showSwatch?: boolean;
  };
