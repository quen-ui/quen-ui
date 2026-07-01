import React, { ChangeEventHandler } from "react";
import { cnMerge, deepMerge } from "@quen-ui/helpers";
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
  className,
  style,
  classNames,
  styles,
  ...props
}: IRadioButtonProps): React.ReactElement => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event): void => {
    onChange?.(event.target.checked, event);
  };
  return (
    <RadioButtonLabelStyled
      data-semantic="root"
      id={id}
      disabled={disabled}
      className={cnMerge(className, classNames?.root)}
      style={deepMerge(style ?? {}, styles?.root ?? {})}
      {...props}>
      <RadioButtonInput
        className={classNames?.input}
        style={styles?.input}
        data-semantic="input"
        checked={checked}
        type="radio"
        name={name}
        onChange={handleChange}
        size={size}
        disabled={disabled}
        value={value}
      />
      {label && (
        <Text
          size={size}
          data-semantic="label"
          className={classNames?.label}
          style={styles?.label}>
          {label}
        </Text>
      )}
    </RadioButtonLabelStyled>
  );
};

export default RadioButton;
