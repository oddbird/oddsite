/* eslint-disable no-process-env */

const env = process.env.BABEL_ENV;
const plugins = [];
if (env === 'test') {
  plugins.push(['istanbul', { include: ['static/js/app/**/*.js'] }]);
}

module.exports = {
  plugins,
  presets: [
    [
      'env',
      {
        modules: false,
        useBuiltIns: 'entry',
        exclude: ['transform-regenerator'],
      },
    ],
  ],
};
