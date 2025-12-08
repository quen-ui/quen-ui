import styled from "styled-components";
import {math, toColorString} from "polished";
import type { TQuenSize } from "../types/size";
import {TColorValue} from "./types";

const getSizeWrapper = (size: TQuenSize) => {
  switch (size) {
    case "l":
      return "26.25rem";
    case "s":
      return "15rem";
    case "xs":
      return "11.25rem";
    case "m":
    default:
      return "20rem";
  }
};

const getSizeThumb = (size: TQuenSize) => {
  switch (size) {
    case "xs":
      return "0.625rem";
    case "s":
      return "0.75rem";
    case "l":
      return "1.5rem";
    case "m":
    default:
      return "1rem";
  }
};

const getSizePreset = (size: TQuenSize) => {
  switch (size) {
    case "xs":
      return "1.375rem";
    case "s":
      return "1.625rem";
    case "l":
      return "2.5rem";
    case "m":
    default:
      return "2rem";
  }
};

const getSizeSlider = (size: TQuenSize) => {
  switch (size) {
    case "xs":
      return "0.75rem";
    case "s":
      return "1rem";
    case "l":
      return "1.5rem";
    case "m":
    default:
      return "1.25rem";
  }
};

const getHeightPreview = (
  size: TQuenSize,
  hideInputs?: boolean,
  isAlpha?: boolean
) => {
  if (isAlpha === false && !hideInputs) {
    return  math(
      `${getSizeSlider(size)} * 2 + 0.75rem + 0.875rem`
    );
  }
  if (!isAlpha && hideInputs) {
    return math(
      `${getSizeSlider(size)} + 0.25rem`
    );
  }
  return math(
    `${getSizeSlider(size)} * 2 + 0.75rem`
  );
};


const getSizeSwatchInput = (size: TQuenSize) => {
  switch (size) {
    case "m":
    default:
      return math(`2.5rem - 0.75rem`);
  }
}

export const ColorPickerWrapper = styled.div<{ size: TQuenSize }>`
  width: ${({ size }) => getSizeWrapper(size)};
  user-select: none;
`;

export const ColorPickerPanel = styled.div.withConfig({
  shouldForwardProp: (prop) => !["size"].includes(prop)
})<{ size: TQuenSize }>`
  background: ${({ theme }) => theme.components.ColorPicker.background};
  border-radius: ${({ theme }) => theme.components.ColorPicker.radius};
  padding: ${({ theme, size }) => theme.components.ColorPicker.padding[size]};
  border: 1px solid ${({ theme }) => theme.components.ColorPicker.borderColor};
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ColorPickerSaturationWrapStyled = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56%;
  border-radius: 6px;
  overflow: hidden;
  touch-action: none;
`;

export const ColorPickerSaturationGradientStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => !["color"].includes(prop)
})<{
  color: string;
}>`
  position: absolute;
  inset: 0;
  background: ${({ color }) =>
    `linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0)), linear-gradient(to right, #fff, ${color})`};
`;

export const ColorPickerThumbStyled = styled.div.withConfig({
  shouldForwardProp: (prop: string) => !["left", "top", "size"].includes(prop)
})<{
  left?: number;
  top?: number;
  size: TQuenSize;
}>`
  position: absolute;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.components.ColorPicker.borderColor};
  width: ${({ size }) => getSizeThumb(size)};
  height: ${({ size }) => getSizeThumb(size)};
  left: ${({ left }) => left}%;
  top: ${({ top }) => top}%;
  transform: translate(-50%, -50%);
`;

export const ColorPickerSliderStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => !["size"].includes(prop)
})<{ size: TQuenSize }>`
  position: relative;
  height: ${({ size }) => getSizeSlider(size)};
  border-radius: 6px;
  cursor: pointer;
  background-image: conic-gradient(
    rgba(0, 0, 0, 0.6) 25%,
    transparent 25% 50%,
    rgba(0, 0, 0, 0.6) 50% 75%,
    transparent 75% 100%
  );
  background-size: 8px 8px;
`;

export const ColorPickerSliderTrackStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => !["bg"].includes(prop)
})<{ bg: string }>`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: ${({ bg }) => bg};
`;

export const ColorPickerSliderHueTrackStyled = styled.div`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(
    to right,
    #f00 0%,
    #ff0 17%,
    #0f0 34%,
    #0ff 50%,
    #00f 67%,
    #f0f 83%,
    #f00 100%
  );
`;

export const ColorPickerSliderThumbStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => !["left", "size"].includes(prop)
})<{ left?: number; size: TQuenSize }>`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${({ size }) => getSizeSlider(size)};
  height: ${({ size }) => getSizeSlider(size)};
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.components.ColorPicker.borderColor};
  left: ${({ left }) => left ?? 0}%;
`;

export const ColorPickerPresetStyled = styled.button.withConfig({
  shouldForwardProp: (prop) => !["color", "active", "size"].includes(prop)
})<{
  color: string;
  active?: boolean;
  size: TQuenSize;
}>`
  width: ${({ size }) => getSizePreset(size)};
  height: ${({ size }) => getSizePreset(size)};
  border-radius: ${({ theme }) => theme.components.ColorPicker.radius};
  border: ${({ active, theme }) =>
    active ? `2px solid ${theme.components.ColorPicker.borderColor}` : "none"};
  background: ${({ color }) => color};
  cursor: pointer;
`;

export const ColorPickerPreviewSwatchStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => !["color", "size", "isAlpha", "hiddenInputs"].includes(prop)
})<{ color: string; size: TQuenSize; isAlpha?: boolean; hiddenInputs?: boolean }>`
  min-width: ${({ size }) =>
    size === "xs" ? "100%" : math(`${getSizeSlider(size)} * 2`)};
  height: ${({ size, isAlpha, hiddenInputs }) =>
    getHeightPreview(size, hiddenInputs, isAlpha)};
  border-radius: ${({ theme }) => theme.components.ColorPicker.radius};
  border: 1px solid ${({ theme }) => theme.components.ColorPicker.borderColor};
  background-image: conic-gradient(
    rgba(0, 0, 0, 0.6) 25%,
    transparent 25% 50%,
    rgba(0, 0, 0, 0.6) 50% 75%,
    transparent 75% 100%
  );
  background-size: ${({ size }) => (size === "xs" ? "8px 8px" : "50% 50%")};

  .quen-ui__color-picker__preview-swatch__inner {
    width: 100%;
    height: 100%;
    background: ${({ color }) => color};
  }
`;

export const ColorPickerSwatchInputStyled = styled.div.withConfig({
  shouldForwardProp: prop => !["size", "color"].includes(prop)
})<{ color: TColorValue; size: TQuenSize}>`
  border: 1px solid ${({ theme }) => theme.components.ColorPicker.borderColor};
  background-image: conic-gradient(
      rgba(0, 0, 0, 0.6) 25%,
      transparent 25% 50%,
      rgba(0, 0, 0, 0.6) 50% 75%,
      transparent 75% 100%
  );
  background-size: 8px 8px;
  width: ${({ size }) => getSizeSwatchInput(size)};
  height: ${({ size }) => getSizeSwatchInput(size)};
  
  .quen-ui__color-picker__swatch-input__inner {
    background: ${({ color }) => typeof color === "string" || !color ?  color : toColorString(color)};
    width: 100%;
    height: 100%;
    display: block;
  }
`;
