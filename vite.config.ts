import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  if (command === 'serve') {
    return {
      // dev specific config
      plugins: [react()]
    }
  } else {
    // command === 'build'
    return {
      // build specific config
      base:"poc-chart",
      plugins: [react()]
    }
  }
})
