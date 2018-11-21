/* eslint-disable no-process-env */

process.env.NODE_ENV = 'development';

const common = require('./webpack.common.config.js');
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-inline-source-map',
});
