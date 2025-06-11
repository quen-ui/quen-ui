import React, { ChangeEvent } from "react";
import { ICheckboxGroupProps, ICheckboxGroupDefaultItem } from "./types";
import { CheckboxGroupWrapper } from "./styles";
import Checkbox from "./Checkbox";
import { withDefaultGetters } from "./helpers";
import { Text } from "../typography/Text";

const CheckboxGroup = <
  ITEM = ICheckboxGroupDefaultItem,
  VALUE extends string | number = string | number
>({
  ...props
}: ICheckboxGroupProps<ITEM, VALUE>): React.ReactElement => {
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
    error,
    ...otherProps
  } = withDefaultGetters(props);

  const getIsChecked = (item: ITEM) =>
    value.includes(
      getItemValue(item as ITEM & ICheckboxGroupDefaultItem) as VALUE
    );

  const handleChange = (
    params: { isChecked: boolean; value: VALUE },
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    let newValue: VALUE[] = [];
    if (params.isChecked) {
      newValue = [...value];
      newValue.push(params.value);
    } else {
      newValue = value.filter((v) => v !== params.value);
    }

    onChange?.(newValue, event);
  };

  return (
    <CheckboxGroupWrapper
      {...otherProps}
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
        <Checkbox
          size={size}
          key={
            getItemKey(option as ITEM & ICheckboxGroupDefaultItem) ??
            getItemLabel(option as ITEM & ICheckboxGroupDefaultItem)
          }
          label={getItemLabel(option as ITEM & ICheckboxGroupDefaultItem)}
          name={name}
          isChecked={getIsChecked(option)}
          isDisabled={
            isDisabled ??
            getItemDisabled(option as ITEM & ICheckboxGroupDefaultItem)
          }
          value={getItemValue(option as ITEM & ICheckboxGroupDefaultItem)}
          onChange={(isChecked, event) =>
            handleChange(
              {
                isChecked,
                value: getItemValue(option as ITEM & ICheckboxGroupDefaultItem) as VALUE
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
    </CheckboxGroupWrapper>
  );
};

export default CheckboxGroup;
