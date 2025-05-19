import React, { PropsWithChildren } from "react";
import { FooterStyled } from "./styles";

const Footer = ({ children }: PropsWithChildren): React.ReactElement => {
  return <FooterStyled>{children}</FooterStyled>;
};

export default Footer;
