import React, { PropsWithChildren } from "react";
import { IControlProps } from "./types";
import { ControlStyled } from "./styles";

const Control = ({
  children,
  size,
  color,
  onClick,
  view,
  as,
  className
}: PropsWithChildren<IControlProps>): React.ReactElement => (
  <ControlStyled
    size={size}
    color={color}
    onClick={onClick}
    view={view}
    as={as}
    className={className}>
    {children}
  </ControlStyled>
);

export default Control;
