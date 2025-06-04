import React from "react";
import { Title, Text, Flex, Button } from "@quen-ui/components";
import { Highlight } from "prism-react-renderer";
import { useTheme } from "@quen-ui/theme";
import { IFrontmatter } from "../../types";
import { MdxPageHeaderStyled } from "./styles";
import { themeHighlight } from "./themeHighlight";

interface IMdxPageHeaderProps {
  frontmatter: IFrontmatter;
}

const MdxPageHeader = ({ frontmatter }: IMdxPageHeaderProps) => {
  const theme = useTheme();
  return (
    <MdxPageHeaderStyled>
      <Flex direction="column" gap="xs">
        <Title size="xl">{frontmatter.title}</Title>
        <Text size="l">{frontmatter.description}</Text>
        {frontmatter.import && (
          <Flex align="center" gap="xs">
            <Text size="s" type="disabled">
              Import:{" "}
            </Text>
            <Highlight
              theme={themeHighlight(theme)}
              language="javascript"
              code={frontmatter.import}>
              {({ tokens, getLineProps, getTokenProps }) => (
                <pre>
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </Flex>
        )}
        {frontmatter.source && (
          <Flex align="center">
            <Text size="s" type="disabled">Source: </Text>
            <Button
              as="a"
              view="link"
              href={`https://github.com/quen-ui/quen-ui/tree/main${frontmatter.source}`}>
              View source code
            </Button>
          </Flex>
        )}
      </Flex>
    </MdxPageHeaderStyled>
  );
};

export default MdxPageHeader;
