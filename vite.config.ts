import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://leonardojribeiro.github.io/desafio-ignite-react-01/',
  plugins: [react()]
})
