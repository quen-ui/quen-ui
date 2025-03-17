import React, { PropsWithChildren } from "react";
import { IControlProps } from "./types";
import { ControlStyled } from "./styles";
import { TPropsWithAttributes } from "../../types/propsWithAttributes";

const Control = ({
  children,
  size,
  color,
  onClick,
  view,
  as,
  className,
  ...props
}: TPropsWithAttributes<
  PropsWithChildren<IControlProps>
>): React.ReactElement => (
  <ControlStyled
    size={size}
    color={color}
    onClick={onClick}
    view={view}
    as={as}
    className={className}
    {...props}
  >
    {children}
  </ControlStyled>
);

Control.dispalyName = "Control";

export default Control;
