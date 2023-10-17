import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@views": path.resolve(__dirname, "./src/views"),
      "@pages": path.resolve(__dirname, "./src/views/pages"),
      "@components": path.resolve(__dirname, "./src/views/components"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      // "@firebase": path.resolve(__dirname, "./src/firebase"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@store": path.resolve(__dirname, "./src/store"),
    },
  },
  plugins: [react()],
});
