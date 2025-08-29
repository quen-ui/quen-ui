import React, { ChangeEvent } from "react";
import { IRadioGroupProps, IRadioGroupDefaultItem } from "./types";
import { RadioGroupWrapper } from "./styles";
import RadioButton from "./RadioButton";
import { withDefaultGetters } from "./helpers";
import { Text } from "../typography/Text";

const RadioGroup = <ITEM = IRadioGroupDefaultItem,>({
  ...props
}: IRadioGroupProps<ITEM>): React.ReactElement => {
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

  const getIsChecked = (item: ITEM) =>
    value === getItemValue(item as ITEM & IRadioGroupDefaultItem);

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
          key={
            getItemKey(option as ITEM & IRadioGroupDefaultItem) ??
            getItemLabel(option as ITEM & IRadioGroupDefaultItem)?.toString()
          }
          label={getItemLabel(option as ITEM & IRadioGroupDefaultItem)}
          name={name}
          isChecked={getIsChecked(option as ITEM & IRadioGroupDefaultItem)}
          isDisabled={
            isDisabled ??
            getItemDisabled(option as ITEM & IRadioGroupDefaultItem)
          }
          value={getItemValue(option as ITEM & IRadioGroupDefaultItem)}
          onChange={(isChecked, event) =>
            handleChange(
              {
                isChecked,
                value: getItemValue(option as ITEM & IRadioGroupDefaultItem)
              },
              event
            )
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
