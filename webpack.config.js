// jshint esversion: 6

const webpack = require('webpack');
const path = require('path');
const providePlugin = new webpack.ProvidePlugin({
    'React': 'react',
    'ReactDOM': 'react-dom',
    'R': 'ramda',
    'classNames': 'classnames'
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
        publicPath: '/assets/',
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
                plugins: [
                    [ 'transform-object-rest-spread', { useBuiltIns: true } ],
                ],
                cacheDirectory: true
            }
        }]
    },
    devtool: 'eval-source-map',
    target: 'web',
    devServer: {
        contentBase: __dirname,
        compress: true,
        port: 8080
    }
};
