import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import dts from "vite-plugin-dts";
import * as path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    dts({
      tsconfigPath: "tsconfig.app.json",
      exclude: [
        "**/__stories__/*.stories.tsx",
        "**/typography/__stories__/*.stories.tsx"
      ]
    })
  ],
  resolve: {
    alias: {
      "@quen-ui/theme": path.resolve(__dirname, "../theme/src")
    }
  },
  build: {
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "react-dom"],
      output: {
        entryFileNames: "[name].js",
        globals: {
          react: "React",
          "react-dom": "React-dom",
          "react/jsx-runtime": "react/jsx-runtime"
        }
      }
    },
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      formats: ["es"]
    }
  }
});
