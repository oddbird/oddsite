// Add ES2015 polyfills
import 'babel-polyfill';

import { initializeToggles } from 'app/base';

$(() => {
  window.$ = $;
  initializeToggles();
});
