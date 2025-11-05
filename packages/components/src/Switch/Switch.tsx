import { type ReactNode, type ChangeEventHandler, type MouseEventHandler, useRef, useState, useEffect } from "react";
import { ISwitchProps } from "./types";
import {
  SwitchWrapperStyled,
  SwitchStyled,
  SwitchThumbWrapper
} from "./styles";
import { Text } from "../typography/Text";

const Switch = ({
  className,
  size = "m",
  defaultChecked,
  label,
  labelPosition = "before",
  onChange,
  value,
  onClick,
  disabled,
  style,
  thumbIcon,
  ...props
}: ISwitchProps): ReactNode => {
  const refInput = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState<boolean>( value ?? defaultChecked ?? false);

  useEffect(() => {
    setChecked(value ?? false);
  }, [value]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange?.(e.target.checked, e);
  };

  const handleClick: MouseEventHandler<HTMLInputElement> = (e): void => {
    onClick?.((e.target as EventTarget & HTMLInputElement).checked, e);
    setChecked((e.target as EventTarget & HTMLInputElement).checked);
  };

  const handleClickThumbIcon: MouseEventHandler<HTMLSpanElement> = () => {
    refInput.current?.click();
  }

  return (
    <SwitchWrapperStyled
      disabled={disabled}
      className={className}
      style={style}
      {...props}>
      {label && labelPosition === "after" && (
        <Text size={size} as="label">
          {label}
        </Text>
      )}
      <SwitchStyled
        ref={refInput}
        aria-checked={value}
        aria-disabled={disabled}
        role="switch"
        type="checkbox"
        size={size}
        disabled={disabled}
        onClick={handleClick}
        onChange={handleChange}
        defaultChecked={defaultChecked}
        checked={value}
      />
      {thumbIcon && (
        <SwitchThumbWrapper onClick={handleClickThumbIcon} size={size} checked={refInput.current?.checked}>
          {thumbIcon}
        </SwitchThumbWrapper>
      )}
      {label && labelPosition === "before" && (
        <Text size={size} as="label">
          {label}
        </Text>
      )}
    </SwitchWrapperStyled>
  );
};

export default Switch;
