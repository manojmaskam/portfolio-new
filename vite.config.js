import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-three': ['three', '@react-three/fiber', '@react-three/drei'],
          gsap: ['gsap'],
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})
