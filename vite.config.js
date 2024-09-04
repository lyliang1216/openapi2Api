// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./packages/index.mjs"),
      name: "genApi",
      fileName: "bundle",
    },
    rollupOptions: {
      external: ["fs", "path", "pinyin"],
      output: {
        globals: {
          fs: "fs",
          path: "path",
          pinyin: "pinyin",
        },
      },
    },
  },
});
