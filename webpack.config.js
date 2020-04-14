const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9101
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CopyWebpackPlugin([ 
            { from: 'src/index.html', to: path.join(__dirname, 'dist') },
            { from: 'src/index.css', to: path.join(__dirname, 'dist') } ]),
        new CleanWebpackPlugin(),
    ]
};
