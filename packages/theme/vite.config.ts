import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "tsconfig.app.json"
    })
  ],
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
