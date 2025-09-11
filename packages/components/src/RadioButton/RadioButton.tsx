import React, { ChangeEventHandler } from "react";
import { Text } from "../typography/Text";
import { IRadioButtonProps } from "./types";
import { RadioButtonInput, RadioButtonLabelStyled } from "./styles";

const RadioButton = ({
  disabled,
  label,
  size = "m",
  name,
  id,
  onChange,
  checked,
  value,
  className
}: IRadioButtonProps): React.ReactElement => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event): void => {
    onChange?.(event.target.checked, event);
  };
  return (
    <RadioButtonLabelStyled
      id={id}
      disabled={disabled}
      className={className}>
      <RadioButtonInput
        checked={checked}
        type="radio"
        name={name}
        onChange={handleChange}
        size={size}
        disabled={disabled}
        value={value}
      />
      {label && <Text size={size}>{label}</Text>}
    </RadioButtonLabelStyled>
  );
};

export default RadioButton;
