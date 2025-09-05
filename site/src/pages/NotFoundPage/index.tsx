import * as React from "react";
import { Button } from "@quen-ui/components";
import { Wrapper, Code, Content, Description } from "./styles";
import { Link } from "@tanstack/react-router";

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Content>
        <Code>404</Code>
        <Description>
          Sorry, the page you are looking for does not exist or has been moved.
        </Description>
        <Button to="/" as={Link}>
          Return to home
        </Button>
      </Content>
    </Wrapper>
  );
};

export default NotFoundPage;
