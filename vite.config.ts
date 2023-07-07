/// <reference types="vitest" />
import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";
import svgr from "vite-plugin-svgr";
import vercel from 'vite-plugin-vercel';
import vercelSsr from '@magne4000/vite-plugin-vercel-ssr';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), legacy(), svgr(), vercel(), vercelSsr()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      types: `${path.resolve(__dirname, "./src/types/")}`,
      components: `${path.resolve(__dirname, "./src/components/")}`,
      stores: `${path.resolve(__dirname, "./src/stores")}`,
      helpers: `${path.resolve(__dirname, "./src/helpers")}`,
      hooks: `${path.resolve(__dirname, "./src/hooks")}`,
      navigations: `${path.resolve(__dirname, "./src/navigations")}`,
      theme: `${path.resolve(__dirname, "./src/theme")}`,
      public: `${path.resolve(__dirname, "./public/")}`,
      config: `${path.resolve(__dirname, "./src/config/")}`,
      screen: `${path.resolve(__dirname, "./src/screen/")}`,
    },
  },
});
