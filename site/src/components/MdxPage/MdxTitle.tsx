import React from "react";
import { Title } from "@quen-ui/components";
import { MdxTitleLinkStyled, TitleStyled } from "./styles";

const MdxTitle = ({
  children,
  size,
  id,
  ...props
}: React.ComponentPropsWithoutRef<typeof Title>) => {
  if (size === "l") {
    return <Title size={size} as="p">{children}</Title>;
  }
  return (
    <TitleStyled size={size} forwardedAs="p" {...props}>
      <MdxTitleLinkStyled href={`#${id}`}>{children}</MdxTitleLinkStyled>
    </TitleStyled>
  );
};

export default MdxTitle;
