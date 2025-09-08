import { createContext } from "react";

export const ThemeContext = createContext<{
  theme: string;
  onChange: (theme: string) => void;
}>({
  theme: "light",
  onChange: () => {},
});
