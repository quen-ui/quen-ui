import React from "react";
import { Text } from "@quen-ui/components";
import { ITitleProps } from "@quen-ui/components";
import { MDXProvider } from "@mdx-js/react";
import { MDXComponents } from "mdx/types";
import MdxTitle from "./MdxTitle";
import MdxPreComponent from "./MdxPreComponent";
import { MdxCodeStyled } from "./styles";

const h = (size: ITitleProps["size"]) => (props: any) => (
  <MdxTitle size={size} {...props} />
);

const components: MDXComponents = {
  h1: h("2xl"),
  h2: h("xl"),
  h3: h("l"),
  h4: h("m"),
  h5: h("s"),
  h6: h("xs"),
  p: (props) => (
    <Text {...props} size="m" as="p" className="p-text" />
  ),
  pre: MdxPreComponent,
  code: (props) => <MdxCodeStyled {...props} size="m" forwardedAs="code" />,
  li: (props) => <Text {...props} size="m" as="li" />
};

const MdxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  );
};

export default MdxProvider;
