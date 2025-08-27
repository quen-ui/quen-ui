import React from "react";
import { FooterStyled } from "./styles";
import { ILayoutFooterProps } from "./types";

const Footer = ({ children }: ILayoutFooterProps): React.ReactElement => {
  return <FooterStyled>{children}</FooterStyled>;
};

export default Footer;
