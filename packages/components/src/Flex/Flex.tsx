import React from "react";
import { IFlexProps } from "./types";
import { FlexWrapper } from "./styles";

const Flex = ({ children, ...props }: IFlexProps): React.ReactElement => (
  <FlexWrapper {...props}>{children}</FlexWrapper>
);

export default Flex;
