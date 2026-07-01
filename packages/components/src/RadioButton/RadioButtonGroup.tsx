import React, { ChangeEvent } from "react";
import { cnMerge, deepMerge } from "@quen-ui/helpers";
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
    style
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
      data-semantic="wrapper"
      direction={direction}
      className={cnMerge(className, classNames?.wrapper)}
      style={deepMerge(style ?? {}, styles?.wrapper ?? {})}
      isError={Boolean(error)}>
      {label && (
        <Text
          data-semantic="labelGroup"
          as="label"
          size={size}
          className={classNames?.labelGroup}
          style={styles?.labelGroup}>
          {label}
          {required && <span className="checkbox-group__required">*</span>}
        </Text>
      )}
      {options.map((option) => (
        <RadioButton
          classNames={classNames}
          styles={styles}
          size={size}
          key={
            getItemKey(option as ITEM & IRadioGroupDefaultItem) ??
            getItemLabel(option as ITEM & IRadioGroupDefaultItem)?.toString()
          }
          label={getItemLabel(option as ITEM & IRadioGroupDefaultItem)}
          name={name}
          checked={getIsChecked(option as ITEM & IRadioGroupDefaultItem)}
          disabled={
            disabled ?? getItemDisabled(option as ITEM & IRadioGroupDefaultItem)
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
        <Text
          className={cnMerge(
            "checkbox-group__error-message",
            classNames?.error
          )}
          size="xs"
          data-semantic="error">
          {error}
        </Text>
      )}
    </RadioGroupWrapper>
  );
};

export default RadioGroup;
