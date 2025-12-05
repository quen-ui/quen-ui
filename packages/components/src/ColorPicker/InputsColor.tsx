import { useMemo } from "react";
import chroma from "chroma-js";
import type { IInputsColorProps } from "./types";
import { TextField } from "../TextField";
import { InputNumber } from "../InputNumber";
import { Flex } from "../Flex";
import React from "react";
import { clamp } from "./helpers";
import {  parseToRgb } from "polished";

const InputsColor = ({
  format,
  onChangeHex,
  onChangeRGB,
  onBlur,
  hsl,
  size,
  onChangeHSL
}: IInputsColorProps) => {
  const hex = useMemo(
    () =>
      chroma
        .hsl(
          hsl.hue,
          hsl.saturation,
          hsl.lightness,
          "alpha" in hsl ? hsl.alpha : 1
        )
        .hex(),
    [hsl]
  );
  const rgb = useMemo(() => parseToRgb(hex), [hex]);

  return (
    <Flex gap="s">
      {["hex", "hexa"].includes(format) && (
        <TextField
          size="s"
          value={hex}
          onChange={onChangeHex}
          onBlur={onBlur}
          aria-label="color input"
          onKeyDown={(e: React.KeyboardEvent) => {
            if (e.key === "Enter") {
              onBlur();
            }
          }}
        />
      )}
      {["rgba", "rgb"].includes(format) && size !== "xs" && (
        <Flex gap="xs">
          <InputNumber
            size="s"
            value={rgb.red}
            onChange={(value) => {
              const v = clamp(Number(value || 0), 0, 255);
              onChangeRGB({ ...rgb, red: v });
            }}
            aria-label="r"
            min={0}
            max={255}
          />
          <InputNumber
            size="s"
            value={rgb.green}
            onChange={(value) => {
              const v = clamp(Number(value || 0), 0, 255);
              onChangeRGB({ ...rgb, green: v });
            }}
            aria-label="g"
            min={0}
            max={255}
          />
          <InputNumber
            size="s"
            value={rgb.blue}
            onChange={(value) => {
              const v = clamp(Number(value || 0), 0, 255);
              onChangeRGB({ ...rgb, blue: v });
            }}
            aria-label="b"
            min={0}
            max={255}
          />
          {format === "rgba" && (
            <InputNumber
              size="s"
              value={("alpha" in rgb ? rgb.alpha : 1) * 100}
              onChange={(value) => {
                const v = clamp(Number(value || 0), 0, 100);
                onChangeRGB({ ...rgb, alpha: Number((v / 100).toFixed(2)) });
              }}
              aria-label="alpha"
              min={0}
              max={100}
              formatter={(v) => `${Number(v).toFixed(0)}%`}
            />
          )}
        </Flex>
      )}
      {["hsl", "hsla"].includes(format) && (
        <Flex gap="xs">
          <InputNumber
            size="s"
            value={Number(hsl.hue.toFixed(0))}
            onChange={(value) => {
              const v = clamp(Number(value || 0), 0, 360);
              onChangeHSL({ ...hsl, hue: v });
            }}
            aria-label="hue"
            min={0}
            max={360}
          />
          <InputNumber
            size="s"
            value={Number((hsl.saturation * 100).toFixed(0))}
            onChange={(value) => {
              const v = clamp(Number(value || 0), 0, 100);
              onChangeHSL({ ...hsl, saturation: Number((v / 100).toFixed(2)) });
            }}
            aria-label="saturation"
            min={0}
            max={100}
            formatter={(v) => `${Number(v).toFixed(0)}%`}
          />
          <InputNumber
            size="s"
            value={hsl.lightness * 100}
            onChange={(value) => {
              const v = clamp(Number(value || 0), 0, 100);
              onChangeHSL({ ...hsl, lightness: Number((v / 100).toFixed(2)) });
            }}
            aria-label="lightness"
            min={0}
            max={100}
            formatter={(v) => `${Number(v).toFixed(0)}%`}
          />
          {format === "hsla" && (
            <InputNumber
              size="s"
              value={("alpha" in hsl ? hsl.alpha : 1) * 100}
              onChange={(value) => {
                const v = clamp(Number(value || 0), 0, 100);
                onChangeHSL({ ...hsl, alpha: Number((v / 100).toFixed(2)) });
              }}
              aria-label="alpha"
              min={0}
              max={100}
              formatter={(v) => `${Number(v).toFixed(0)}%`}
            />
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default InputsColor;
