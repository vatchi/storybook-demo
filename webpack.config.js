const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    entry: {
        main: [ './src/main.js' ],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'storybook-demo.js',
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    stats: {
        children: false,
        colors: true,
    },
    devtool: 'source-map',
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            '@': path.join(__dirname, 'Assets'),
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: [/node_modules/],
                loader: 'vue-loader',
            },
            // this will apply to both plain `.js` files
            // AND `<script>` blocks in `.vue` files
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loader: 'babel-loader',
            },
            // this will apply to both plain `.scss` files
            // AND `<style lang="scss">` blocks in `.vue` files
            {
                test: /\.s[ac]ss$/i,
                exclude: [/node_modules/],
                use: [
                    // Create css file from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },
};
