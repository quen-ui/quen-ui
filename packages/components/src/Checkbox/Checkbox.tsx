import React, { ChangeEventHandler } from "react";
import { cnMerge, deepMerge } from "@quen-ui/helpers";
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
  intermediate,
  classNames,
  style,
  styles,
  ...props
}: ICheckboxProps): React.ReactElement => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event): void => {
    onChange?.(event.target.checked, event);
  };
  return (
    <CheckboxLabelStyled
      disabled={disabled}
      className={cnMerge(className, classNames?.root)}
      style={deepMerge(style ?? {}, styles?.root ?? {})}
      {...props}
      data-semantic="root">
      <CheckboxInputStyled
        className={classNames?.icon}
        style={styles?.icon}
        data-semantic="icon"
        intermediate={intermediate}
        checked={checked}
        type="checkbox"
        name={name}
        onChange={handleChange}
        size={size}
        disabled={disabled}
        value={value}
        id={id}
      />
      {label && (
        <Text
          className={classNames?.label}
          style={styles?.label}
          size={size}
          data-semantic="label">
          {label}
        </Text>
      )}
    </CheckboxLabelStyled>
  );
};

export default Checkbox;
