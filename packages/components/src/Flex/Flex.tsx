import React, { forwardRef } from "react";
import { IFlexProps } from "./types";
import { FlexWrapper } from "./styles";

const Flex = forwardRef(
  ({ children, ...props }: IFlexProps, ref): React.JSX.Element => {
    return (
      <FlexWrapper ref={ref} {...props}>
        {children}
      </FlexWrapper>
    );
  }
);

export default Flex;
