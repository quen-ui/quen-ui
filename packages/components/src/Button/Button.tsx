import React, { PropsWithChildren, MouseEvent, KeyboardEvent } from "react";
import { TPropsWithAttributes } from "../types/propsWithAttributes";
import { IButtonProps } from "./types";
import { ButtonStyled } from "./styles";
import { Loader } from "../Loader";

const Button = ({
  size,
  children,
  isDisabled,
  view,
  fullWidth,
  leftContent,
  rightContent,
  isLoading,
  loaderProps,
  onClick,
  onKeyPress,
  onKeyUp,
  ...props
}: TPropsWithAttributes<
  PropsWithChildren<IButtonProps>,
  "button" | "a"
>): React.ReactElement => {
  const handleClick = (
    event: MouseEvent<HTMLButtonElement> & MouseEvent<HTMLAnchorElement>
  ) => {
    if (!isLoading && !isDisabled) {
      onClick?.(event);
    }
  };

  const handleKeyPress = (
    event: KeyboardEvent<HTMLButtonElement> & KeyboardEvent<HTMLAnchorElement>
  ): void => {
    if (!isDisabled && !isLoading) {
      onKeyPress?.(event);
    }
  };

  const handleKeyUp = (
    event: KeyboardEvent<HTMLButtonElement> & KeyboardEvent<HTMLAnchorElement>
  ): void => {
    if (isLoading) {
      event.preventDefault();
    } else {
      onKeyUp?.(event);
    }
  };

  return (
    <ButtonStyled
      fullWidth={fullWidth}
      viewButton={view}
      size={size}
      forwardedAs="button"
      disabled={isDisabled}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      onKeyUp={handleKeyUp}
      {...props}>
      {leftContent}
      {isLoading ? <Loader view="oval" {...loaderProps} /> : children}
      {rightContent}
    </ButtonStyled>
  );
};

Button.dispalyName = "Button";

export default Button;
