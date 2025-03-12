import React, { PropsWithChildren } from "react";
import { IHeaderProps } from "./types";
import { HeaderStyled } from "./styles";

const Header = ({
  children,
  size,
  color,
  onClick
}: PropsWithChildren<IHeaderProps>): React.ReactElement => (
  <HeaderStyled size={size} color={color} onClick={onClick}>
    {children}
  </HeaderStyled>
);

export default Header;
