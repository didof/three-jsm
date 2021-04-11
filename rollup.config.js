import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import serve from 'rollup-plugin-serve'
import html from 'rollup-plugin-html'
import livereload from 'rollup-plugin-livereload'

export default {
  input: 'src/index.js',
  output: [
    {
      format: 'iife',
      file: 'dist/bundle.js',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({ browser: true, jsnext: true, main: true }),
    commonjs(),
    terser(),
    html({
      include: 'dist/index.html',
      htmlMinifierOptions: {
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        conservativeCollapse: true,
        minifyJS: true,
      },
    }),
    serve({
      open: true,
      verbose: true,
      contentBase: ['dist'],
      historyApiFallback: true,
      host: 'localhost',
      port: 3000,
    }),
    livereload({
      watch: ['src'],
    }),
  ],
}
