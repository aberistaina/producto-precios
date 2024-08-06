import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Cambia el puerto a lo que necesites
    host: '0.0.0.0', // Escuchar en todas las interfaces de red
  },
})

