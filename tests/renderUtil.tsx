import { ReactElement, ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { QuenUILightTheme, QuenUIProvider } from "@quen-ui/theme";

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return <QuenUIProvider theme={QuenUILightTheme}>{children}</QuenUIProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export { customRender as render };
