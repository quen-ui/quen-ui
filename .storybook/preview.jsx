/** @type { import('@storybook/react').Preview } */
import React from 'react';
import { ThemeProvider } from "styled-components";
import { LightTheme } from "@quen-ui/theme/src";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
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
