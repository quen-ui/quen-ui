import {
  PropsWithChildren,
  MouseEvent,
  KeyboardEvent,
  forwardRef,
  ForwardedRef,
  FC
} from "react";
import { useTheme } from "@quen-ui/theme";
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
      style={style}
      {...props}>
      {leftContent}
      {loading && <Loader view="oval" {...loaderProps} />}
      {children}
      {rightContent}
    </ButtonStyled>
  );
};

export default forwardRef<HTMLElement, IButtonProps>(Button) as FC<IButtonProps>;
