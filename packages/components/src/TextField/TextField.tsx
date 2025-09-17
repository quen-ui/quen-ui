import React, {
  ChangeEvent,
  useState,
  useRef,
  FocusEventHandler,
  MouseEventHandler
} from "react";
import { Text } from "../typography/Text";
import { Button } from "../Button";
import { ITextFieldProps } from "./types";
import {
  TextFieldInputStyled,
  TextFieldWrapper,
  TextFieldInputWrapper
} from "./styles";
import IconClose from "../assets/icon-close.svg";

const TextField = ({
  value,
  onBlur,
  onFocus,
  onChange,
  onClear,
  leftContent,
  rightContent,
  id,
  name,
  className,
  label,
  size = "m",
  disabled,
  required,
  error,
  placeholder,
  clearable,
  classNameInput,
  type,
  ...props
}: ITextFieldProps): React.ReactElement => {
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange?.(event.target.value, event);
  };

  const handleClick = (): void => {
    setFocus(true);
    inputRef.current?.click();
  };

  const handleBlur: FocusEventHandler = (event): void => {
    setFocus(false);
    onBlur?.(event);
  };

  const handleClearClick:
    | MouseEventHandler<HTMLAnchorElement>
    | MouseEventHandler<HTMLButtonElement> = (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.stopPropagation();
    onChange?.("", event);
    onClear?.(event);
  };
  return (
    <TextFieldWrapper className={className} id={id}>
      {label && (
        <Text as="label" size={size}>
          {label}
          {required && <span className="text-field__required">*</span>}
        </Text>
      )}
      <TextFieldInputWrapper
        disabled={disabled}
        size={size}
        onClick={handleClick}
        focus={focus}
        error={error}>
        {leftContent}
        <TextFieldInputStyled
          type={type}
          disabled={disabled}
          className={classNameInput}
          name={name}
          ref={inputRef}
          size={size}
          forwardedAs={"input" as any}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          onFocus={onFocus}
          {...props}
        />
        {clearable && (
          <Button
            view="icon"
            size="xs"
            onClick={handleClearClick}
            disabled={disabled}>
            <IconClose width={16} height={16} />
          </Button>
        )}
        {rightContent}
      </TextFieldInputWrapper>
      {typeof error === "string" && (
        <Text className="text-field__error-message" size="xs">
          {error}
        </Text>
      )}
    </TextFieldWrapper>
  );
};

export default TextField;
