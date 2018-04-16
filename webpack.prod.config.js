/* eslint-disable no-process-env */

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'production';
}

module.exports = require('./webpack.common.config.js');
