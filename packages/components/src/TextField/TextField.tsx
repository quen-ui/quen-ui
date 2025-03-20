import React, {
  ChangeEvent,
  useState,
  useRef,
  FocusEventHandler,
  MouseEventHandler
} from "react";
import { Control } from "../typography/Control";
import { Button } from "../Button";
import { ITextFieldProps } from "./types";
import {
  TextFieldInputStyled,
  TextFieldWrapper,
  TextFieldInputWrapper
} from "./styles";
import IconClose from "../assets/icon-close.svg?react";

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
  isDisabled,
  isRequired,
  error,
  placeholder,
  isClearable,
  classNameInput
}: ITextFieldProps): React.ReactElement => {
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange?.(event.target.value, event);
  };

  const handleClick = (): void => {
    setIsFocus(true);
    inputRef.current?.click();
  };

  const handleBlur: FocusEventHandler = (event): void => {
    setIsFocus(false);
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
        <Control as="label" size={size}>
          {label}
          {isRequired && <span className="text-field__required">*</span>}
        </Control>
      )}
      <TextFieldInputWrapper
        isDisabled={isDisabled}
        size={size}
        onClick={handleClick}
        isFocus={isFocus}
        error={error}>
        {leftContent}
        <TextFieldInputStyled
          disabled={isDisabled}
          className={classNameInput}
          name={name}
          ref={inputRef}
          size={size}
          forwardedAs="input"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          onFocus={onFocus}
        />
        {isClearable && (
          <Button
            view="icon"
            size="xs"
            onClick={handleClearClick}
            isDisabled={isDisabled}>
            <IconClose width={16} height={16} />
          </Button>
        )}
        {rightContent}
      </TextFieldInputWrapper>
      {typeof error === "string" && (
        <Control className="text-field__error-message" size="xs">
          {error}
        </Control>
      )}
    </TextFieldWrapper>
  );
};

export default TextField;
