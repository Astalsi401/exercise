import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { stylex } from "@stylex-extend/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), stylex()],
  base: "/exercise",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
