/* eslint-disable no-process-env */

process.env.BROWSERSLIST_CONFIG = './.browserslistrc';

const AssetsPlugin = require('webpack-assets-manifest');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SassDocPlugin = require('./sassdoc-webpack-plugin');
const mozjpeg = require('imagemin-mozjpeg');
const optipng = require('imagemin-optipng');
const path = require('path');
const spawn = require('child_process').spawn;
const touch = require('touch');
const webpack = require('webpack');

const outputPath = path.join(__dirname, 'content', 'static', 'assets');
const sassdocPath = path.join(__dirname, 'content', 'styleguide');
let jsOutput = '[name].bundle.js';
let styleOutput = '[name].bundle.css';
let mediaOutput = '[name].[ext]';
let buildScript = 'gulp dev-build';

// Create empty spammers.txt file if none exists
touch.sync('static/js/spammers.txt');

// Override settings if running in production
if (process.env.NODE_ENV === 'production') {
  jsOutput = '[name].bundle.[chunkhash].min.js';
  styleOutput = '[name].bundle.[chunkhash].min.css';
  mediaOutput = '[name].[hash].[ext]';
  buildScript = 'python run.py prod';
}

const scssLoaders = [
  {
    loader: 'css-loader',
    options: {
      sourceMap: true,
      minimize: process.env.NODE_ENV === 'production',
      importLoaders: 2,
    },
  },
  {
    loader: 'postcss-loader',
    options: { sourceMap: true },
  },
  {
    loader: 'sass-loader',
    options: { sourceMap: true },
  },
];

const WebpackShellPlugin = function() {};
WebpackShellPlugin.prototype.apply = compiler => {
  let building = false;
  compiler.hooks.afterEmit.tapAsync('WebpackShellPlugin', (compilation, cb) => {
    if (!building) {
      // eslint-disable-next-line no-console
      console.log('Executing post-build scripts');
      building = true;
      const [command, ...args] = buildScript.split(' ');
      spawn(command, args, { stdio: 'inherit' }).on('close', err => {
        building = false;
        if (err) {
          throw err;
        }
      });
    }
    cb();
  });
};

const sassDocOpts = {
  src: './static/sass/**/*.scss',
  dest: sassdocPath,
  theme: 'herman',
  descriptionPath: path.join(__dirname, 'STYLEGUIDE.md'),
  herman: {
    extraLinks: [
      {
        name: 'Accoutrement',
        url: 'http://oddbird.net/accoutrement/',
      },
    ],
    displayColors: ['hex', 'hsl'],
    customHTML: path.join(__dirname, 'templates', '_icons.svg'),
    nunjucks: {
      templatepath: path.join(__dirname, 'templates'),
    },
    sass: {
      includepaths: [path.join(__dirname, 'static/sass')],
      includes: ['config/manifest'],
    },
  },
  shortcutIcon: path.join(
    __dirname,
    'content',
    'static',
    'images',
    'favicons',
    'favicon.ico',
  ),
  display: { access: ['public'] },
  groups: {
    'config-color': 'Color Palettes',
    'config-fonts': 'Webfonts',
    'config-layout': 'Layout',
    'config-scale': 'Sizes & Spacing',
    icons: 'Icons',
    buttons: 'Buttons',
    sections: 'Page Sections',
    typography: 'Typography',
  },
};

module.exports = {
  // context for entry points
  context: path.join(__dirname, 'static', 'js'),
  // define all the entry point bundles
  entry: {
    app: './init.js',
    spam_referrals_blocker: './spamReferralsBlocker.js',
    app_styles: ['screen.scss'],
    styleguide: ['styleguide.scss'],
    sass_json: ['json.scss'],
  },
  output: {
    path: outputPath,
    publicPath: '/static/assets/',
    filename: jsOutput,
  },
  resolve: {
    // where to look for "required" modules
    modules: ['static/js', 'templates', 'sass', 'static', 'node_modules'],
    alias: { jquery: 'jquery/dist/jquery.slim.js' },
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      name: false,
    },
  },
  plugins: [
    // ignore flycheck and Emacs special files when watching
    new webpack.WatchIgnorePlugin([/flycheck_/, /\.#/, /#$/]),
    // make jquery accessible in all modules that use it
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'root.jQuery': 'jquery',
    }),
    new webpack.LoaderOptionsPlugin({
      debug: process.env.NODE_ENV !== 'production',
    }),
    // pull all CSS out of JS bundles
    new MiniCssExtractPlugin({
      filename: styleOutput,
    }),
    // save assets.json mapping of names to bundled files
    new AssetsPlugin({
      output: '../assets.json',
      publicPath: true,
    }),
    new SassDocPlugin(sassDocOpts, {
      assetPaths: [
        { entry: 'styleguide', optPath: 'herman.customCSS' },
        { entry: 'sass_json', optPath: 'herman.sass.jsonfile' },
      ],
      outputPath,
    }),
    new WebpackShellPlugin(),
    new CleanWebpackPlugin([outputPath], {
      root: __dirname,
      verbose: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /(static\/js\/.*\.js$|test\/.*\.js$)/,
        exclude: /(node_modules|vendor)/,
        use: [
          {
            loader: 'babel-loader',
            options: { cacheDirectory: process.env.NODE_ENV !== 'production' },
          },
        ],
      },
      {
        test: /\.woff$|\.woff2$|\.ttf$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: mediaOutput },
          },
        ],
      },
      {
        test: /\.jpe?g$|\.png$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: mediaOutput },
          },
          {
            loader: 'img-loader',
            options: {
              plugins: [mozjpeg({ progressive: true }), optipng({})],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /styleguide\.scss$/,
        use: [MiniCssExtractPlugin.loader, ...scssLoaders],
      },
      {
        test: /styleguide\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // Disable publicPath prefix for `url()` in styleguide CSS
              publicPath: '',
            },
          },
          ...scssLoaders,
        ],
      },
    ],
  },
};
