import React, {
  FocusEventHandler,
  useState,
  useRef,
  useMemo,
  MouseEventHandler,
  useLayoutEffect
} from "react";
import { cnMerge } from "@quen-ui/helpers";
import { IInputNumberProps } from "./types";
import { InputNumberStyled, InputBaseStyled } from "./styles";
import { Button } from "../Button";
import IconClose from "../assets/icon-close.svg";
import { Flex } from "../Flex";

const InputNumber = ({
  label,
  size = "m",
  required,
  disabled,
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
  allowNegative = true,
  decimalSeparator,
  rightContent,
  value,
  onChange,
  parser,
  formatter,
  leftContent,
  isAutoFocus,
  clearable,
  onClear,
  style,
  ...props
}: IInputNumberProps): React.ReactElement => {
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const [widthRightContent, setWidthRightContent] = useState(0);

  const _min = useMemo(() => {
    if (!allowNegative || (min ?? 0) > 0) {
      return min || 0;
    }
    return min;
  }, [min, allowNegative]);

  useLayoutEffect(() => {
    const element = rightContentRef.current;
    if (!element) return;

    setWidthRightContent(element.clientWidth ?? 0);

    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? 0;
      setWidthRightContent(width);
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [rightContent, clearable]);

  const handleClick = (): void => {
    setFocus(true);
    inputRef.current?.focus();
  };

  const handleBlur: FocusEventHandler = (event): void => {
    setFocus(false);
    onBlur?.(event);
  };

  const handleFocus: FocusEventHandler = (event): void => {
    setFocus(true);
    onFocus?.(event);
  };

  const handleClearClick:
    | MouseEventHandler<HTMLAnchorElement>
    | MouseEventHandler<HTMLButtonElement> = (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.stopPropagation();
    onChange?.(null);
    onClear?.(event);
  };

  return (
    <InputBaseStyled
      className={cnMerge(className, {
        "quen-ui__input-base--focus-input": focus
      })}
      id={id}
      data-testid="input"
      size={size}
      disabled={disabled}
      error={error}
      label={label}
      style={style}
      leftContent={leftContent}
      required={required}
      {...props}>
      <InputNumberStyled
        data-testid="input"
        widthRight={widthRightContent}
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
        disabled={disabled}
        className={classNameInput}
        min={_min}
        max={max}
        onClick={handleClick}
        onBlur={handleBlur}
        onFocus={handleFocus}
        keyboard={true}
        step={step}
        required={required}
        changeOnWheel
        upHandler="+"
        downHandler="-"
        addonAfter={
          clearable || rightContent ? (
            <Flex gap="xs" align="center" ref={rightContentRef}>
              {clearable && (
                <Button
                  data-testid="clearable-button"
                  view="icon"
                  size="xs"
                  onClick={handleClearClick}
                  disabled={disabled}>
                  <IconClose width={16} height={16} />
                </Button>
              )}
              {rightContent}
            </Flex>
          ) : undefined
        }
      />
    </InputBaseStyled>
  );
};

export default InputNumber;
