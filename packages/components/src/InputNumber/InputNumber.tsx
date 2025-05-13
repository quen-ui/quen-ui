import React, { FocusEventHandler, useState, useRef, useMemo } from "react";
import { IInputNumberProps } from "./types";
import {
  InputNumberWrapper,
  InputNumberContainer,
  InputNumberStyled
} from "./styles";
import { Text } from "../typography/Text";

const InputNumber = ({
  label,
  size = "m",
  isRequired,
  isDisabled,
  error,
  min,
  max,
  className,
  classNameInput,
  onBlur,
  onFocus,
  defaultValue,
  id,
  name,
  placeholder,
  step,
  isAllowNegative = true,
  decimalSeparator,
  rightContent,
  value,
  onChange,
  parser,
  formatter,
  leftContent,
  isAutoFocus
}: IInputNumberProps): React.ReactElement => {
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const _min = useMemo(() => {
    if (!isAllowNegative || (min ?? 0) > 0) {
      return min || 0;
    }
    return min;
  }, [min, isAllowNegative]);

  const handleClick = (): void => {
    setIsFocus(true);
    inputRef.current?.focus();
  };

  const handleBlur: FocusEventHandler = (event): void => {
    setIsFocus(false);
    onBlur?.(event);
  };

  const handleFocus: FocusEventHandler = (event): void => {
    setIsFocus(true);
    onFocus?.(event);
  };

  return (
    <InputNumberWrapper className={className}>
      {label && (
        <Text size={size} as="label">
          {label}
          {isRequired && (
            <span className="quen-ui--input-number__required">*</span>
          )}
        </Text>
      )}
      <InputNumberContainer
        size={size}
        isFocus={isFocus}
        isDisabled={isDisabled}
        onClick={handleClick}
        error={error}>
        {leftContent}
        <InputNumberStyled
          ref={inputRef}
          onChange={onChange}
          value={value}
          parser={parser}
          formatter={formatter}
          decimalSeparator={decimalSeparator}
          autoFocus={isAutoFocus}
          placeholder={placeholder}
          name={name}
          id={id}
          defaultValue={defaultValue}
          disabled={isDisabled}
          className={classNameInput}
          min={_min}
          max={max}
          onClick={handleClick}
          onBlur={handleBlur}
          onFocus={handleFocus}
          keyboard={true}
          step={step}
          required={isRequired}
          changeOnWheel
          upHandler="+"
          downHandler="-"
        />
        {rightContent}
      </InputNumberContainer>
      {typeof error === "string" && (
        <Text className="quen-ui--input-number__error-message" size="xs">
          {error}
        </Text>
      )}
    </InputNumberWrapper>
  );
};

export default InputNumber;
