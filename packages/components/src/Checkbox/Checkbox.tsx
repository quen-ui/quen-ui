import React, { ChangeEventHandler } from "react";
import { Text } from "../typography/Text";
import { ICheckboxProps } from "./types";
import { CheckboxInputStyled, CheckboxLabelStyled } from "./styles";

const Checkbox = ({
  disabled,
  label,
  size = "m",
  name,
  id,
  onChange,
  checked,
  value,
  className,
  intermediate
}: ICheckboxProps): React.ReactElement => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event): void => {
    onChange?.(event.target.checked, event);
  };
  return (
    <CheckboxLabelStyled
      id={id}
      disabled={disabled}
      className={className}>
      <CheckboxInputStyled
        intermediate={intermediate}
        checked={checked}
        type="checkbox"
        name={name}
        onChange={handleChange}
        size={size}
        disabled={disabled}
        value={value}
      />
      {label && <Text size={size}>{label}</Text>}
    </CheckboxLabelStyled>
  );
};

export default Checkbox;
