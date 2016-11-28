// jshint esversion: 6

const webpack = require('webpack');
const path = require('path');
const providePlugin = new webpack.ProvidePlugin({
    'React': 'react',
    'ReactDOM': 'react-dom',
    'R': 'ramda'
});

const plugins = [
    providePlugin
];

module.exports = {
    context: path.resolve(__dirname, 'src', 'js'),
    entry: {
        app: './app.js'
    },
    plugins,
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: [
                    [ 'es2015', { 'modules': false } ],
                    'react'
                ],
                cacheDirectory: true
            }
        }]
    },
    devtool: 'eval-source-map',
    target: 'web'
};
