import { initializeToggles, initializeDynamicNav } from 'app/base';

$(() => {
  window.$ = $;
  initializeToggles();
  initializeDynamicNav();
});
