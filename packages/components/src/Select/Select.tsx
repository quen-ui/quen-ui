import React from "react";
import Select, { Option } from "rc-select";
import { TSelectProps, ISelectDefaultItem } from "./types";
import { Text } from "../typography/Text";
import { SelectWrapper, SelectDropDownStyles } from "./styles";
import { useSelect } from "./useSelect";
import { withDefaultGetters } from "./helpers";
import { Tag } from "../Tag";
// import "rc-select/assets/index.css";

const SelectComponent = <ITEM = ISelectDefaultItem,>(
  props: TSelectProps<ITEM>
): React.ReactElement => {
  const {
    items,
    handleChange,
    currentValue,
    size,
    getItemLabel,
    getItemValue,
    placeholder,
    getItemDisabled
  } = useSelect<ITEM>(
    withDefaultGetters(props) as TSelectProps<ITEM> &
      Required<Pick<TSelectProps<ITEM>, "getItemValue">>
  );

  return (
    <SelectWrapper size={size}>
      <SelectDropDownStyles />
      {props.label && (
        <Text as="label" size={size}>
          {props.label}
          {props.isRequired && <span className="text-field__required">*</span>}
        </Text>
      )}
      <Select
        mode={props.isMulti ? "multiple" : undefined}
        autoFocus={props.isAutoFocus}
        allowClear={props.isClearable}
        onClear={props.onClear}
        menuItemSelectedIcon={null}
        loading={props.isLoading}
        prefix={props.leftContent}
        suffixIcon={props.rightContent}
        labelRender={(props) => <Text size={size}>{props.label}</Text>}
        open={props.open}
        disabled={props.isDisabled}
        showSearch
        value={currentValue || null}
        id="select"
        placeholder={<Text size={size}>{placeholder}</Text>}
        notFoundContent={props.notFoundContent}
        defaultOpen={props.defaultOpen}
        onChange={handleChange}
        tagRender={({ label, disabled, onClose }) => (
          <Tag size={size} isClosable onClickClose={() => onClose()} isDisabled={disabled}>
            {label}
          </Tag>
        )}>
        {items.map((item) => (
          <Option
            key={getItemValue?.(item)}
            value={getItemValue?.(item)}
            disabled={getItemDisabled?.(item)}>
            <Text className="quen-ui__select-option" size={size}>
              {getItemLabel?.(item)}
            </Text>
          </Option>
        ))}
      </Select>
    </SelectWrapper>
  );
};

export default SelectComponent;
