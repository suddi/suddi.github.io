'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const S3Plugin = require('webpack-s3-plugin');

const webpackConfig = require('./webpack.config');

function getConfig(config) {
    const plugins = config.plugins;
    const extendedPlugins = plugins.concat([
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),
            filename: 'index.html'
        }),
        new S3Plugin({
            s3Options: {
                region: process.env.AWS_REGION
            },
            s3UploadOptions: {
                Bucket: process.env.AWS_S3_BUCKET
            },
            basePathTransform: function () {
                return require('./package').version;
            },
            directory: 'public'
        })
    ]);

    return Object.assign({}, config, {
        plugins: extendedPlugins
    });
}

module.exports = getConfig(webpackConfig);
