import React from "react";
import { ContentStyled } from "./styles";
import { ILayoutContentProps } from "./types";

const Content = ({ children }: ILayoutContentProps): React.ReactElement => {
  return <ContentStyled>{children}</ContentStyled>;
};

export default Content;
