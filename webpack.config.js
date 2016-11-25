module.exports = {
    context: __dirname,
    entry: '',
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
