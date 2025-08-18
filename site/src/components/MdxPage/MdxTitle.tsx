import React, { useMemo } from "react";
import { Title } from "@quen-ui/components";
import { MdxTitleLinkStyled, TitleStyled } from "./styles";

const MdxTitle = ({
  children,
  size,
  ...props
}: React.ComponentPropsWithoutRef<typeof Title>) => {
  const id = useMemo(() => {
    return (children as string).toLowerCase().replaceAll(" ", "-")
  }, [children])
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
