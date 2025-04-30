import React, { JSX, JSXElementConstructor, PropsWithChildren } from "react";
import { TControlProps } from "./types";
import { ControlStyled } from "./styles";

const Control = <
  Tag extends keyof JSX.IntrinsicElements | JSXElementConstructor<any> = "span"
>({
  children,
  size,
  color,
  onClick,
  view,
  as,
  className,
  ...props
}: PropsWithChildren<TControlProps<Tag>>): React.ReactElement => {
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
