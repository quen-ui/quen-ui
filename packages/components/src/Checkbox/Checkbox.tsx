import React, { ChangeEventHandler } from "react";
import { Text } from "../typography/Text";
import { ICheckboxProps } from "./types";
import { CheckboxInputStyled, CheckboxLabelStyled } from "./styles";

const Checkbox = ({
  isDisabled,
  label,
  size = "m",
  name,
  id,
  onChange,
  isChecked,
  value,
  className,
  isIntermediate
}: ICheckboxProps): React.ReactElement => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event): void => {
    onChange?.(event.target.checked, event);
  };
  return (
    <CheckboxLabelStyled
      id={id}
      isDisabled={isDisabled}
      className={className}>
      <CheckboxInputStyled
        isIntermediate={isIntermediate}
        checked={isChecked}
        type="checkbox"
        name={name}
        onChange={handleChange}
        size={size}
        disabled={isDisabled}
        value={value}
      />
      {label && <Text size={size}>{label}</Text>}
    </CheckboxLabelStyled>
  );
};

export default Checkbox;
