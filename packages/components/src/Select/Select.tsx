import React, { useRef, useMemo } from "react";
import { TSelectProps, ISelectDefaultItem } from "./types";
import { Dropdown } from "../Dropdown";
import { Control } from "../typography/Control";
import {
  SelectContainerStyled,
  SelectWrapper,
  SelectInputStyled
} from "./styles";
import { useSelect } from "./useSelect";
import { withDefaultGetters } from "./helpers";

const Select = <ITEM = ISelectDefaultItem,>(
  props: TSelectProps<ITEM>
): React.ReactElement => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const {
    handleInputChange,
    items,
    isFocus,
    handleInputClick,
    handleChange,
    currentValue,
    isOpenDropDown,
    size,
    getItemLabel,
    getItemValue
  } = useSelect<ITEM>(
    withDefaultGetters(props) as TSelectProps<ITEM>,
    inputRef
  );

  const currentLabel = useMemo(() => {
    const it = items.find((i) => getItemValue?.(i) === currentValue);
    if (it) {
      return getItemLabel?.(it)
    }
    return null;
  }, [items, currentValue ])

  // useOnClickOutside(containerRef, handleBlur, { excludeRef: [inputRef] });

  return (
    <SelectWrapper>
      {props.label && (
        <Control as="label" size={size}>
          {props.label}
          {props.isRequired && <span className="text-field__required">*</span>}
        </Control>
      )}
      <SelectContainerStyled
        ref={containerRef}
        onClick={handleInputClick}
        size={size}
        isDisabled={props.isDisabled}
        error={Boolean(props.error)}
        style={props.style}
        isFocus={isFocus}
        className={props.className}>
        {!isFocus && currentLabel ? (
          <Control size={size}>
            {currentLabel}
          </Control>
        ) : (
          <SelectInputStyled
            forwardedAs="input"
            ref={inputRef}
            // onBlur={handleBlur}
            onFocus={handleInputClick}
            placeholder={props.placeholder}
            onChange={handleInputChange}
            size={size}
          />
        )}
      </SelectContainerStyled>
      <Dropdown
        anchorRef={containerRef}
        size={size}
        isOpen={isOpenDropDown}
        onItemClick={handleChange}
        items={items}
        getItemDisabled={props.getItemDisabled}
        getItemLabel={getItemLabel}
      />
    </SelectWrapper>
  );
};

export default Select;
