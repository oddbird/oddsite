// Add ES2015 polyfills
import 'core-js/shim';

import { initializeToggles } from 'base';

$(() => {
  window.$ = $;
  initializeToggles();
});
