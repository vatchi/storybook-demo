import commonjs from '@rollup/plugin-commonjs'; // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import postcss from 'rollup-plugin-postcss'; // v4.0.0
import buble from '@rollup/plugin-buble'; // Transpile/polyfill with reasonable browser support

export default {
    input: 'src/main.js', // Path relative to package.json
    output: {
        name: 'StorybookDemo',
        exports: 'named',
    },
    plugins: [
        // commonjs(),
        vue({
            preprocessStyles: true,
        }),
        postcss(),
        buble(), // Transpile to ES5
    ],
};
