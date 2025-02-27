import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0", // Allows external devices to access the dev server
    port: 8080, // Port for the dev server
  },
  plugins: [react()],
  base: "/portfolio/", // Adjust base path for GitHub Pages deployment
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias for simplifying imports
    },
  },
  build: {
    outDir: "dist", // Ensures the build output directory is "dist"
    emptyOutDir: true, // Clears the output directory before building
  },
}));
