import React from "react";
import Select, { Option } from "rc-select";
import { TSelectProps, ISelectDefaultItem } from "./types";
import { Text } from "../typography/Text";
import { SelectWrapper, SelectDropDownStyles } from "./styles";
import { useSelect } from "./useSelect";
import { withDefaultGetters } from "./helpers";
import { Tag } from "../Tag";
import IconArrowBottom from "../assets/icon-arrow-bottom.svg";
import { Flex } from "../Flex";

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
    getItemDisabled,
    getItemIcon,
    error,
    zIndex,
    label,
    required,
    id,
    multi,
    autoFocus,
    clearable,
    loading,
    leftContent,
    onClear,
    rightContent,
    notFoundContent,
    showSearch,
    className,
    defaultOpen,
    open,
    disabled,
    style,
  } = useSelect<ITEM>(
    withDefaultGetters(props) as TSelectProps<ITEM> &
      Required<Pick<TSelectProps<ITEM>, "getItemValue">>
  );

  return (
    <SelectWrapper
      size={size}
      error={error}
      className={className}
      style={style}
      data-testid="select"
    >
      <SelectDropDownStyles zIndex={zIndex} />
      {label && (
        <Text as="label" size={size} for={id}>
          {label}
          {required && <span className="text-field__required">*</span>}
        </Text>
      )}
      <Select
        mode={multi ? "multiple" : undefined}
        autoFocus={autoFocus}
        allowClear={clearable}
        onClear={onClear}
        menuItemSelectedIcon={null}
        loading={loading}
        prefix={leftContent}
        suffixIcon={
          <Flex gap={4} align="center">
            {rightContent}
            <IconArrowBottom className="icon-arrow" />
          </Flex>
        }
        labelRender={(props) => <Text size={size}>{props.label}</Text>}
        open={open}
        disabled={disabled}
        showSearch={showSearch}
        value={currentValue || null}
        id={id}
        placeholder={<Text size={size}>{placeholder}</Text>}
        notFoundContent={notFoundContent}
        defaultOpen={defaultOpen}
        onChange={handleChange}
        tagRender={({ label, disabled: disabledTag, onClose }) => (
          <Tag
            size={size}
            closable
            onClickClose={() => onClose()}
            disabled={disabledTag || disabled}>
            {label}
          </Tag>
        )}>
        {items.map((item) => (
          <Option
            key={getItemValue?.(item)}
            value={getItemValue?.(item)}
            disabled={getItemDisabled?.(item)}>
            {getItemIcon?.(item)}
            <Text className="quen-ui__select-option" size={size}>
              {getItemLabel?.(item)}
            </Text>
          </Option>
        ))}
      </Select>
      {typeof props.error === "string" && (
        <Text className="text-field__error-message" size="xs">
          {props.error}
        </Text>
      )}
    </SelectWrapper>
  );
};

export default SelectComponent;
