import React, {
  ChangeEvent,
  useState,
  useRef,
  FocusEventHandler,
  MouseEventHandler
} from "react";
import {} from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import { Text } from "../typography/Text";
import { Button } from "../Button";
import { ITextareaProps } from "./types";
import {
  TextareaStyled,
  TextareaWrapper, TextareaComponentWrapper
} from "./styles";
import IconClose from "../assets/icon-close.svg?react";

const Textarea = ({
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
  classNameTextarea,
  autosize,
  maxRows,
  minRows
}: ITextareaProps): React.ReactElement => {
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
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
    MouseEventHandler<HTMLButtonElement> = (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    onClear?.(event);
  };
  return (
    <TextareaComponentWrapper className={className} id={id}>
      {label && (
        <Text as="label" size={size}>
          {label}
          {isRequired && <span className="text-field__required">*</span>}
        </Text>
      )}
      <TextareaWrapper
        isDisabled={isDisabled}
        size={size}
        onClick={handleClick}
        isFocus={isFocus}
        error={error}>
        {leftContent}
        <TextareaStyled<"textarea">
          disabled={isDisabled}
          className={classNameTextarea}
          name={name}
          ref={inputRef}
          size={size}
          forwardedAs={(autosize ? TextareaAutosize : "textarea") as any}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          onFocus={onFocus}
          maxRows={maxRows}
          minRows={minRows}
          rows={minRows}
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
      </TextareaWrapper>
      {typeof error === "string" && (
        <Text className="text-field__error-message" size="xs">
          {error}
        </Text>
      )}
    </TextareaComponentWrapper>
  );
};

export default Textarea;
