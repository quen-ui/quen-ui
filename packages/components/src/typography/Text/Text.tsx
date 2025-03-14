import React, { PropsWithChildren } from "react";
import { ITextProps } from "./types";
import { TextStyled } from "./styles";

const Text = ({
  children,
  size,
  color,
  onClick,
  type,
  as
}: PropsWithChildren<ITextProps>): React.ReactElement => (
  <TextStyled size={size} color={color} onClick={onClick} type={type} as={as}>
    {children}
  </TextStyled>
);

export default Text;
