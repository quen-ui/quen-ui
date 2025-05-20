import React, { PropsWithChildren, MouseEvent, KeyboardEvent } from "react";
import { IButtonProps } from "./types";
import { ButtonStyled } from "./styles";
import { Loader } from "../Loader";

const Button = ({
  size = "m",
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
}: PropsWithChildren<IButtonProps>) => {
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
      isDisabled={isDisabled}
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

export default Button;
