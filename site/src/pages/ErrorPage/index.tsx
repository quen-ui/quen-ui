import { Button } from "@quen-ui/components";
import { Link } from "@tanstack/react-router";
import { Wrapper, Code, Content, Description } from "./styles";

const ErrorPage = () => {
  return (
    <Wrapper>
      <Content>
        <Code>Error</Code>
        <Description>
          Sorry, there was an error on this page.
        </Description>
        <Button to="/" as={Link}>Return to home</Button>
      </Content>
    </Wrapper>
  )
}

export default ErrorPage
