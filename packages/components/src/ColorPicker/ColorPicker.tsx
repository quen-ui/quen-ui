import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  useRef
} from "react";
import {
  hslToColorString,
  parseToHsl,
  parseToRgb,
  rgbToColorString
} from "polished";
import { useControllableState } from "@quen-ui/hooks";
import type {
  IColorPickerProps,
  TColorValue,
  THslColor,
  TRgbColor
} from "./types";
import {
  ColorPickerWrapper,
  ColorPickerPanel,
  ColorPickerSaturationWrapStyled,
  ColorPickerSaturationGradientStyled,
  ColorPickerThumbStyled,
  ColorPickerSliderStyled,
  ColorPickerSliderThumbStyled,
  ColorPickerSliderTrackStyled,
  ColorPickerPreviewSwatchStyled,
  ColorPickerPresetStyled,
  ColorPickerSliderHueTrackStyled
} from "./styles";
import { parseColor, clamp, formatColor } from "./helpers";
import InputsColor from "./InputsColor";
import { Flex } from "../Flex";

const getHslValue = (value: number) => {
  if (value < 0) {
    return 0;
  } else if (value > 1) {
    return 1;
  }
  return value;
};

const getHslHue = (value: number) => {
  if (value < 0) {
    return 0;
  } else if (value > 360) {
    return 360;
  }
  return value;
};

const ColorPicker = ({
  value,
  defaultValue,
  onChange,
  disabled,
  format = "hex",
  onChangeComplete,
  size = "m",
  className,
  style,
  hideInputs,
  hidePresets,
  presets
}: IColorPickerProps) => {
  const [internal, setInternal] = useControllableState<TColorValue>({
    value,
    defaultValue,
    onChange
  });
  const initialHsl = useMemo(
    () => parseColor(internal ?? defaultValue),
    [defaultValue]
  );
  const isAlpha = useMemo(() => {
    return ["hexa", "rgba", "hsla"].includes(format);
  }, [format]);

  const [hsl, setHsl] = useState<THslColor>(initialHsl);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0
  });

  useEffect(() => {
    if (["hex", "hsl", "rgb"].includes(format)) {
      pushChange({ ...hsl, alpha: 1 }, true);
    }
  }, [format]);

  const pushChange = useCallback(
    (next: THslColor, isComplete = false) => {
      if (!disabled) {
        const out = {
          hue: next.hue,
          saturation: next.saturation,
          lightness: next.lightness,
          alpha: "alpha" in next ? clamp(next.alpha, 0, 1) : 1
        } as THslColor;
        setHsl(out);
        const formatted = formatColor(out, format);
        setInternal(formatted);
        if (isComplete && onChangeComplete) {
          onChangeComplete(formatted);
        }
      }
    },
    [setInternal, onChangeComplete, format, disabled]
  );

  // saturation area handlers
  const satRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);

  const getRelativePositionFromEvent = (
    e: PointerEvent | MouseEvent | TouchEvent,
    el: HTMLElement
  ) => {
    const rect = el.getBoundingClientRect();
    let clientX = 0,
      clientY = 0;
    if ((e as TouchEvent).touches) {
      const t = (e as TouchEvent).touches[0];
      clientX = t.clientX;
      clientY = t.clientY;
    } else {
      const m = e as MouseEvent;
      clientX = m.clientX;
      clientY = m.clientY;
    }
    const x = Number(((clientX - rect.left) / rect.width).toFixed(2));
    const y = Number(((clientY - rect.top) / rect.height).toFixed(2));
    return { x, y };
  };

  const getSaturationLightness = (
    e: PointerEvent | MouseEvent | TouchEvent,
    el: HTMLElement
  ) => {
    const { x, y } = getRelativePositionFromEvent(e, el);
    setPosition({ x: getHslValue(x), y: getHslValue(y) });

    return {
      saturation: getHslValue(x),
      lightness: getHslValue(1 - 0.5 * x - y + 0.5 * x * y)
    };
  };

  useEffect(() => {
    function onPointerMove(e: PointerEvent) {
      if (!isDraggingRef.current || !satRef.current) return;
      const { saturation, lightness } = getSaturationLightness(
        e,
        satRef.current
      );
      pushChange({
        ...hsl,
        saturation,
        lightness
      });
    }
    function onPointerUp(e: PointerEvent) {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      if (satRef.current) {
        const { saturation, lightness } = getSaturationLightness(
          e,
          satRef.current
        );
        pushChange(
          {
            ...hsl,
            saturation,
            lightness
          },
          true
        );
      }
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    }
    if (typeof window !== "undefined") {
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", onPointerUp);
      }
    };
  }, [hsl, pushChange]);

  const onSatPointerDown = (e: React.PointerEvent) => {
    if (disabled) return;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    isDraggingRef.current = true;
    if (satRef.current) {
      const { saturation, lightness } = getSaturationLightness(
        e.nativeEvent,
        satRef.current
      );
      pushChange({
        ...hsl,
        saturation,
        lightness
      });
    }
  };

  // hue slider
  const hueRef = useRef<HTMLDivElement | null>(null);
  const onHuePointerDown = (e: React.PointerEvent) => {
    if (disabled) return;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    const onMove = (ev: PointerEvent) => {
      if (!hueRef.current) return;
      const pos = getRelativePositionFromEvent(ev, hueRef.current);
      const hue = pos.x * 360;
      pushChange({ ...hsl, hue: getHslHue(hue) });
    };
    const onUp = (ev: PointerEvent) => {
      if (!hueRef.current) return;
      const pos = getRelativePositionFromEvent(ev, hueRef.current);
      const hue = pos.x * 360;
      pushChange({ ...hsl, hue: getHslHue(hue) }, true);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  };

  // alpha slider
  const alphaRef = useRef<HTMLDivElement | null>(null);
  const onAlphaPointerDown = (e: React.PointerEvent) => {
    if (disabled) return;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    const onMove = (ev: PointerEvent) => {
      if (!alphaRef.current) return;
      const pos = getRelativePositionFromEvent(ev, alphaRef.current);
      const alpha = pos.x;
      pushChange({ ...hsl, alpha }, false);
    };
    const onUp = (ev: PointerEvent) => {
      if (!alphaRef.current) return;
      const pos = getRelativePositionFromEvent(ev, alphaRef.current);
      const alpha = pos.x;
      pushChange({ ...hsl, alpha }, true);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  };

  const [inputValue, setInputValue] = useState(() => formatColor(hsl, format));
  useEffect(() => {
    setInputValue(formatColor(hsl, format));
  }, [hsl, format]);

  const onChangeHexInput = (v: string) => {
    setInputValue(v);
    try {
      const parsed = parseColor(v);
      pushChange(parsed, false);
    } catch (err) {
      window.console.error(err);
    }
  };

  const applyInput = () => {
    try {
      const parsed = parseColor(inputValue);
      pushChange(parsed, true);
    } catch (err) {
      window.console.error(err);
    }
  };

  const onPresetClick = (p: TColorValue) => {
    const parsed = parseColor(p);
    pushChange(parsed, true);
  };

  const onHueKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    let delta = 0;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") delta = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowUp") delta = 1;
    if (e.key === "PageUp") delta = 10;
    if (e.key === "PageDown") delta = -10;
    if (delta !== 0) {
      e.preventDefault();
      pushChange({ ...hsl }, true);
    }
  };
  const onChangeRGBInput = (value: TRgbColor) => {
    pushChange(parseToHsl(rgbToColorString(value)), true);
  };

  const hex = hslToColorString(hsl);
  const rgb = parseToRgb(hex);

  return (
    <ColorPickerWrapper size={size} className={className} style={style}>
      <ColorPickerPanel
        role="group"
        aria-label="Color picker panel"
        size={size}>
        <Flex direction="column" gap="s">
          <ColorPickerSaturationWrapStyled
            ref={satRef}
            onPointerDown={onSatPointerDown}
            aria-label="Saturation and lightness"
            role="application">
            <ColorPickerSaturationGradientStyled
              color={`hsl(${hsl.hue}, 100%, 50%)`}
            />
            <ColorPickerThumbStyled
              size={size}
              left={position.x * 100}
              top={position.y * 100}
            />
          </ColorPickerSaturationWrapStyled>
          <Flex gap="s">
            <Flex direction="column" gap="s" style={{ width: "100%" }}>
              <ColorPickerSliderStyled
                size={size}
                ref={hueRef}
                onPointerDown={onHuePointerDown}
                role="slider"
                tabIndex={0}
                onKeyDown={onHueKeyDown}
                aria-valuenow={Math.round(hsl.hue)}
                aria-label="Hue">
                <ColorPickerSliderHueTrackStyled />
                <ColorPickerSliderThumbStyled
                  size={size}
                  left={(hsl.hue / 360) * 100}
                />
              </ColorPickerSliderStyled>
              {isAlpha && (
                <ColorPickerSliderStyled
                  size={size}
                  ref={alphaRef}
                  onPointerDown={onAlphaPointerDown}
                  role="slider"
                  tabIndex={0}
                  onKeyDown={onHueKeyDown}
                  aria-valuenow={Math.round(hsl.hue)}
                  aria-label="Alpha">
                  <ColorPickerSliderTrackStyled
                    bg={`linear-gradient(to right, rgba(${rgb.red},${rgb.green},${rgb.blue},0) 0%, rgba(${rgb.red},${rgb.green},${rgb.blue},1) 100%)`}
                  />
                  <ColorPickerSliderThumbStyled
                    size={size}
                    left={"alpha" in hsl ? (hsl.alpha ?? 1) * 100 : 100}
                  />
                </ColorPickerSliderStyled>
              )}
              {!isAlpha && !hideInputs && (
                <InputsColor
                  disabled={disabled}
                  format={format}
                  onChangeHex={onChangeHexInput}
                  onBlur={applyInput}
                  size={size}
                  onChangeRGB={onChangeRGBInput}
                  hsl={hsl}
                  onChangeHSL={(value) => pushChange(value, true)}
                />
              )}
            </Flex>
            {size !== "xs" && (
              <ColorPickerPreviewSwatchStyled
                hiddenInputs={hideInputs}
                isAlpha={isAlpha}
                size={size}
                color={formatColor(hsl, "rgba")}>
                <div className="quen-ui__color-picker__preview-swatch__inner" />
              </ColorPickerPreviewSwatchStyled>
            )}
          </Flex>
          {size === "xs" && (
            <ColorPickerPreviewSwatchStyled
              size={size}
              color={formatColor(hsl, "rgba")}>
              <div className="quen-ui__color-picker__preview-swatch__inner" />
            </ColorPickerPreviewSwatchStyled>
          )}
        </Flex>
        {((isAlpha && !hideInputs) ||
          (!hidePresets && presets?.length)) && (
            <Flex direction="column" gap="s">
              {isAlpha && !hideInputs && (
                <Flex direction="column" gap="s">
                  <InputsColor
                    disabled={disabled}
                    format={format}
                    onChangeHex={onChangeHexInput}
                    onBlur={applyInput}
                    size={size}
                    onChangeRGB={onChangeRGBInput}
                    hsl={hsl}
                    onChangeHSL={(value) => pushChange(value, true)}
                  />
                </Flex>
              )}
              {!hidePresets && presets?.length && (
                <Flex gap="s" wrap="wrap">
                  {presets.map((p, i) => {
                    const active =
                      formatColor(parseColor(p), "hex") ===
                      formatColor(hsl, "hex");
                    return (
                      <ColorPickerPresetStyled
                        size={size}
                        key={i}
                        color={
                          typeof p === "string"
                            ? p
                            : formatColor(parseColor(p), "rgba")
                        }
                        active={active}
                        onClick={() => !disabled && onPresetClick(p)}
                        aria-pressed={active}
                      />
                    );
                  })}
                </Flex>
              )}
            </Flex>
          )}
      </ColorPickerPanel>
    </ColorPickerWrapper>
  );
};

export default ColorPicker;
