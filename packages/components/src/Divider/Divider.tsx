import type { PropsWithChildren, ReactElement } from "react";
import { IDividerProps } from "./types";
import { DividerStyled } from "./styles";

const Divider = ({
  height,
  width,
  children,
  align = "center",
  view = "primary",
  direction,
  className,
  ...props
}: PropsWithChildren<IDividerProps>): ReactElement => (
  <DividerStyled
    {...props}
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
