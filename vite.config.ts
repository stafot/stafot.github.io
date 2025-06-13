import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => ({
  // Base public path (adjust if you're hosting under a sub-path)
  base: mode === "production" ? "/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "docs",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),  // replaces @vitejs/plugin-react-swc
  ],
}));

