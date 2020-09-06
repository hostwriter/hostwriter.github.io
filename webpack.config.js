var webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './bin'),
        filename: 'app.js',
    },
    plugins: [
        new webpack.ProvidePlugin({
            m: 'mithril'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'index.html' },
                { from: 'src/styles.css' }
            ]
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /\/node_modules\//,
            use: {
                loader: 'babel-loader'
            }
        }]
    }
}
