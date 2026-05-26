/** @type { import('@storybook/react-vite').StorybookConfig } */
import path from "node:path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../__docs__/**/*.mdx",
    "../packages/theme/**/__docs__/*.mdx",
    "../packages/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../packages/data-grid/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  staticDirs: ["../public"],
  viteFinal(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@quen-ui/theme": path.resolve(__dirname, "../packages/theme/index.ts"),
      "@quen-ui/hooks": path.resolve(__dirname, "../packages/hooks/index.ts"),
      "@quen-ui/helpers": path.resolve(
        __dirname,
        "../packages/helpers/index.ts"
      ),
      "@quen-ui/components": path.resolve(__dirname, "../packages/components/index.ts")
    };
    return config;
  }
};
export default config;
