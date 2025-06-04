import React, { PropsWithChildren } from "react";
import { ITextProps } from "./types";
import { TextStyled } from "./styles";

const Text = ({
  children,
  size = "m",
  color,
  onClick,
  type,
  as,
  className,
  styles,
  ...props
}: PropsWithChildren<ITextProps>) => (
  <TextStyled
    size={size}
    color={color}
    onClick={onClick}
    type={type}
    as={as}
    styles={styles}
    className={className}
    {...props}>
    {children}
  </TextStyled>
);

export default Text;
