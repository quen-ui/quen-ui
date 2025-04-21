import React from "react";
import Select, { Option } from "rc-select";
import { TSelectProps, ISelectDefaultItem } from "./types";
import { Control } from "../typography/Control";
import { SelectWrapper, SelectDropDownStyles } from "./styles";
import { useSelect } from "./useSelect";
import { withDefaultGetters } from "./helpers";
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
  } = useSelect<ITEM>(withDefaultGetters(props) as TSelectProps<ITEM>);

  return (
    <SelectWrapper size={size}>
      <SelectDropDownStyles />
      {props.label && (
        <Control as="label" size={size}>
          {props.label}
          {props.isRequired && <span className="text-field__required">*</span>}
        </Control>
      )}
      <Select
        allowClear={props.isClearable}
        onClear={props.onClear}
        menuItemSelectedIcon={null}
        loading={props.isLoading}
        prefix={props.leftContent}
        suffixIcon={props.rightContent}
        labelRender={(props) => <Control size={size}>{props.label}</Control>}
        open={props.open}
        disabled={props.isDisabled}
        showSearch
        value={getItemValue?.(currentValue) || null}
        id="select"
        placeholder={placeholder}
        notFoundContent={props.notFoundContent}
        defaultOpen={props.defaultOpen}
        onChange={handleChange}>
        {items.map((item) => (
          <Option
            key={getItemValue?.(item)}
            value={getItemValue?.(item)}
            disabled={getItemDisabled?.(item)}>
            <Control className="quen-ui__select-option" size={size}>{getItemLabel?.(item)}</Control>
          </Option>
        ))}
      </Select>
    </SelectWrapper>
  );
};

export default SelectComponent;
