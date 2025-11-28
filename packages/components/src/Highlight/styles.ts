import styled from "styled-components";
import type { IHighlightProps } from "./types";
import { IQuenUITheme } from "@quen-ui/theme";

export const HighlightStyled = styled.mark<{ color: IHighlightProps["color"] }>`
  padding: 0.05em 0.15em;
  border-radius: 0.15rem;
  background: ${({ color, theme }) =>
    color && color in theme.colors
      ? theme.colors[color as keyof IQuenUITheme["colors"]][3]
      : color};
  color: inherit;
  font-weight: 600;
`;
