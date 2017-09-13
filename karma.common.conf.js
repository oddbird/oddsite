/* eslint-disable no-process-env */

process.env.BABEL_ENV = 'test';

const extend = require('extend');
const webpack = require('webpack');
// Use extend instead of Object.assign to do a deep merge,
// because we're modifying nested properties on the new object.
const webpackConf = extend(true, {}, require('./webpack.common.config.js'));

Reflect.deleteProperty(webpackConf.entry, 'app_styles');
Reflect.deleteProperty(webpackConf.entry, 'styleguide');
Reflect.deleteProperty(webpackConf.entry, 'susy_off_canvas_styles');
Reflect.deleteProperty(webpackConf.entry, 'sass_json');
webpackConf.plugins = [
  new webpack.WatchIgnorePlugin([
    /flycheck_/,
    /\.#/,
    /#$/,
    // don't watch the context directories we add in test/js/index.js; see
    // https://github.com/webpack/webpack/issues/2156
    /test\/js\/app$/,
    /static\/js\/app$/,
  ]),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    'root.jQuery': 'jquery',
  }),
  new webpack.LoaderOptionsPlugin({ debug: true }),
];

module.exports = {
  // base path that will be used to resolve all patterns (eg. files, exclude)
  basePath: '',

  // frameworks to use
  // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
  frameworks: ['mocha', 'sinon-chai'],

  client: { mocha: { ui: 'bdd' } },

  // list of files / patterns to load in the browser
  files: ['test/js/index.js'],

  // list of files to exclude
  exclude: [],

  // preprocess matching files before serving them to the browser
  // https://npmjs.org/browse/keyword/karma-preprocessor
  preprocessors: { 'test/js/index.js': ['webpack', 'sourcemap'] },

  webpack: webpackConf,

  // test results reporter to use
  // possible values: 'dots', 'progress'
  // available reporters: https://npmjs.org/browse/keyword/karma-reporter
  reporters: ['dots', 'coverage'],

  coverageReporter: {
    reporters: [
      { type: 'html', dir: 'jscov/' },
      { type: 'json', dir: 'jscov/' },
      { type: 'text' },
    ],
    instrumenterOptions: { istanbul: { noCompact: true } },
  },

  // results will be saved as $outputDir/$browserName.xml
  junitReporter: { outputDir: 'jscov/' },

  webpackMiddleware: { noInfo: true },

  // web server port
  port: 9876,

  // enable / disable colors in the output (reporters and logs)
  colors: true,

  // level of logging
  // possible values: config.LOG_DISABLE, config.LOG_ERROR, config.LOG_WARN,
  // config.LOG_INFO, config.LOG_DEBUG
  logLevel: 'WARN',

  // enable/disable watching file and executing tests whenever a file changes
  autoWatch: false,

  // start these browsers
  // available launchers: https://npmjs.org/browse/keyword/karma-launcher
  browsers: ['ChromeHeadless'],

  // Continuous Integration mode
  // if true, Karma captures browsers, runs the tests and exits
  singleRun: true,
};
