import { ThemeProvider } from "styled-components";
import React, { useEffect } from "react";
import { IQuenUITheme } from "./theme/types";
import { injectCssVarsFromTheme } from "./injectCssVarsFromTheme";

export const QuenUIProvider = ({
  theme,
  children
}: {
  theme: IQuenUITheme;
  children: React.ReactNode;
}) => {
  useEffect(() => {
    injectCssVarsFromTheme(theme);
  }, [theme]);
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
}
