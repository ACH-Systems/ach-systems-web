import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://achsystem.es",
  base: "/",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
