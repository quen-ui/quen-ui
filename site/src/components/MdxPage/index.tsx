import React from "react";
import { Tabs } from "@quen-ui/components";
import { graphql, type HeadFC } from "gatsby";
import { IFrontmatter } from "../../types";
import MdxPageHeader from "./MdxPageHeader";
import MdxProvider from "./MdxProvider";
import { MdxPageStyled } from "./styles";
import PropsTable from "./PropsTable";
import ComponentVisualizer from "../ComponentVisualizer";

interface IMdxPageProps {
  data: {
    mdx: {
      body: string;
      frontmatter: IFrontmatter;
    };
  };
  children: React.ReactNode;
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        package
        import
        source
        description
        group
        order
        demo
        props
        excludeDemoProps
        defaultDemoProps {
          children
        }
      }
    }
  }
`;

export const Head: HeadFC<IMdxPageProps["data"]> = ({ data }) => {
  return <title>{data.mdx.frontmatter.title} | QuenUI</title>;
};

const MdxPage = ({ data, children }: IMdxPageProps) => {
  const { mdx } = data;

  return (
    <MdxPageStyled>
      <MdxPageHeader frontmatter={mdx.frontmatter} />
      {mdx.frontmatter.group === "components" ? (
        <Tabs defaultValue="doc">
          <Tabs.TabsList>
            <Tabs.Tab value="doc">Documentation</Tabs.Tab>
            <Tabs.Tab value="props">Props</Tabs.Tab>
            {mdx.frontmatter.demo !== false && (
              <Tabs.Tab value="demo">Demo</Tabs.Tab>
            )}
          </Tabs.TabsList>
          <Tabs.TabPanel value="doc">
            <div
              style={{
                paddingLeft: "16px",
                paddingRight: "16px",
                paddingBottom: "16px"
              }}>
              <MdxProvider>{children}</MdxProvider>
            </div>
          </Tabs.TabPanel>
          <Tabs.TabPanel value="props">
            <div style={{ paddingLeft: "16px", paddingRight: "16px" }}>
              <PropsTable
                component={mdx.frontmatter.title}
                props={mdx.frontmatter.props}
                de
              />
            </div>
          </Tabs.TabPanel>
          {mdx.frontmatter.demo !== false && (
            <Tabs.TabPanel value="demo">
              <div style={{ paddingLeft: "16px", paddingRight: "16px" }}>
                <ComponentVisualizer
                  component={mdx.frontmatter.title}
                  defaultProps={mdx.frontmatter.defaultDemoProps}
                  excludeDemoProps={mdx.frontmatter.excludeDemoProps}
                />
              </div>
            </Tabs.TabPanel>
          )}
        </Tabs>
      ) : (
        <div
          style={{
            paddingLeft: "16px",
            paddingRight: "16px",
            paddingBottom: "16px"
          }}>
          <MdxProvider>{children}</MdxProvider>
        </div>
      )}
    </MdxPageStyled>
  );
};

export default MdxPage;
