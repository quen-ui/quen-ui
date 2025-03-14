import React, { PropsWithChildren } from "react";
import { IHeaderProps } from "./types";
import { HeaderStyled } from "./styles";

const Header = ({
  children,
  size,
  color,
  onClick,
  type,
  className
}: PropsWithChildren<IHeaderProps>): React.ReactElement => (
  <HeaderStyled
    size={size}
    color={color}
    onClick={onClick}
    type={type}
    className={className}>
    {children}
  </HeaderStyled>
);

export default Header;
