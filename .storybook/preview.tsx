import { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "@quen-ui/theme";
import "../packages/components/src/styles/reset.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },


    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={LightTheme}>
        <Story />
      </ThemeProvider>
    )
  ]
};

export default preview;
