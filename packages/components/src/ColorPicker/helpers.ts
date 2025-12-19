import {
  toColorString,
  parseToHsl,
  hslToColorString,
  parseToRgb
} from "polished";
import type { TColorValue, THslColor, TColorFormat } from "./types";

export function parseColor(value?: TColorValue): THslColor {
  if (!value) {
    return { hue: 0, saturation: 0, lightness: 1 };
  }
  if (typeof value === "string") {
    return parseToHsl(value);
  }
  return parseToHsl(toColorString(value));
}

export function clamp(n: number, a: number, b: number) {
  return Math.min(b, Math.max(a, n));
}

export const formatColor = (hsl: THslColor, format: TColorFormat): string => {
  const hex = hslToColorString(hsl);
  if (format === "hex" || format === "hexa") {
    return hex;
  }
  if (format === "rgb" || format === "rgba") {
    const rgba = parseToRgb(hex);
    return format === "rgba" && "alpha" in rgba
      ? `rgba(${rgba.red}, ${rgba.green}, ${rgba.blue}, ${rgba.alpha})`
      : `rgb(${rgba.red}, ${rgba.green}, ${rgba.blue})`;
  }
  if (format === "hsla" && "alpha" in hsl) {
    return `hsla(${Math.round(hsl.hue)}, ${Math.round(hsl.saturation) * 100}%, ${Math.round(hsl.lightness) * 100}%, ${hsl.alpha})`;
  }
  return `hsl(${Math.round(hsl.hue)}, ${Math.round(hsl.saturation) * 100}%, ${Math.round(hsl.lightness) * 100}%)`;
};
