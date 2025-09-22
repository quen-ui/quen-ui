import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import dts from "vite-plugin-dts";
import * as path from "node:path";
import { dependencies, peerDependencies } from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({ include: "**/*.svg" }),
    dts({
      tsconfigPath: "tsconfig.app.json",
      outDir: "dist",
      entryRoot: "src",
      insertTypesEntry: true,
      exclude: [
        "**/__stories__/*.stories.tsx",
        "**/typography/__stories__/*.stories.tsx",
        "**/*.test.tsx"
      ]
    })
  ],
  resolve: {
    alias: {
      "@quen-ui/theme": path.resolve(__dirname, "../theme/src")
    }
  },
  build: {
    minify: false,
    lib: {
      entry: path.resolve(__dirname, "./index.ts"),
      formats: ["cjs", "es"]
    },
    rollupOptions: {
      external: [
        ...Object.keys(dependencies ?? {}),
        ...Object.keys(peerDependencies ?? {}),
        "polished",
        "react/jsx-runtime"
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: `[name].[format].js`,
        globals: {
          react: "React",
          "react-dom": "React-dom",
          "react/jsx-runtime": "react/jsx-runtime"
        }
      }
    }
  }
});
