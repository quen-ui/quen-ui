import React, { PropsWithChildren } from "react";
import { IButtonProps } from "./types";
import { ButtonStyled } from "./styles";

const Button = ({
  size,
  children,
  isDisabled
}: PropsWithChildren<IButtonProps>): React.ReactElement => {
  console.log("111", isDisabled);

  return (
    <ButtonStyled
      size={size}
      forwardedAs="button"
      disabled={isDisabled}
      viewControl={isDisabled ? "disabled" : undefined}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
