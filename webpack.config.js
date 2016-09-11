'use strict';

const path = require('path');
// const webpack = require('webpack');

module.exports = {
    entry: {
        javascript: path.join(__dirname, 'app/index.js'),
        html: path.join(__dirname, 'index.html')
    },

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
            },
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            }
        ],

        exprContextCritical: false
    },

    plugins: [
        // new webpack.optimize.DedupePlugin(),
        // new webpack.optimize.OccurenceOrderPlugin(),
        // new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
    ]
};
