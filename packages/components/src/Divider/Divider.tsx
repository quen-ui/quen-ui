import React, { PropsWithChildren } from "react";
import { IDividerProps } from "./types";
import { DividerStyled } from "./styles";

const Divider = ({
  height,
  width,
  children,
  align = "center",
  view = "primary",
  direction,
  className
}: PropsWithChildren<IDividerProps>): React.ReactElement => (
  <DividerStyled
    role="separator"
    height={height}
    width={width}
    align={align}
    view={view}
    direction={direction}
    className={className}>
    {children}
  </DividerStyled>
);

export default Divider;
