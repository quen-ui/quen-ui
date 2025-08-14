import React, { ChangeEvent } from "react";
import { IRadioGroupProps, IRadioGroupDefaultItem } from "./types";
import { RadioGroupWrapper } from "./styles";
import RadioButton from "./RadioButton";
import { withDefaultGetters } from "./helpers";
import { Text } from "../typography/Text";

const RadioGroup = ({ ...props }: IRadioGroupProps): React.ReactElement => {
  const {
    name,
    className,
    size = "m",
    getItemKey,
    getItemLabel,
    direction,
    options,
    isDisabled,
    getItemDisabled,
    getItemValue,
    value = [],
    onChange,
    label,
    isRequired,
    error
  } = withDefaultGetters(props);

  const getIsChecked = (item: IRadioGroupDefaultItem) =>
    value === getItemValue(item);

  const handleChange = (
    params: { isChecked: boolean; value: string | number },
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    onChange?.(params.value, event);
  };

  return (
    <RadioGroupWrapper
      direction={direction}
      className={className}
      isError={Boolean(error)}>
      {label && (
        <Text as="label" size={size}>
          {label}
          {isRequired && <span className="checkbox-group__required">*</span>}
        </Text>
      )}
      {options.map((option) => (
        <RadioButton
          size={size}
          key={getItemKey(option) ?? getItemLabel(option)}
          label={getItemLabel(option)}
          name={name}
          isChecked={getIsChecked(option)}
          isDisabled={isDisabled ?? getItemDisabled(option)}
          value={getItemValue(option)}
          onChange={(isChecked, event) =>
            handleChange({ isChecked, value: getItemValue(option) }, event)
          }
        />
      ))}
      {typeof error === "string" && (
        <Text className="checkbox-group__error-message" size="xs">
          {error}
        </Text>
      )}
    </RadioGroupWrapper>
  );
};

export default RadioGroup;
