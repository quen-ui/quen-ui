import React from "react";
import { ISwitchProps } from "./types";
import { SwitchWrapperStyled, SwitchStyled } from "./styles";
import { Control } from "../typography/Control";

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
        <Control size={size} as="label">
          {label}
        </Control>
      )}
      <SwitchStyled
        type="checkbox"
        size={size}
        disabled={isDisabled}
        onClick={handleClick}
        onChange={handleChange}
        defaultChecked={defaultChecked}
        checked={value}
      />
      {label && labelPosition === "before" && (
        <Control size={size} as="label">
          {label}
        </Control>
      )}
    </SwitchWrapperStyled>
  );
};

export default Switch;
