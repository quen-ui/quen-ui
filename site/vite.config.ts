import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import { fileURLToPath, URL } from "node:url";


export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true
    }),
    tsconfigPaths(),
    react(),
    svgr(),
    mdx({
      remarkPlugins: [
        remarkFrontmatter,
        remarkMdxFrontmatter,
      ],
    })
  ],
  resolve: {
    alias: {
      "@quen-ui/theme": fileURLToPath(new URL("../packages/theme/src", import.meta.url)),
      "@quen-ui/theme/*": fileURLToPath(new URL("../packages/theme/src/*", import.meta.url)),
      "@quen-ui/components": fileURLToPath(new URL("../packages/components/src", import.meta.url)),
    },
  },
  assetsInclude: ['**/*.png']
});
