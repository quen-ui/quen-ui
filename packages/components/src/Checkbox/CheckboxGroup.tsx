import type { ChangeEvent, ReactElement } from "react";
import { cnMerge } from "@quen-ui/helpers";
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
}: ICheckboxGroupProps<ITEM, VALUE>): ReactElement => {
  const {
    name,
    className,
    size = "m",
    getItemKey,
    getItemLabel,
    direction,
    options,
    disabled,
    getItemDisabled,
    getItemValue,
    value = [],
    onChange,
    label,
    required,
    error,
    classNames,
    styles,
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
      className={cnMerge(className, classNames?.root)}
      style={styles?.root}
      isError={Boolean(error)}>
      {label && (
        <Text as="label" size={size} style={styles?.label} className={classNames?.label}>
          {label}
          {required && <span className="checkbox-group__required">*</span>}
        </Text>
      )}
      {options.map((option) => (
        <Checkbox
          classNames={classNames?.checkBox}
          styles={styles?.checkBox}
          size={size}
          key={
            getItemKey(option as ITEM & ICheckboxGroupDefaultItem) ??
            getItemLabel(option as ITEM & ICheckboxGroupDefaultItem)?.toString()
          }
          label={getItemLabel(option as ITEM & ICheckboxGroupDefaultItem)}
          name={name}
          checked={getIsChecked(option)}
          disabled={
            disabled ??
            getItemDisabled(option as ITEM & ICheckboxGroupDefaultItem)
          }
          value={getItemValue(option as ITEM & ICheckboxGroupDefaultItem)}
          onChange={(isChecked, event) =>
            handleChange(
              {
                isChecked,
                value: getItemValue(
                  option as ITEM & ICheckboxGroupDefaultItem
                ) as VALUE
              },
              event
            )
          }
        />
      ))}
      {typeof error === "string" && (
        <Text className={cnMerge("checkbox-group__error-message", classNames?.error)} size="xs">
          {error}
        </Text>
      )}
    </CheckboxGroupWrapper>
  );
};

export default CheckboxGroup;
