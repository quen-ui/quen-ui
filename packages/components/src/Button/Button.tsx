import React, { PropsWithChildren } from "react";
import { TPropsWithAttributes } from "../types/propsWithAttributes";
import { IButtonProps } from "./types";
import { ButtonStyled } from "./styles";

const Button = ({
  size,
  children,
  isDisabled,
  view,
  fullWidth,
  leftContent,
  rightContent,
  isLoading,
  ...props
}: TPropsWithAttributes<
  PropsWithChildren<IButtonProps>,
  "button" | "a"
>): React.ReactElement => {
  console.log(isDisabled)
  return (
    <ButtonStyled
      fullWidth={fullWidth}
      viewButton={view}
      size={size}
      forwardedAs="button"
      disabled={isDisabled}
      {...props}>
      {leftContent}
      {isLoading ? "" :children}
      {rightContent}
    </ButtonStyled>
  );
};

Button.dispalyName = "Button";

export default Button;
