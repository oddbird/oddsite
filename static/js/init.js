import {
  initializeToggles,
  initializeDynamicNav,
  initializeLogoFadeOnScroll,
} from 'app/base';

$(() => {
  window.$ = $;
  initializeToggles();
  initializeDynamicNav();
  initializeLogoFadeOnScroll();
});
