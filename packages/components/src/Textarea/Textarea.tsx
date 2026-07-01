import React, {
  ChangeEvent,
  useState,
  useRef,
  FocusEventHandler,
  MouseEventHandler
} from "react";
import { cnMerge } from "@quen-ui/helpers";
import TextareaAutosize from "react-textarea-autosize";
import { Button } from "../Button";
import { ITextareaProps } from "./types";
import { TextareaStyled, TextareaComponentWrapper } from "./styles";
import IconClose from "../assets/icon-close.svg";

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
  disabled,
  required,
  error,
  placeholder,
  clearable,
  classNameTextarea,
  autosize,
  maxRows,
  minRows,
  style,
  classNames,
  styles,
  ...props
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

  const handleClearClick: MouseEventHandler<HTMLButtonElement> = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    onClear?.(event);
  };
  return (
    <TextareaComponentWrapper
      classNames={classNames}
      styles={styles}
      onClick={handleClick}
      className={cnMerge(className, {
        "quen-ui__input-base--focus-input": isFocus
      })}
      {...props}
      size={size}
      disabled={disabled}
      error={error}
      required={required}
      label={label}
      id={id}
      style={style}
      leftContent={leftContent}
      rightContent={rightContent}
      {...props}>
      <TextareaStyled<"textarea">
        id={id}
        disabled={disabled}
        className={cnMerge(classNameTextarea, classNames?.input)}
        style={styles?.input}
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
      {clearable && (
        <Button
          classNames={{ root: classNames?.clear }}
          styles={{ root: styles?.clear }}
          view="icon"
          size="xs"
          onClick={handleClearClick}
          disabled={disabled}>
          <IconClose width={16} height={16} />
        </Button>
      )}
    </TextareaComponentWrapper>
  );
};

export default Textarea;
