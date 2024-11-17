import basicConfig from './rollup.config.mjs'
import { terser } from "rollup-plugin-terser"
import replace from '@rollup/plugin-replace'

const config = {
  ...basicConfig,
  output: [
    {
      name: 'FormCreated.Formily.Transformer',
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
        '@form-created/react-settings-form': 'FormCreated.SettingsForm',
        '@form-created/formily-transformer': 'FormCreated.Formily.Transformer'
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
  external: [
    'react',
    'react-dom',
    'antd',
    '@ant-design/icons',
    'classnames',
    '@formily/reactive-react',
    '@formily/reactive-vue',
    '@formily/reactive',
    '@formily/path',
    '@formily/shared',
    '@formily/validator',
    '@formily/core',
    '@formily/json-schema',
    '@formily/react',
    '@form-created/shared',
    '@form-created/core',
    '@form-created/react',
    '@form-created/react-settings-form',
    '@form-created/formily-transformer',
  ],
}

export default config
