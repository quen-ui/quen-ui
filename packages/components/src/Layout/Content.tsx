import React, { PropsWithChildren } from "react";
import { ContentStyled } from "./styles";

const Content = ({ children }: PropsWithChildren): React.ReactElement => {
  return <ContentStyled>{children}</ContentStyled>;
};

export default Content;
