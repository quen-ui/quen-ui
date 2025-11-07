import { PropsWithChildren } from "react";
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
  align,
  ...props
}: PropsWithChildren<ITitleProps>) => (
  <TitleStyled
    id={id}
    size={size}
    color={color}
    onClick={onClick}
    type={type}
    className={className}
    align={align}
    {...props}>
    {children}
  </TitleStyled>
);

export default Title;
