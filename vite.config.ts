import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    tailwindcss(),
    dts({
      include: ["src/**/*.ts", "src/**/*.tsx"],
      exclude: ["src/**/*.test.ts", "src/**/*.test.tsx"],
      rollupTypes: true,
      tsconfigPath: "./tsconfig.app.json",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      name: "EmperorUI",
      fileName: "emperor-ui",
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        // Single ESM chunk so the published tarball does not ship hashed split chunks
        // alongside the entry file (same bytes, fewer files; easier for consumers).
        inlineDynamicImports: true,
        // Next.js App Router: mark the package as client-only so the server bundle
        // does not evaluate HeroUI / motion / aria code that touches `document`.
        banner: '"use client";\n',
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: "globals.css",
      },
    },
  },
});
