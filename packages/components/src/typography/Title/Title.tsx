import React, { PropsWithChildren } from "react";
import { ITitleProps } from "./types";
import { TitleStyled } from "./styles";

const Title = ({
  children,
  size,
  color,
  onClick,
  type,
  className,
  id,
  ...props
}: PropsWithChildren<ITitleProps>) => (
  <TitleStyled
    id={id}
    size={size}
    color={color}
    onClick={onClick}
    type={type}
    className={className}
    {...props}>
    {children}
  </TitleStyled>
);

export default Title;
