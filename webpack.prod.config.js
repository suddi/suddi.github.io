'use strict';

/* eslint camelcase: 'off' */

const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',

    entry: [
        path.join(__dirname, 'app/index.js')
    ],

    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },

    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ],

    module: {
        loaders: [
            {
                test: /\.js?$/,
                include: path.join(__dirname, 'app'),
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss?$/,
                loader: 'style!css!sass',
                include: path.join(__dirname, 'src', 'styles') 
            },
            {
                test: /\.png$/,
                loader: 'file'
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file'
            }
        ]
    }
}
