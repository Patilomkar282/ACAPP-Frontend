
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Disables source maps
  },
  
})

/*
export default defineConfig({
  build: {
    sourcemap: false, // Disables source maps
  },
});
*/
