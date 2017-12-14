/* eslint-disable no-process-env */

process.env.BROWSERSLIST_CONFIG = './.browserslistrc';

const AssetsPlugin = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const sassdoc = require('sassdoc');
const spawn = require('child_process').spawn;
const touch = require('touch');
const webpack = require('webpack');

const outputPath = path.join(__dirname, 'content', 'static', 'assets');
const sassdocPath = path.join(__dirname, 'content', 'styleguide');
const assetsJsonPath = path.join(__dirname, 'content', 'static');
let jsOutput = '[name].bundle.js';
let styleOutput = '[name].bundle.css';
let mediaOutput = '[name].[ext]';
let devtool = 'cheap-module-inline-source-map';
let buildScript = 'gulp dev-build';

// Create empty spammers.txt file if none exists
touch.sync('static/js/spammers.txt');

// Override settings if running in production
if (process.env.NODE_ENV === 'production') {
  jsOutput = '[name].bundle.[chunkhash].min.js';
  styleOutput = '[name].bundle.[chunkhash].min.css';
  mediaOutput = '[name].[hash].[ext]';
  devtool = 'source-map';
  buildScript = 'python run.py prod';
}

const scssLoaders = [
  {
    loader: 'css-loader',
    options: {
      sourceMap: true,
      minimize: process.env.NODE_ENV === 'production',
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
  compiler.plugin('after-emit', (compilation, cb) => {
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

const SassdocPlugin = function() {};
const getCSS = function(entry) {
  if (!entry) {
    return undefined;
  }
  for (const thisPath of entry) {
    if (thisPath.substr(-4) === '.css') {
      return thisPath;
    }
  }
  return undefined;
};
SassdocPlugin.prototype.apply = compiler => {
  compiler.plugin('after-emit', (compilation, cb) => {
    const statsJSON = compilation.getStats().toJson();
    const css = getCSS(statsJSON.assetsByChunkName.styleguide);
    const json = getCSS(statsJSON.assetsByChunkName.sass_json);
    const cssPath = css ? path.join(outputPath, css) : undefined;
    const jsonPath = json ? path.join(outputPath, json) : undefined;
    sassdoc('./static/sass/**/*.scss', {
      dest: sassdocPath,
      theme: 'herman',
      descriptionPath: path.join(__dirname, 'STYLEGUIDE.md'),
      herman: {
        extraLinks: [
          {
            name: 'Accoutrement-Init',
            url: 'http://oddbird.net/accoutrement-init/',
          },
          {
            name: 'Accoutrement-Color',
            url: 'http://oddbird.net/accoutrement-color/',
          },
          {
            name: 'Accoutrement-Layout',
            url: 'http://oddbird.net/accoutrement-layout/',
          },
          {
            name: 'Accoutrement-Scale',
            url: 'http://oddbird.net/accoutrement-scale/',
          },
          {
            name: 'Accoutrement-Type',
            url: 'http://oddbird.net/accoutrement-type/',
          },
        ],
        displayColors: ['hex', 'hsl'],
        customCSS: cssPath,
        customHTML: path.join(__dirname, 'templates', '_icons.svg'),
        nunjucks: {
          templatepath: path.join(__dirname, 'templates'),
        },
        sass: {
          jsonfile: jsonPath,
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
    }).then(
      () => {
        /* eslint-disable no-console */
        console.log('Generated Sassdoc documentation.');
        cb();
      },
      err => {
        console.error(err);
        cb();
        /* eslint-enable no-console */
      },
    );
  });
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
    // pull common js and webpack runtime out of all bundles
    new webpack.optimize.CommonsChunkPlugin({
      name: 'spam_referrals_blocker',
      minChunks: Infinity,
    }),
    // pull all CSS out of JS bundles
    new ExtractTextPlugin({
      filename: styleOutput,
      allChunks: true,
    }),
    // save assets.json mapping of names to bundled files
    new AssetsPlugin({
      filename: 'assets.json',
      path: assetsJsonPath,
      prettyPrint: true,
    }),
    new SassdocPlugin(),
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
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: mediaOutput },
          },
          {
            loader: 'img-loader',
            options: {
              mozjpeg: { progressive: true },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /styleguide\.scss$/,
        use: ExtractTextPlugin.extract({
          use: scssLoaders,
        }),
      },
      {
        test: /styleguide\.scss$/,
        use: ExtractTextPlugin.extract({
          use: scssLoaders,
          // Disable publicPath prefix for `url()` in styleguide CSS
          publicPath: '',
        }),
      },
    ],
  },
  devtool,
};
