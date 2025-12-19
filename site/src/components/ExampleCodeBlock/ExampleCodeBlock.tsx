import { Divider } from "@quen-ui/components";
import {
  ExampleCodeBlockWrapper,
  ExampleCodeBlockPreview,
  CodeBlockStyled
} from "./styles";
import { ExampleCodeBlockProps } from "./types";

const ExampleCodeBlock = ({ component, children }: ExampleCodeBlockProps) => {
  return (
    <ExampleCodeBlockWrapper>
      <ExampleCodeBlockPreview>{component}</ExampleCodeBlockPreview>
      <Divider direction="horizontal" />
      <CodeBlockStyled>
        {children.props.children}
      </CodeBlockStyled>
    </ExampleCodeBlockWrapper>
  );
};

export default ExampleCodeBlock;
