import React, { ChangeEventHandler } from "react";
import { Control } from "../typography/Control";
import { IRadioButtonProps } from "./types";
import { RadioButtonInput, RadioButtonLabelStyled } from "./styles";

const RadioButton = ({
  isDisabled,
  label,
  size = "m",
  name,
  id,
  onChange,
  isChecked,
  value,
  className
}: IRadioButtonProps): React.ReactElement => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event): void => {
    onChange?.(event.target.checked, event);
  };
  return (
    <RadioButtonLabelStyled
      id={id}
      isDisabled={isDisabled}
      className={className}>
      <RadioButtonInput
        checked={isChecked}
        type="radio"
        name={name}
        onChange={handleChange}
        size={size}
        disabled={isDisabled}
        value={value}
      />
      {label && <Control size={size}>{label}</Control>}
    </RadioButtonLabelStyled>
  );
};

export default RadioButton;
