import React, { PropsWithChildren } from "react";
import { IControlProps } from "./types";
import { ControlStyled } from "./styles";

const Control = ({
  children,
  size,
  color,
  onClick,
  type,
  as
}: PropsWithChildren<IControlProps>): React.ReactElement => (
  <ControlStyled size={size} color={color} onClick={onClick} type={type} as={as}>
    {children}
  </ControlStyled>
);

export default Control;
