import React from "react";
import { ContentStyled } from "./styles";
import { ILayoutContentProps } from "./types";

const Content = ({ children, className }: ILayoutContentProps): React.ReactElement => {
  return <ContentStyled className={className}>{children}</ContentStyled>;
};

export default Content;
