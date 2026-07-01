import React, { useRef, useState, useLayoutEffect } from "react";
import Select, { Option } from "rc-select";
import { TSelectProps, ISelectDefaultItem } from "./types";
import { Text } from "../typography/Text";
import { SelectWrapper, SelectDropDownStyles } from "./styles";
import { useSelect } from "./useSelect";
import { withDefaultGetters } from "./helpers";
import { Tag } from "../Tag";
import IconArrowBottom from "../assets/icon-arrow-bottom.svg";
import IconClose from "../assets/icon-close.svg";
import { cnMerge, deepMerge } from "@quen-ui/helpers";

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
    classNames,
    styles,
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
      style={deepMerge(style ?? {}, styles?.root ?? {})}
      className={cnMerge(className, classNames?.root)}
      classNames={classNames}
      styles={styles}
      id={id ?? label}
      disabled={disabled}
      label={label}
      error={error}
      size={size}
      required={required}
      rightContent={rightContent}
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
        suffixIcon={<IconArrowBottom className="icon-arrow" />}
        labelRender={(props) => (
          <Text className={classNames?.label} style={styles?.label} size={size}>
            {props.label}
          </Text>
        )}
        open={open}
        disabled={disabled}
        showSearch={showSearch}
        value={currentValue || null}
        id={id || label}
        placeholder={
          <Text
            size={size}
            className={classNames?.placeholder}
            style={styles?.placeholder}>
            {placeholder}
          </Text>
        }
        notFoundContent={notFoundContent}
        defaultOpen={defaultOpen}
        dropdownMatchSelectWidth={dropdownMatchSelectWidth}
        onChange={handleChange}
        tagRender={({ label, disabled: disabledTag, onClose }) => (
          <Tag
            data-semantic="tag"
            classNames={{ root: classNames?.tag }}
            styles={{ root: styles?.tag }}
            size={size}
            closable
            onClickClose={() => onClose()}
            disabled={disabledTag || disabled}>
            {label}
          </Tag>
        )}>
        {items.map((item) => (
          <Option
            data-semantic="option"
            className={classNames?.option}
            style={styles?.option}
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
