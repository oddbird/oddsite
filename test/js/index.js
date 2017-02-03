// Add ES2015 polyfills
import 'core-js/shim';

import './utils';

// require all test modules
const appTestsContext = require.context('./app/', true, /test_.*\.js$/);
appTestsContext.keys().forEach(appTestsContext);

const pageTestsContext = require.context('./pages/', true, /test_.*\.js$/);
pageTestsContext.keys().forEach(pageTestsContext);

// require all source js modules (to ensure full code coverage)
const appSrcContext = require.context(
  './../../static/js/app/', true, /.*\.js$/);
appSrcContext.keys().forEach(appSrcContext);

const pageSrcContext = require.context(
  './../../static/js/pages/', true, /.*\.js$/);
pageSrcContext.keys().forEach(pageSrcContext);
