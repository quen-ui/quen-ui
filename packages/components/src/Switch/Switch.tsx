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
  isDisabled,
  style
}: ISwitchProps): React.ReactNode => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange?.(e.target.checked, e);
  };

  const handleClick: React.MouseEventHandler<HTMLInputElement> = (e): void => {
    onClick?.((e.target as EventTarget & HTMLInputElement).checked, e);
  };

  return (
    <SwitchWrapperStyled
      isDisabled={isDisabled}
      className={className}
      style={style}>
      {label && labelPosition === "after" && (
        <Text size={size} as="label">
          {label}
        </Text>
      )}
      <SwitchStyled
        aria-checked={value}
        aria-disabled={isDisabled}
        role="switch"
        type="checkbox"
        size={size}
        disabled={isDisabled}
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
