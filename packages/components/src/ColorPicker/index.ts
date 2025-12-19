import ColorPickerComponent  from "./ColorPicker";
export type { IColorPickerProps, THslColor, TColorFormat, TColorValue, TRgbColor, TInputColorProps } from "./types";
import InputColor from "./InputColor";

type TColorPicker = typeof ColorPickerComponent & {
  Input: typeof InputColor;
};

const ColorPicker = ColorPickerComponent as TColorPicker;
ColorPicker.Input = InputColor;

export { ColorPicker };
