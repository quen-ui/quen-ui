import {
  type PropsWithChildren,
  type MouseEvent,
  type KeyboardEvent,
  forwardRef,
  type ForwardedRef,
  type FC
} from "react";
import { cnMerge, deepMerge } from "@quen-ui/helpers";
import { IButtonProps } from "./types";
import { ButtonStyled } from "./styles";
import { Loader } from "../Loader";

const Button = (
  {
    size = "m",
    children,
    disabled,
    view,
    fullWidth,
    leftContent,
    rightContent,
    loading,
    loaderProps,
    onClick,
    onKeyPress,
    onKeyUp,
    style,
    classNames,
    className,
    styles,
    ...props
  }: PropsWithChildren<IButtonProps>,
  ref: ForwardedRef<HTMLElement>
) => {
  const handleClick = (
    event: MouseEvent<HTMLButtonElement> & MouseEvent<HTMLAnchorElement>
  ) => {
    if (!loading && !disabled) {
      onClick?.(event);
    }
  };

  const handleKeyPress = (
    event: KeyboardEvent<HTMLButtonElement> & KeyboardEvent<HTMLAnchorElement>
  ): void => {
    if (!disabled && !loading) {
      onKeyPress?.(event);
    }
  };

  const handleKeyUp = (
    event: KeyboardEvent<HTMLButtonElement> & KeyboardEvent<HTMLAnchorElement>
  ): void => {
    if (loading) {
      event.preventDefault();
    } else {
      onKeyUp?.(event);
    }
  };

  return (
    <ButtonStyled
      data-semantic="root"
      ref={ref}
      aria-busy={loading}
      aria-disabled={disabled}
      isDisabled={disabled}
      fullWidth={fullWidth}
      viewButton={view}
      size={size}
      forwardedAs="button"
      disabled={disabled}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      onKeyUp={handleKeyUp}
      style={deepMerge(style ?? {}, styles?.root ?? {})}
      className={cnMerge(className, classNames?.root)}
      {...props}>
      <span
        data-semantic="leftContent"
        className={classNames?.leftContent}
        style={styles?.leftContent}>
        {leftContent}
      </span>
      {loading && (
        <Loader
          data-semantic="loader"
          className={classNames?.loader}
          style={styles?.loader}
          view="oval"
          {...loaderProps}
        />
      )}
      {children}
      <span
        data-semantic="rightContent"
        className={classNames?.rightContent}
        style={styles?.rightContent}>
        {rightContent}
      </span>
    </ButtonStyled>
  );
};

export default forwardRef<HTMLElement, IButtonProps>(
  Button
) as FC<IButtonProps>;
