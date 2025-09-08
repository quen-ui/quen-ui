import { useState } from "react";
import { createRootRoute, Outlet, HeadContent } from "@tanstack/react-router";
import NotFoundPage from "../pages/NotFoundPage";
import ErrorPage from "../pages/ErrorPage";
import {
  QuenUILightTheme,
  QuenUIProvider,
  QuenUIDarkTheme
} from "@quen-ui/theme";
import { ThemeContext } from "src/helpers/themeContext";

const RootLayout = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") ?? "light"
  );

  const onChange = (_theme: string) => {
    setTheme(_theme);
    localStorage.setItem("theme", _theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, onChange }}>
      <QuenUIProvider
        theme={theme === "light" ? QuenUILightTheme : QuenUIDarkTheme}>
        <Outlet />
      </QuenUIProvider>
    </ThemeContext.Provider>
  );
};

export const Route = createRootRoute({
  component: () => (
    <>
      <HeadContent />
      <RootLayout />
    </>
  ),
  notFoundComponent: NotFoundPage,
  errorComponent: ErrorPage
});
