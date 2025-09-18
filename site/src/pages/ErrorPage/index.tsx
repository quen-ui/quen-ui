import { Button } from "@quen-ui/components";
import {
  QuenUIDarkTheme,
  QuenUILightTheme,
  QuenUIProvider
} from "@quen-ui/theme";
import { Link } from "@tanstack/react-router";
import { Wrapper, Code, Content, Description } from "./styles";

const ErrorPage = () => {
  const theme = localStorage.getItem("theme") ?? "light";

  return (
    <QuenUIProvider
      theme={theme === "light" ? QuenUILightTheme : QuenUIDarkTheme}>
      <Wrapper>
        <Content>
          <Code>Error</Code>
          <Description>Sorry, there was an error on this page.</Description>
          <Button to="/" as={Link}>
            Return to home
          </Button>
        </Content>
      </Wrapper>
    </QuenUIProvider>
  );
};

export default ErrorPage;
