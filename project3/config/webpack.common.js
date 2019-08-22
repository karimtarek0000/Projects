// PLUGINS
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const {
    VueLoaderPlugin
} = require('vue-loader');


// VENDOR
const VENODE_LIBS = [
    "bootstrap",
    "jquery",
    "popper.js",
    "vue",
    "vue-resource",
    "vuex",
    "vue-router"
];

/////////////////////////////////////
/// CONFIGRATION

// ENTRY
const entry = {
    bundle: ['@babel/polyfill', './src/main.js'],
    vendor: VENODE_LIBS
};

// PERFORMANCE
const performance = {
    hints: false
};

// OPTIMIZATION
const optimization = {
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor',
                chunks: 'all'
            }
        }
    },
};

// DEVTOOL
const devtool = 'inline-source-map';

// MODULE RULES
const _module = {
    rules: [
        {
            use: 'babel-loader',
            test: /\.js$/
        },
        {
            test: /\.vue$/,
            use: [{
                loader: 'vue-loader'
            }]
        }
    ]
};

// PLUGINS
const plugins = [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
        filename: './assets/css/style.css'
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
];

// MODULE EXPORT
module.exports = {
    entry,
    performance,
    optimization,
    devtool,
    module: _module,
    plugins
}
