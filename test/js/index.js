// Add ES2015 polyfills
import '@babel/polyfill';

import './utils';

// require all test modules
const appTestsContext = require.context('./app/', true, /test_.*\.js$/);
appTestsContext.keys().forEach(appTestsContext);

// require all source js modules (to ensure full code coverage)
const appSrcContext = require.context(
  './../../static/js/app/',
  true,
  /.*\.js$/,
);
appSrcContext.keys().forEach(appSrcContext);
