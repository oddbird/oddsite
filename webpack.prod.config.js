/* eslint-disable no-process-env */

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'production';
}

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack.common.config.js');
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',
  plugins: [new OptimizeCSSAssetsPlugin()],
  devtool: 'source-map',
});
