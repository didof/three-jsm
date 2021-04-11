import { nodeResolve as resolve } from '@rollup/plugin-node-resolve'
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
    resolve({ browser: true }),
    terser(),
    html({
      include: './index.html',
    }),
    serve({
      open: true,
      verbose: true,
      contentBase: ['', 'dist'],
      historyApiFallback: true,
      host: 'localhost',
      port: 3000,
    }),
    livereload({
      watch: ['', 'dist'],
    }),
  ],
}
