import pkg from "./package.json";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/components/index.ts"),
      name: "a98db973kwl8",
    },
    rollupOptions: {
      external: Object.keys(pkg.dependencies || {}),
    },
  },
});
