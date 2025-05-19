import React, { PropsWithChildren} from "react";
import { ContentStyled } from "./styles";

const Content = ({ children }: PropsWithChildren): React.ReactElement => {
  console.log(111);

  return <ContentStyled>{children}</ContentStyled>
};

export default Content;
