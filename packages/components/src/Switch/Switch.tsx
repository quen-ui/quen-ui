import React from "react";
import { ISwitchProps } from "./types";
import { SwitchWrapperStyled, SwitchStyled } from "./styles";
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
  ...props
}: ISwitchProps): React.ReactNode => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange?.(e.target.checked, e);
  };

  const handleClick: React.MouseEventHandler<HTMLInputElement> = (e): void => {
    onClick?.((e.target as EventTarget & HTMLInputElement).checked, e);
  };

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
      {label && labelPosition === "before" && (
        <Text size={size} as="label">
          {label}
        </Text>
      )}
    </SwitchWrapperStyled>
  );
};

export default Switch;
