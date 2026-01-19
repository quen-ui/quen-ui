import { useEffect } from "react";
import { FooterStyled } from "./styles";
import { ILayoutFooterProps } from "./types";
import { useLayout } from "./Layout";

const Footer = ({ children }: ILayoutFooterProps) => {
  const { setIsFooter } = useLayout()

  useEffect(() => {
    setIsFooter(true);

    return () => {
      setIsFooter(false);
    }
  }, []);

  return <FooterStyled>{children}</FooterStyled>;
};

export default Footer;
