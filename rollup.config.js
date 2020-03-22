import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import sourcemaps from 'rollup-plugin-sourcemaps'
import { terser } from 'rollup-plugin-terser'

const plugins = (min) => [
  resolve(),
  commonjs(),
  min && terser({
    warnings: true,
    module: true
  }),
  sourcemaps()
].filter(Boolean)

export default [
  {
    input: 'esm/index.js',
    output: [
      {
        file: './dist/index.es.js',
        format: 'es',
        sourcemap: true
      }, {
        file: './dist/index.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true
      }
    ],
    plugins: plugins()
  },
  {
    input: 'esm/index.js',
    output: [
      {
        file: './dist/index.es.min.js',
        format: 'es',
        sourcemap: true
      }, {
        file: './dist/index.min.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true
      }
    ],
    plugins: plugins(true)
  }
]
