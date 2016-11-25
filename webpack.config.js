// jshint esversion: 6

const webpack = require('webpack');
const providePlugin = new webpack.ProvidePlugin({
    'React': 'react',
    'ReactDOM': 'react-dom',
    'R': 'ramda'
});

const plugins = [
    providePlugin
];

module.exports = {
    context: __dirname,
    entry: '',
    plugins,
    output: {
        path: __dirname,
        filename: ''
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
    }
};
