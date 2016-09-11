'use strict';

const path = require('path');
// const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(__dirname, '/index.html'),
    filename: 'index.html'
});

module.exports = {
    entry: [
        path.join(__dirname, 'app/index.js')
    ],

    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'app'),
                loaders: ['react-hot', 'babel-loader']
            }
        ],

        exprContextCritical: false
    },

    plugins: [
        HTMLWebpackPluginConfig
        // new webpack.optimize.DedupePlugin(),
        // new webpack.optimize.OccurenceOrderPlugin(),
        // new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
    ]
};
