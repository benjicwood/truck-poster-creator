import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(() => {
  return {
    base: "/truck-poster-creator/",
    plugins: [vue()],
  };
});
