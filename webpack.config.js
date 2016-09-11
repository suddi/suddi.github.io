'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',

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
                loaders: ['babel-loader']
            }
        ]
    },

    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
    ]
};
