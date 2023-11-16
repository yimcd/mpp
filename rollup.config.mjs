import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist-js/bundle.js',
        format: 'iife',
    },
    plugins: [json(), terser()]
}