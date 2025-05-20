import { ThemeProvider } from "styled-components";
import React from "react";
import { IQuenUITheme } from "./theme/types";

export const QuenUIProvider = ({
  theme,
  children
}: {
  theme: IQuenUITheme;
  children: React.ReactNode;
}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
