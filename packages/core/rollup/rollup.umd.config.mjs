import basicConfig from './rollup.config.mjs'
import { terser } from "rollup-plugin-terser"
import replace from '@rollup/plugin-replace'

const config = {
  ...basicConfig,
  output: [
    {
      name: 'FormCreated.Core',
      file: 'dist/index.umd.js',
      format: 'umd',
      exports: 'named',
      globals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'antd': 'Antd',
        'classnames': 'ClassNames',
        '@formily/reactive-react': 'Formily.ReactiveReact',
        '@formily/reactive-vue': 'Formily.ReactiveVue',
        '@formily/reactive': 'Formily.Reactive',
        '@formily/path': 'Formily.Path',
        '@formily/shared': 'Formily.Shared',
        '@formily/validator': 'Formily.Validator',
        '@formily/core': 'Formily.Core',
        '@formily/json-schema': 'Formily.JSONSchema',
        '@formily/react': 'Formily.React',
        '@form-created/shared': 'FormCreated.Shared',
        '@form-created/core': 'FormCreated.Core',
        '@form-created/react': 'FormCreated.React',
      },
      plugins: [
        terser(),
      ],
    },
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    ...basicConfig.plugins,
  ],
  external: ['react', 'react-dom', 'antd', '@ant-design/icons', 'classnames', '@formily/json-schema', '@formily/path', '@formily/reactive','@form-created/shared'],
}

export default config
