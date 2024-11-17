import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'
//console.log("路径地址:",path.resolve(__dirname, '../packages/antd/src/index.tsx'));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@form-created/core': path.resolve(__dirname, '../packages/core/src/index'),
      '@form-created/react': path.resolve(__dirname, '../packages/react/src/index'),
      '@form-created/shared': path.resolve(__dirname, '../packages/shared/src/index'),
      '@form-created/react-settings-form': path.resolve(__dirname, '../packages/react-settings-form/src/index'),
      '@form-created/formily-transformer': path.resolve(__dirname, '../formily/transformer/src/index'),
    }
  }
})
