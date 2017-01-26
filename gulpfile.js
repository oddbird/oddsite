const browserSync = require('browser-sync').create();
const chalk = require('chalk');
const del = require('del');
const eslint = require('gulp-eslint');
const fs = require('fs-extra');
const gulp = require('gulp');
const gutil = require('gulp-util');
const mocha = require('gulp-spawn-mocha');
const path = require('path');
const rename = require('gulp-rename');
const sasslint = require('gulp-sass-lint');
const svg = require('gulp-svg-symbols');
const svgmin = require('gulp-svgmin');
const webpack = require('webpack');
const { spawn } = require('child_process');

// sanity check Node version
const packageOptions = require('./package.json');
const expectedNodeVersion = `v${packageOptions.engines.node}`;
if (process.version !== expectedNodeVersion) {
  process.stdout.write(
    `You are not running node ${expectedNodeVersion}. ` +
    'Make sure that you\'ve run bin/unpack-node and that ' +
    `your $PATH includes ${path.resolve(__dirname, 'bin')}\n`);
  process.exit(1);  // eslint-disable-line no-process-exit
}

const paths = {
  SRC_TEMPLATES_DIR: 'templates/',
  SRC_JS_DIR: 'static/js/',
  SASS_DIR: 'static/sass/',
  SASS_TESTS_DIR: 'test/sass/',
  ICONS_DIR: 'templates/icons/',
  DIST_DIR: 'dev-output/',
  PROD_DIST_DIR: 'output/',
  IGNORE: [
    '!**/.#*',
    '!**/flycheck_*'
  ],
  init () {
    this.ALL_JS = [
      `${this.SRC_JS_DIR}**/*.js`,
      `${this.SASS_TESTS_DIR}**/*.js`,
      '*.js'
    ].concat(this.IGNORE);
    this.SASS = [
      `${this.SASS_DIR}**/*.scss`,
      `${this.SASS_TESTS_DIR}**/*.scss`
    ].concat(this.IGNORE);
    return this;
  }
}.init();

// Try to ensure that all processes are killed on exit
const spawned = [];
process.on('exit', () => {
  spawned.forEach((pcs) => {
    pcs.kill();
  });
});

const onError = function (err) {
  gutil.log(chalk.red(err.message));
  gutil.beep();
  this.emit('end');
};

// Execute a command, logging output live while process runs
const spawnTask = function (command, args, cb) {
  spawned.push(
    spawn(command, args, { stdio: 'inherit' })
      .on('error', (err) => {
        gutil.beep();
        return cb(err);
      })
      .on('exit', cb)
  );
};

const eslintTask = (src, failOnError, log) => {
  if (log) {
    const cmd = `eslint ${src}`;
    gutil.log('Running', `'${chalk.cyan(cmd)}'...`);
  }
  const stream = gulp.src(src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
  if (!failOnError) {
    stream.on('error', onError);
  }
  return stream;
};

const sasslintTask = (src, failOnError, log) => {
  if (log) {
    const cmd = `sasslint ${src}`;
    gutil.log('Running', `'${chalk.cyan(cmd)}'...`);
  }
  const stream = gulp.src(src)
    .pipe(sasslint())
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError());
  if (!failOnError) {
    stream.on('error', onError);
  }
  return stream;
};

gulp.task('default', [ 'eslint', 'sasslint', 'test' ]);
gulp.task('dev', [ 'eslint', 'sasslint', 'test', 'serve' ]);
gulp.task('prod', ['webpack-prod']);

gulp.task('serve', [ 'watch', 'runserver' ]);

gulp.task('test', ['sasstest']);

gulp.task('watch', ['webpack-watch'], () => {
  // lint js on changes
  gulp.watch(paths.ALL_JS, (ev) => {
    if (ev.type === 'added' || ev.type === 'changed') {
      eslintTask(ev.path, false, true);
    }
  });

  // lint all js when rules change
  gulp.watch('**/.eslintrc.yml', ['eslint-nofail']);

  // lint scss on changes
  gulp.watch(paths.SASS, (ev) => {
    if (ev.type === 'added' || ev.type === 'changed') {
      sasslintTask(ev.path, false, true);
    }
  });

  // lint all scss when rules change
  gulp.watch('**/.sass-lint.yml', ['sasslint-nofail']);

  // run sass tests on changes
  gulp.watch(paths.SASS, ['sasstest']);

  // run webpack to compile styleguide assets
  gulp.watch([
    `${paths.ICONS_DIR}**/*.svg`,
    `${paths.SRC_TEMPLATES_DIR}_icon_template.lodash`,
    './STYLEGUIDE.md'
  ], ['webpack']);

  // compile rstblog assets
  gulp.watch([
    `${paths.SRC_TEMPLATES_DIR}**/*`,
    'content/**/*',
    '!content/styleguide/**/*',
    '!content/static/assets/**/*',
    '!content/static/assets.json',
    `!${paths.SRC_TEMPLATES_DIR}_icons.svg`,
    `!${paths.ICONS_DIR}**/*.svg`,
    `!${paths.SRC_TEMPLATES_DIR}_icon_template.lodash`
  ], ['dev-build']);
});

gulp.task('eslint', () => eslintTask(paths.ALL_JS, true));

gulp.task('eslint-nofail', () => eslintTask(paths.ALL_JS));

gulp.task('sasslint', () => sasslintTask(paths.SASS, true));

gulp.task('sasslint-nofail', () => sasslintTask(paths.SASS));

gulp.task('sasstest', () =>
  gulp.src([`${paths.SASS_TESTS_DIR}test_sass.js`], { read: false })
    .pipe(mocha({ reporter: 'dot' }))
);

gulp.task('sprites-clean', (cb) => {
  fs.remove(`${paths.SRC_TEMPLATES_DIR}_icons.svg`, cb);
});

gulp.task('sprites', ['sprites-clean'], () =>
  gulp.src(`${paths.ICONS_DIR}**/*.svg`)
    .pipe(svgmin())
    .pipe(svg({
      id: 'icon-%f',
      title: '%f icon',
      templates: [
        path.join(__dirname, paths.SRC_TEMPLATES_DIR, '_icon_template.lodash')
      ]
    }))
    .pipe(rename('_icons.svg'))
    .pipe(gulp.dest(paths.SRC_TEMPLATES_DIR))
);

gulp.task('runserver', ['browser-sync']);

const getServeOpts = (dir) => ({
  server: { baseDir: dir },
  open: false,
  logLevel: 'info',
  logPrefix: 'oddsite',
  notify: false,
  files: [`${dir}**/*`],
  reloadDebounce: 500
});

gulp.task('browser-sync', (cb) => {
  browserSync.init(getServeOpts(paths.DIST_DIR), cb);
});

gulp.task('prod-serve', (cb) => {
  browserSync.init(getServeOpts(paths.PROD_DIST_DIR), cb);
});

const webpackOnBuild = (done) => (err, stats) => {
  if (err) {
    gutil.log(chalk.red(err.stack || err));
    if (err.details) {
      gutil.log(chalk.red(err.details));
    }
  }

  if (err || stats.hasErrors() || stats.hasWarnings()) {
    gutil.beep();
  }

  gutil.log(stats.toString({
    colors: true,
    chunks: false
  }));

  if (done) { done(err); }
};

gulp.task('webpack', [ 'sprites', 'dev-clean' ], (cb) => {
  const webpackConfig = require('./webpack.config.js');
  webpack(webpackConfig).run(webpackOnBuild(cb));
});

gulp.task('webpack-prod', [ 'sprites', 'prod-clean' ], (cb) => {
  const webpackProdConfig = require('./webpack.prod.config.js');
  webpack(webpackProdConfig).run(webpackOnBuild(cb));
});

gulp.task('webpack-watch', ['sprites'], () => {
  const webpackConfig = require('./webpack.config.js');
  webpack(webpackConfig).watch(300, webpackOnBuild());
});

gulp.task('dev-clean', (cb) => {
  fs.emptyDir(paths.DIST_DIR, cb);
});

gulp.task('prod-clean', (cb) => {
  del(`${paths.PROD_DIST_DIR}*`).then(() => {
    cb();
  });
});

gulp.task('dev-styleguide-clean', (cb) => {
  fs.emptyDir(`${paths.DIST_DIR}styleguide`, cb);
});

// @@@ Sassdoc does not properly update the st_mtime (modified time) on
// re-generated files, so we empty the output styleguide/ dir before copying
// changed files.
// See https://github.com/oddbird/oddsite/issues/55
gulp.task('dev-build', ['dev-styleguide-clean'], (cb) => {
  spawnTask('python', [ 'run.py', 'dev' ], cb);
});
