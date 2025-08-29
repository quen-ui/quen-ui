import React, { forwardRef, Ref } from "react";
import { IFlexProps } from "./types";
import { FlexWrapper } from "./styles";

const Flex = forwardRef(
  (
    { children, ...props }: IFlexProps,
    ref
  ): React.JSX.Element => {
    return (
      <FlexWrapper ref={ref as Ref<HTMLDivElement>} {...props}>
        {children}
      </FlexWrapper>
    );
  }
);

export default Flex;
