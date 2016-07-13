/* eslint-disable no-sync */

const AssetsPlugin = require('assets-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const sassdoc = require('sassdoc');
const webpack = require('webpack');
const WebpackShellPlugin = require('webpack-shell-plugin');

const outputPath = path.join(__dirname, 'content', 'static', 'assets');
const sassdocPath = path.join(__dirname, 'content', 'styleguide');
const assetsJsonPath = path.join(__dirname, 'content', 'static');
let jsOutput = '[name].bundle.js';
let styleOutput = '[name].bundle.css';
let mediaOutput = '[name].[ext]';
let devtool = 'cheap-module-inline-source-map';
let buildScript = 'python run.py dev';

// Override settings if running in production
if (process.env.prod === 'true') {
  jsOutput = '[name].bundle.[chunkhash].min.js';
  styleOutput = '[name].bundle.[chunkhash].min.css';
  mediaOutput = '[name].[hash].[ext]';
  devtool = 'source-map';
  buildScript = 'python run.py prod';
}

const SassdocPlugin = function () {
  // do nothing
};
const getCSS = function (entry) {
  if (!entry) { return undefined; }
  for (const thisPath of entry) {
    if (thisPath.substr(-4) === '.css') {
      return thisPath;
    }
  }
  return undefined;
};
SassdocPlugin.prototype.apply = (compiler) => {
  compiler.plugin('after-emit', (compilation, cb) => {
    const statsJSON = compilation.getStats().toJson();
    const css = getCSS(statsJSON.assetsByChunkName.styleguide);
    const json = getCSS(statsJSON.assetsByChunkName.sass_json);
    const cssPath = css ? path.join(outputPath, css) : undefined;
    const jsonPath = json ? path.join(outputPath, json) : undefined;
    sassdoc('./static/sass/**/*.scss', {
      dest: sassdocPath,
      theme: 'herman',
      customCSS: cssPath,
      descriptionPath: path.join(__dirname, 'STYLEGUIDE.md'),
      homepage: '/',
      sassjsonfile: jsonPath,
      shortcutIcon: path.join(
        __dirname, 'content', 'static', 'images', 'favicons', 'favicon.ico'),
      templatepath: path.join(__dirname, 'templates'),
      minifiedIcons: '_icons.svg',
      display: { access: ['public'] },
      groups: { undefined: 'general' }
    }).then(() => {
      /* eslint-disable no-console */
      console.log('Generated Sassdoc documentation.');
      cb();
    }, (err) => {
      console.error(err);
      cb();
      /* eslint-enable no-console */
    });
  });
};


module.exports = {
  // context for entry points
  context: path.join(__dirname, 'static', 'js'),
  // define all the entry point bundles
  entry: {
    app: './init.js',
    susy_off_canvas: './pages/susy-off-canvas.js',
    app_styles: ['screen.scss'],
    susy_off_canvas_styles: ['pages/susy-off-canvas.scss'],
    sass_json: ['json.scss']
  },
  output: {
    path: outputPath,
    publicPath: '/static/assets/',
    filename: jsOutput
  },
  resolve: {
    // where to look for "required" modules
    modulesDirectories: [
      'static/js',
      'templates',
      'sass',
      'static',
      'node_modules'
    ],
    alias: { jquery: 'jquery/dist/jquery.slim.js' }
  },
  plugins: [
    // ignore flycheck and Emacs special files when watching
    new webpack.WatchIgnorePlugin([
      /flycheck_/,
      /\.#/,
      /#$/
    ]),
    // make jquery accessible in all modules that use it
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery',
      'root.jQuery': 'jquery'
    }),
    // pull common js and webpack runtime out of all bundles
    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      minChunks: Infinity
    }),
    // optimize modules used more often
    new webpack.optimize.OccurenceOrderPlugin(true),
    // pull all CSS out of JS bundles
    new ExtractTextPlugin(styleOutput, { allChunks: true }),
    // save assets.json mapping of names to bundled files
    new AssetsPlugin({
      filename: 'assets.json',
      path: assetsJsonPath,
      prettyPrint: true
    }),
    new SassdocPlugin(),
    new WebpackShellPlugin({
      onBuildEnd: [buildScript],
      dev: false
    }),
    new CleanWebpackPlugin([outputPath], {
      root: __dirname,
      verbose: true
    })
  ],
  module: {
    loaders: [
      {
        test: /static\/js\/.*\.js$/,
        exclude: /(node_modules|vendor)/,
        loader: 'babel',
        query: { cacheDirectory: process.env.prod !== 'true' }
      },
      {
        test: /\.woff$|\.woff2$|\.ttf$/,
        loader: 'file',
        query: { name: mediaOutput }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'css?sourceMap!postcss!sass?sourceMap')
      }
    ]
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    })
  ],
  devtool,
  debug: process.env.prod !== 'true'
};
