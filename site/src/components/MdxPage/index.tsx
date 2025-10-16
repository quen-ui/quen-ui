import React from "react";
import { Tabs } from "@quen-ui/components";
import { IFrontmatter } from "../../types";
import MdxPageHeader from "./MdxPageHeader";
import MdxProvider from "./MdxProvider";
import { MdxPageStyled } from "./styles";
import PropsTable from "./PropsTable";
import TokensTable from "./TokensTable";
import ComponentVisualizer from "../ComponentVisualizer";

interface IMdxPageProps {
  frontmatter?: IFrontmatter;
  children: React.ReactNode;
}

const MdxPage = ({ frontmatter, children }: IMdxPageProps) => {
  if (frontmatter) {
    return (
      <MdxPageStyled>
        <MdxPageHeader frontmatter={frontmatter} />
        {frontmatter.group === "components" ? (
          <Tabs defaultValue="doc">
            <Tabs.TabsList>
              <Tabs.Tab value="doc">Documentation</Tabs.Tab>
              <Tabs.Tab value="props">Props</Tabs.Tab>
              {!frontmatter.hiddenStyleTokens && (
                <Tabs.Tab value="tokens">Style tokens</Tabs.Tab>
              )}
              {frontmatter.demo !== false && (
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
                  component={frontmatter.title}
                  props={frontmatter.props}
                />
              </div>
            </Tabs.TabPanel>
            <Tabs.TabPanel value="tokens">
              <div style={{ paddingLeft: "16px", paddingRight: "16px" }}>
                <TokensTable
                  component={
                    frontmatter.styleTokensComponent || frontmatter.title
                  }
                />
              </div>
            </Tabs.TabPanel>
            {frontmatter.demo !== false && (
              <Tabs.TabPanel value="demo">
                <div style={{ paddingLeft: "16px", paddingRight: "16px" }}>
                  <ComponentVisualizer
                    component={frontmatter.title}
                    defaultProps={frontmatter.defaultDemoProps}
                    excludeDemoProps={frontmatter.excludeDemoProps}
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
  }
  return null;
};

export default MdxPage;
