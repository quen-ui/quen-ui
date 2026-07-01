import React, {
  ChangeEvent,
  useState,
  useRef,
  FocusEventHandler,
  MouseEventHandler
} from "react";
import { cnMerge, deepMerge } from "@quen-ui/helpers";
import { Button } from "../Button";
import { ITextFieldProps } from "./types";
import { TextFieldInputStyled, TextFieldStyled } from "./styles";
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
  style,
  leftContentVariant,
  rightContentVariant,
  classNames,
  styles,
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
    <TextFieldStyled
      data-testid="text-field"
      onClick={handleClick}
      size={size}
      error={error}
      disabled={disabled}
      classNames={{
        ...classNames,
        root: cnMerge(
          className,
          {
            "quen-ui__input-base--focus-input": focus
          },
          classNames?.root
        )
      }}
      rightContent={rightContent}
      leftContent={leftContent}
      id={id}
      style={deepMerge(style ?? {}, styles?.root ?? {})}
      styles={styles}
      label={label}
      leftContentVariant={leftContentVariant}
      rightContentVariant={rightContentVariant}
      required={required}>
      <TextFieldInputStyled
        data-semantic="input"
        type={type}
        disabled={disabled}
        className={cnMerge(classNameInput, classNames?.input)}
        style={styles?.input}
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
          classNames={{ root: classNames?.clear }}
          styles={{ root: styles?.root }}
          data-semantic="clear"
          aria-label="clear"
          data-testid="clearable-button"
          view="icon"
          size="xs"
          onClick={handleClearClick}
          disabled={disabled}>
          <IconClose width={16} height={16} />
        </Button>
      )}
    </TextFieldStyled>
  );
};

export default TextField;
