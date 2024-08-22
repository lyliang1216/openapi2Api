// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "index.mjs"),
      name: "genApi",
      fileName: "bundle",
    },
    rollupOptions: {
      external: ["fs", "path", "url", "pinyin"],
      output: {
        globals: {
          fs: "fs",
          path: "path",
          url: "url",
          pinyin: "pinyin",
        },
      },
    },
  },
});
