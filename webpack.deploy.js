'use strict';

const path = require('path');
const S3Plugin = require('webpack-s3-plugin');

const webpackConfig = require('./webpack.config');

function getBasePath(extension) {
    return path.join(require('./package').version, extension || '');
}

function getConfig(config) {
    const plugins = config.plugins;
    const extendedPlugins = plugins.concat([
        new S3Plugin({
            s3Options: {
                region: process.env.AWS_REGION
            },
            s3UploadOptions: {
                Bucket: process.env.AWS_S3_BUCKET
            },
            basePathTransform: getBasePath,
            include: /index\.html$/
        }),
        new S3Plugin({
            s3Options: {
                region: process.env.AWS_REGION
            },
            s3UploadOptions: {
                Bucket: process.env.AWS_S3_BUCKET
            },
            basePathTransform: getBasePath.bind(null, 'public'),
            directory: 'public'
        })
    ]);

    return Object.assign({}, config, {
        plugins: extendedPlugins
    });
}

module.exports = getConfig(webpackConfig);
