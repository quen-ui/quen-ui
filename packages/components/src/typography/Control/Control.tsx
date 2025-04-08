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
  className,
  ...props
}: PropsWithChildren<IControlProps>): React.ReactElement => {
  return (
    <ControlStyled
      {...props}
      size={size}
      color={color}
      onClick={onClick}
      view={view}
      as={as}
      className={className}>
      {children}
    </ControlStyled>
  );
};

Control.dispalyName = "Control";

export default Control;
