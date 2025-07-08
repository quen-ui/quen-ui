import * as React from "react"
import styled from "styled-components";
import { Link, HeadFC, PageProps } from "gatsby";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--quen-ui-space-l);
  min-height: 100vh;
  background-color: var(--quen-ui-color-body);
  color: var(--quen-ui-color-text);
`;

const Content = styled.div`
  flex: 1;
  max-width: 480px;
`;

const Code = styled.h1`
  font-size: 6rem;
  color: var(--quen-ui-color-violet-9);
  margin: 0;
`;

const Message = styled.h2`
  font-size: 2rem;
  margin: var(--quen-ui-space-xs) 0 0;
`;

const Description = styled.p`
  color: var(--quen-ui-color-gray-6);
  margin-top: var(--quen-ui-space-xs);
`;

const Button = styled(Link)`
  display: inline-block;
  margin-top: var(--quen-ui-space-m);
  padding: var(--quen-ui-space-xs) var(--quen-ui-space-m);
  background-color: var(--quen-ui-color-violet-9);
  color: white;
  border-radius: var(--quen-ui-control-radius);
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--quen-ui-color-violet-8);
  }
`;

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Wrapper>
      <Content>
        <Code>404</Code>
        <Message>Page not found</Message>
        <Description>
          Sorry, the page you are looking for does not exist or has been moved.
        </Description>
        <Button href="/">Return to home</Button>
      </Content>
    </Wrapper>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
