import { ThemeProvider } from "styled-components";
import React, { PropsWithChildren } from "react";
import { IQuenUITheme } from "./theme/types";

export const QuenUIProvider = ({ theme, children }: PropsWithChildren<{ theme: IQuenUITheme }>): React.ReactElement => (
  <ThemeProvider theme={theme}>{ children }</ThemeProvider>
)
