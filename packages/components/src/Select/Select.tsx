import React, { useRef, useState, useLayoutEffect } from "react";
import Select, { Option } from "rc-select";
import { TSelectProps, ISelectDefaultItem } from "./types";
import { Text } from "../typography/Text";
import { SelectWrapper, SelectDropDownStyles } from "./styles";
import { useSelect } from "./useSelect";
import { withDefaultGetters } from "./helpers";
import { Tag } from "../Tag";
import IconArrowBottom from "../assets/icon-arrow-bottom.svg";
import { Flex } from "../Flex";
import IconClose from "../assets/icon-close.svg";

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
    zIndex = 20,
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
    searchValue,
    ...otherProps
  } = useSelect<ITEM>(
    withDefaultGetters(props) as TSelectProps<ITEM> &
      Required<Pick<TSelectProps<ITEM>, "getItemValue">>
  );

  const [dropdownMatchSelectWidth, setDropdownMatchSelectWidth] = useState<
    number | boolean
  >(true);
  const selectRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    setDropdownMatchSelectWidth(selectRef.current?.clientWidth ?? true);
  }, []);

  return (
    <SelectWrapper
      ref={selectRef}
      style={style}
      className={className}
      id={id ?? label}
      disabled={disabled}
      label={label}
      error={error}
      size={size}
      required={required}
      {...otherProps}>
      <SelectDropDownStyles zIndex={zIndex} />
      <Select
        prefixCls="quen-ui__select"
        mode={multi ? "multiple" : undefined}
        autoFocus={autoFocus}
        searchValue={searchValue}
        allowClear={
          clearable && {
            clearIcon: <IconClose className="rc-select-clear-icon" />
          }
        }
        onDropdownVisibleChange={() =>
          setDropdownMatchSelectWidth(selectRef.current?.clientWidth ?? true)
        }
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
        id={id || label}
        placeholder={<Text size={size}>{placeholder}</Text>}
        notFoundContent={notFoundContent}
        defaultOpen={defaultOpen}
        dropdownMatchSelectWidth={dropdownMatchSelectWidth}
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
    </SelectWrapper>
  );
};

export default SelectComponent;
