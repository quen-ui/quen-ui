import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "node:path";
import { dependencies, peerDependencies } from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "tsconfig.build.json"
    })
  ],
  build: {
    minify: false,
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
    },
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      formats: ["cjs", "es"]

    }
  }
});
