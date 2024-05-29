import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'
console.log("路径地址:",path.resolve(__dirname, '../packages/antd/src/index.tsx'));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@form-created/antd': path.resolve(__dirname, '../packages/antd/src/index.tsx')
    }
  }
})
