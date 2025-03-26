import React, { ChangeEvent } from "react";
import { ICheckboxGroupProps, ICheckboxGroupDefaultItem } from "./types";
import { CheckboxGroupWrapper } from "./styles";
import Checkbox from "./Checkbox";
import { withDefaultGetters } from "./helpers";
import { Control } from "../typography/Control";

const CheckboxGroup = ({
  ...props
}: ICheckboxGroupProps): React.ReactElement => {
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

  const getIsChecked = (item: ICheckboxGroupDefaultItem) =>
    value.includes(getItemValue(item));

  const handleChange = (
    params: { isChecked: boolean; value: string | number },
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    let newValue: (string | number)[] = [];
    if (params.isChecked) {
      newValue = value.filter((v) => v !== params.value);
    } else {
      newValue = [...value];
      newValue.push(params.value);
    }

    onChange?.(newValue, event);
  };

  return (
    <CheckboxGroupWrapper
      direction={direction}
      className={className}
      isError={Boolean(error)}>
      {label && (
        <Control as="label" size={size}>
          {label}
          {isRequired && <span className="checkbox-group__required">*</span>}
        </Control>
      )}
      {options.map((option) => (
        <Checkbox
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
        <Control className="checkbox-group__error-message" size="xs">
          {error}
        </Control>
      )}
    </CheckboxGroupWrapper>
  );
};

export default CheckboxGroup;
