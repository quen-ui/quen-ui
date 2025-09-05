import styled from "styled-components";
import { Link } from "@tanstack/react-router";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--quen-ui-space-l);
  min-height: 100vh;
  background-color: var(--quen-ui-color-body);
  color: var(--quen-ui-color-text);
`;

export const Content = styled.div`
  flex: 1;
  max-width: 480px;
`;

export const Code = styled.h1`
  font-size: 6rem;
  color: var(--quen-ui-color-violet-9);
  margin: 0;
`;

export const Description = styled.p`
  color: var(--quen-ui-color-gray-6);
  margin-top: var(--quen-ui-space-xs);
`;
