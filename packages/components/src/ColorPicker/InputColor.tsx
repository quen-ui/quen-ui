import { useRef, type MouseEvent } from "react";
import { useControllableState } from "@quen-ui/hooks";
import { TInputColorProps, TColorValue } from "./types";
import ColorPicker from "./ColorPicker";
import { TextField } from "../TextField";
import { Dropdown } from "../Dropdown";
import { ColorPickerSwatchInputStyled } from "./styles";

const InputColor = ({
  open: openProp,
  defaultOpen,
  defaultValue,
  value,
  onChange,
  onOpenChange,
  placeholder,
  format,
  label,
  required,
  rightContent,
  onClear,
  onFocus,
  onBlur,
  className,
  clearable,
  classNameInput,
  size,
  style,
  error,
  presets,
  hidePresets
}: TInputColorProps) => {
  const [open, setOpen] = useControllableState({
    value: openProp,
    defaultValue: defaultOpen,
    onChange: (o: any) => onOpenChange?.(!!o)
  });
  const [color, setColor] = useControllableState<TColorValue>({
    value,
    defaultValue,
    onChange
  });
  const inputRef = useRef<HTMLDivElement>(null);

  const handleClear = (event: MouseEvent) => {
    setColor("");
    onClear?.(event)
  }

  return (
    <>
      <TextField
        error={error}
        size={size}
        style={style}
        clearable={clearable}
        classNameInput={classNameInput}
        onChange={onChange}
        className={className}
        ref={inputRef}
        onClick={() => setOpen(true)}
        value={color as string}
        placeholder={placeholder}
        label={label}
        rightContent={rightContent}
        onClear={handleClear}
        required={required}
        onFocus={onFocus}
        onBlur={onBlur}
        leftContent={
          <ColorPickerSwatchInputStyled color={color} size={size}>
            <span className="quen-ui__color-picker__swatch-input__inner " />
          </ColorPickerSwatchInputStyled>
        }
      />
      <Dropdown
        anchorRef={inputRef}
        open={open}
        content={
          <ColorPicker
            size="s"
            onChangeComplete={setColor}
            format={format}
            value={color}
            hideInputs
            presets={presets}
            hidePresets={hidePresets}
          />
        }
        onClickOutside={() => setOpen(false)}
      />
    </>
  );
};

export default InputColor;
