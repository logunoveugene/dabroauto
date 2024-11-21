import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  server: {
    open: true,
  },
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },

  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        // Указываем пути к каждому HTML файлу
        main: resolve(__dirname, "index.html"),
        contacts: resolve(__dirname, "contacts.html"),
        doctor: resolve(__dirname, "category.html"),
        doctors: resolve(__dirname, "item.html"),
      },
    },
  },
});
