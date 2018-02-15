/* eslint-disable no-process-exit, global-require */

const beeper = require('beeper');
const browserSync = require('browser-sync').create();
const chalk = require('chalk');
const del = require('del');
const download = require('gulp-download');
const eslint = require('gulp-eslint');
const fs = require('fs-extra');
const gulp = require('gulp');
const KarmaServer = require('karma').Server;
const log = require('fancy-log');
const mocha = require('gulp-mocha');
const path = require('path');
const PluginError = require('plugin-error');
const prettier = require('gulp-prettier-plugin');
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
    `You are not running node ${expectedNodeVersion}. Make sure that you've ` +
      'run bin/unpack-node and that your $PATH includes ' +
      `${path.resolve(__dirname, 'bin')}\n`,
  );
  process.exit(1);
}

const paths = {
  SRC_TEMPLATES_DIR: 'templates/',
  SRC_JS_DIR: 'static/js/',
  JS_TESTS_DIR: 'test/js/',
  SASS_DIR: 'static/sass/',
  SASS_TESTS_DIR: 'test/sass/',
  ICONS_DIR: 'templates/icons/',
  DIST_DIR: 'dev-output/',
  PROD_DIST_DIR: 'output/',
  IGNORE: ['!**/.#*', '!**/flycheck_*'],
  init() {
    this.ALL_JS = [
      `${this.SRC_JS_DIR}**/*.js`,
      `${this.JS_TESTS_DIR}**/*.js`,
      `${this.SASS_TESTS_DIR}**/*.js`,
      '*.js',
      '.*.js',
    ].concat(this.IGNORE);
    this.SASS = [
      `${this.SASS_DIR}**/*.scss`,
      `${this.SASS_TESTS_DIR}**/*.scss`,
    ].concat(this.IGNORE);
    return this;
  },
}.init();

// Try to ensure that all processes are killed on exit
const spawned = [];
process.on('exit', () => {
  spawned.forEach(pcs => {
    pcs.kill();
  });
});

const onError = function(err) {
  log.error(chalk.red(err.message));
  beeper();
  this.emit('end');
};

// Execute a command, logging output live while process runs
const spawnTask = function(command, args, cb) {
  spawned.push(
    spawn(command, args, { stdio: 'inherit' })
      .on('error', err => {
        beeper();
        return cb(err);
      })
      .on('exit', cb),
  );
};

const eslintTask = (src, failOnError, shouldLog) => {
  if (shouldLog) {
    const cmd = `eslint ${src}`;
    log('Running', `'${chalk.cyan(cmd)}'...`);
  }
  const stream = gulp
    .src(src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
  if (!failOnError) {
    stream.on('error', onError);
  }
  return stream;
};

const prettierTask = (src, shouldLog) => {
  if (shouldLog) {
    const cmd = `prettier ${src}`;
    log('Running', `'${chalk.cyan(cmd)}'...`);
  }
  return gulp
    .src(src, { base: './' })
    .pipe(prettier({ singleQuote: true, trailingComma: 'all' }))
    .pipe(gulp.dest('./'))
    .on('error', onError);
};

const sasslintTask = (src, failOnError, shouldLog) => {
  if (shouldLog) {
    const cmd = `sasslint ${src}`;
    log('Running', `'${chalk.cyan(cmd)}'...`);
  }
  const stream = gulp
    .src(src)
    .pipe(sasslint())
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError());
  if (!failOnError) {
    stream.on('error', onError);
  }
  return stream;
};

gulp.task('prettier', () => prettierTask(paths.ALL_JS));

gulp.task(
  'eslint',
  gulp.series('prettier', () => eslintTask(paths.ALL_JS, true)),
);

gulp.task('eslint-nofail', () => eslintTask(paths.ALL_JS));

gulp.task('sasslint', () => sasslintTask(paths.SASS, true));

gulp.task('sasslint-nofail', () => sasslintTask(paths.SASS));

gulp.task('sasstest', () =>
  gulp
    .src([`${paths.SASS_TESTS_DIR}test_sass.js`], { read: false })
    .pipe(mocha({ reporter: 'dot' })),
);

gulp.task('dev-clean', cb => {
  fs.emptyDir(paths.DIST_DIR, cb);
});

gulp.task('dev-clean-html', cb => {
  del([`${paths.DIST_DIR}**/*.html`, `!${paths.DIST_DIR}`]).then(() => {
    cb();
  });
});

gulp.task('prod-clean', cb => {
  del(`${paths.PROD_DIST_DIR}*`).then(() => {
    cb();
  });
});

gulp.task('dev-styleguide-clean', cb => {
  fs.emptyDir(`${paths.DIST_DIR}styleguide`, cb);
});

gulp.task('update-subproject-docs', cb => {
  spawnTask('bin/update-subproject-docs', [], cb);
});

// @@@ Sassdoc does not properly update the st_mtime (modified time) on
// re-generated files, so we empty the output styleguide/ dir before copying
// changed files.
// See https://github.com/oddbird/oddsite/issues/55
gulp.task(
  'dev-build',
  gulp.series('dev-styleguide-clean', cb => {
    spawnTask('python', ['run.py', 'dev'], cb);
  }),
);

gulp.task(
  'dev-rebuild',
  gulp.series('dev-clean-html', cb => {
    spawnTask('python', ['run.py', 'dev'], cb);
  }),
);

gulp.task('sprites-clean', cb => {
  fs.remove(`${paths.SRC_TEMPLATES_DIR}_icons.svg`, cb);
});

gulp.task(
  'sprites',
  gulp.series('sprites-clean', () =>
    gulp
      .src(`${paths.ICONS_DIR}**/*.svg`)
      .pipe(svgmin())
      .pipe(
        svg({
          id: 'icon-%f',
          templates: [
            path.join(
              __dirname,
              paths.SRC_TEMPLATES_DIR,
              '_icon_template.lodash',
            ),
          ],
        }),
      )
      .pipe(rename('_icons.svg'))
      .pipe(gulp.dest(paths.SRC_TEMPLATES_DIR)),
  ),
);

gulp.task('update-spammers', () => {
  const url =
    'https://raw.githubusercontent.com/piwik/' +
    'referrer-spam-blacklist/master/spammers.txt';
  return download(url).pipe(gulp.dest(paths.SRC_JS_DIR));
});

const webpackOnBuild = done => (err, stats) => {
  if (err) {
    log.error(chalk.red(err.stack || err));
    if (err.details) {
      log.error(chalk.red(err.details));
    }
  }

  if (err || stats.hasErrors() || stats.hasWarnings()) {
    beeper();
  }

  log(stats.toString({ colors: true, chunks: false }));

  if (done) {
    done(err);
  }
};

gulp.task(
  'webpack',
  gulp.series(gulp.parallel('sprites', 'dev-clean'), cb => {
    const webpackConfig = require('./webpack.config.js');
    webpack(webpackConfig).run(webpackOnBuild(cb));
  }),
);

gulp.task(
  'webpack-prod',
  gulp.series(gulp.parallel('sprites', 'prod-clean', 'update-spammers'), cb => {
    const webpackProdConfig = require('./webpack.prod.config.js');
    webpack(webpackProdConfig).run(webpackOnBuild(cb));
  }),
);

gulp.task(
  'webpack-watch',
  gulp.series(gulp.parallel('sprites', 'dev-clean-html'), cb => {
    const webpackConfig = require('./webpack.config.js');
    webpack(webpackConfig).watch(300, webpackOnBuild(cb));
  }),
);

const karmaOnBuild = done => exitCode => {
  if (exitCode) {
    beeper();
    done(
      new PluginError('karma', {
        name: 'KarmaError',
        message: `Failed with exit code: ${exitCode}`,
      }),
    );
  } else {
    done();
  }
  process.exit(exitCode);
};

gulp.task('jstest', cb => {
  new KarmaServer(
    { configFile: path.join(__dirname, 'karma.conf.js') },
    karmaOnBuild(cb),
  ).start();
});

// Use karma watcher instead of gulp watcher for tests
gulp.task('jstest-watch', cb => {
  new KarmaServer({
    configFile: path.join(__dirname, 'karma.conf.js'),
    autoWatch: true,
    singleRun: false,
    coverageIstanbulReporter: {
      reports: ['html', 'text-summary'],
    },
  }).start();
  cb();
});

gulp.task(
  'watch',
  gulp.series(
    'webpack-watch',
    cb => {
      // lint scss on changes
      gulp.watch(paths.SASS).on('all', (event, filepath) => {
        if (event === 'add' || event === 'change') {
          sasslintTask(filepath, false, true);
        }
      });

      // lint all scss when rules change
      gulp.watch('**/.sass-lint.yml', gulp.parallel('sasslint-nofail'));

      // run sass tests on changes
      gulp.watch(paths.SASS, gulp.parallel('sasstest'));

      // run webpack to compile svg icons and styleguide assets
      gulp.watch(
        [
          `${paths.ICONS_DIR}**/*.svg`,
          `${paths.SRC_TEMPLATES_DIR}_icon_template.lodash`,
          './STYLEGUIDE.md',
        ],
        gulp.parallel('webpack'),
      );

      // compile rstblog assets
      gulp.watch(
        [
          `${paths.SRC_TEMPLATES_DIR}**/*.j2`,
          `${paths.SRC_TEMPLATES_DIR}**/*.html`,
          'content/**/*.rst',
          'content/**/*.yml',
          'content/static/images/**/*',
        ],
        gulp.parallel('dev-rebuild'),
      );

      cb();
    },
    'jstest-watch',
  ),
);

const getServeOpts = dir => ({
  server: { baseDir: dir },
  open: false,
  logLevel: 'info',
  logPrefix: 'oddsite',
  notify: false,
  files: [`${dir}**/*`],
  reloadDebounce: 1000,
});

const getBsCb = cb => (err, bs) => {
  bs.addMiddleware('*', (req, res) => {
    res.writeHead(302, { location: '/404.html' });
    res.end();
  });
  cb(err);
};

gulp.task('runserver', cb => {
  browserSync.init(getServeOpts(paths.DIST_DIR), cb);
});

gulp.task('prod-serve', cb => {
  browserSync.init(getServeOpts(paths.PROD_DIST_DIR), getBsCb(cb));
});

gulp.task('test', gulp.series('sasstest', 'jstest'));
gulp.task('serve', gulp.parallel('watch', 'runserver'));
gulp.task('quick-serve', gulp.parallel('runserver', 'webpack'));
gulp.task(
  'dev',
  gulp.series(gulp.parallel('eslint', 'sasslint', 'sasstest'), 'serve'),
);
gulp.task('prod', gulp.series('update-subproject-docs', 'webpack-prod'));
gulp.task(
  'default',
  gulp.series(gulp.parallel('sasslint', 'eslint', 'sasstest'), 'jstest'),
);
