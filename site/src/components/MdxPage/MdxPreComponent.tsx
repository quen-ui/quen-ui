import React from "react";
import { Highlight } from "prism-react-renderer";
import { Button } from "@quen-ui/components";
import { useTheme } from "@quen-ui/theme";
import { CodeStyled } from "./styles";
import { themeHighlight } from "./themeHighlight";

export interface IMdxPreComponentProps {
  children: {
    props: {
      className?: string;
      children: string;
    };
  };
  className?: string;
}

const MdxPreComponent = (props: IMdxPreComponentProps) => {
  const theme = useTheme();
  const matches = (props.children.props.className || "").match(
    /language-(?<lang>.*)/
  );
  const handleClick = (): void => {
    if (props.children.props.children) {
      navigator.clipboard.writeText(
        JSON.stringify(props.children.props.children)
      );
    }
  };

  return (
    <CodeStyled className={props.className}>
      <Highlight
        theme={themeHighlight(theme)}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ""
        }
        code={props.children.props.children}>
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
      <Button view="ghost" size="s" onClick={handleClick}>
        Copy
      </Button>
    </CodeStyled>
  );
};

export default MdxPreComponent;
