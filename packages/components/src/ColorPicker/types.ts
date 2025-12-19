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
  /** Controlled color value */
  value?: TColorValue;
  /** Uncontrolled initial color value */
  defaultValue?: TColorValue;
  /** Triggered continuously as user interacts */
  onChange?: (color: TColorValue) => void;
  /** Triggered when user stops dragging / completes selection */
  onChangeComplete?: (color: TColorValue) => void;
  /** Output color format */
  format?: TColorFormat;
  /** Disables color picker interactions */
  disabled?: boolean;
  /** Size of component */
  size?: TQuenSize;
  /** Custom class */
  className?: string;
  /** Inline styles */
  style?: CSSProperties;
}

export interface IColorPickerProps extends IBaseColorPickerProps {
  /** Pre-defined selectable colors */
  presets?: Array<TColorValue>;
  /** Hides the color format input fields */
  hideInputs?: boolean;
  /** Hides the preset swatches section */
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
  disabled?: boolean;
}

export type TInputColorProps = Pick<
  IColorPickerProps,
  "format" | "onChange" | "presets" | "hidePresets"
> &
  Omit<ITextFieldProps, "onChange" | "leftContent"> & {
    /** Controlled popover state */
    open?: boolean;
    /** Uncontrolled popover initial state */
    defaultOpen?: boolean;
    /** Triggered when the dropdown is opened/closed */
    onOpenChange?: (open: boolean) => void;
    /** Displays a small color preview square in the input */
    showSwatch?: boolean;
  };
