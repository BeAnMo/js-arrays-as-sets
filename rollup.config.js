const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

const plugins = [
  commonjs(),
  nodeResolve(),
];

module.exports = [
  {
    input: 'src/flexible/index.js',
    output: {
      file: 'dist/flexible.js',
      format: 'umd',
      name: 'arrset'
    },
    plugins
  },
  {
    input: 'src/optimized/index.js',
    output: {
      file: 'dist/optimized.js',
      format: 'umd',
      name: 'arrsetOptimized'
    },
    plugins
  },
];
