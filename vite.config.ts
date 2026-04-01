import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

/** Bundle only local source; ship dependencies as peers so the tarball stays small. */
function isBundledModuleId(id: string): boolean {
  if (id.startsWith("virtual:") || id.startsWith("\0")) return true;
  if (id.startsWith(".") || id.startsWith("/")) return true;
  if (path.isAbsolute(id)) return true;
  return false;
}

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
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      name: "EmperorUI",
      fileName: "emperor-ui",
      formats: ["es"],
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: (id) => !isBundledModuleId(id),
      output: {
        // Single ESM chunk so the published tarball does not ship hashed split chunks
        // alongside the entry file (same bytes, fewer files; easier for consumers).
        inlineDynamicImports: true,
        // Next.js App Router: mark the package as client-only so the server bundle
        // does not evaluate HeroUI / motion / aria code that touches `document`.
        banner: '"use client";\n',
        assetFileNames: "globals.css",
      },
    },
  },
});
