import type { CSSProperties } from "react";
import type {
  HslColor,
  HslaColor,
  RgbColor,
  RgbaColor
} from "polished/lib/types/color";
import type { TQuenSize } from "../types/size";
import type { ITextFieldProps, TTextFieldSemantic } from "../TextField";

export type TColorFormat = "hex" | "hexa" | "rgb" | "rgba" | "hsl" | "hsla";

export type TRgbColor = RgbColor | RgbaColor;

export type THslColor = HslColor | HslaColor;
export type TColorValue = string | TRgbColor | THslColor;

type TColorPickerSemantic =
  | "root"
  | "panel"
  | "saturation"
  | "slider"
  | "input"
  | "preview"
  | "preset";

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
  /** @deprecated - use classNames
   * Custom class */
  className?: string;
  /** @deprecated - use styles
   * Inline styles */
  style?: CSSProperties;
  /** Customize class for each semantic structure inside the component */
  classNames?: Partial<Record<TColorPickerSemantic, string>>;
  /** Customize inline style for each semantic structure inside the component. */
  styles?: Partial<Record<TColorPickerSemantic, CSSProperties>>;
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
  className?: string;
  style?: CSSProperties;
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
    /** Customize class for each semantic structure inside the component */
    classNames?: Partial<{
      picker: Partial<Record<TColorPickerSemantic, string>>;
      input: Partial<Record<TTextFieldSemantic, string>>;
    }>;
    /** Customize inline style for each semantic structure inside the component. */
    styles?: Partial<{
      picker: Partial<Record<TColorPickerSemantic, CSSProperties>>;
      input: Partial<Record<TTextFieldSemantic, CSSProperties>>;
    }>;
  };
