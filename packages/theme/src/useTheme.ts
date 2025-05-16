import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { IQuenUITheme } from "./theme/types";

export const useTheme = (): IQuenUITheme => {
  const theme = useContext(ThemeContext) as IQuenUITheme;

  if (!theme) {
    throw new Error("useTheme must be used within a QuenUIProvider");
  }

  return theme;
};
