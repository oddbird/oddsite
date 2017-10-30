window.Herman=function(t,a){"use strict";const e={SPACE:32,ENTER:13,TAB:9,ESC:27,BACKSPACE:8,SHIFT:16,CTRL:17,ALT:18,CAPS:20,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46,COMMA:44};return t.initializeToggles=function(){const t=a("body");t.on("toggle:close",'[data-toggle="button"]',function(){const t=a(this).attr("aria-controls"),e=a(`[data-target-id="${t}"]`);a(`[data-toggle="button"][aria-controls="${t}"][aria-pressed="true"]`).attr("aria-pressed","false"),e.trigger("target:close")}),t.on("toggle:open",'[data-toggle="button"]',function(){const t=a(this),e=t.attr("aria-controls"),o=a(`[data-target-id="${e}"]`),n=a(`[data-toggle="button"][aria-controls="${e}"]`).not(t);t.data("toggle-synced")?n.filter('[data-toggle-synced="true"]').attr("aria-pressed","true"):n.filter('[aria-pressed="true"]').attr("aria-pressed","false"),t.attr("aria-pressed","true"),o.trigger("target:open")}),t.on("target:close",'[data-toggle="target"]',function(t){const e=a(this);a(t.target).is(e)&&e.attr("aria-expanded","false")});const e=function(t){const e=t.attr("data-target-id"),o=a(`[data-toggle="button"][aria-controls="${e}"][aria-pressed="true"]`);o.length?o.trigger("toggle:close"):t.trigger("target:close")};t.on("target:open",'[data-toggle="target"]',function(t){const e=a(this);a(t.target).is(e)&&e.attr("aria-expanded","true")}),t.on("click",'[data-toggle="button"]',function(t){t.preventDefault();const e=a(this);"true"===e.attr("aria-pressed")?e.trigger("toggle:close"):e.trigger("toggle:open")}),t.on("click",'[data-toggle="close"]',function(t){t.preventDefault();const o=a(`[data-target-id="${a(this).attr("aria-controls")}"]`);e(o)});const o=function(t,a){const o=a.attr("data-target-id"),n=t.closest(`[aria-controls="${o}"]`).length,r=document.contains(t.get(0)),i=!t.closest(a).length,s=a.attr("data-auto-closing-exception"),c=!!s&&t.closest(s).length;!n&&(a.data("auto-closing-on-any-click")||r&&i&&!c)&&e(a)};t.on("click",t=>{a('[data-toggle="target"][aria-expanded="true"][data-auto-closing="true"]').each((e,n)=>{o(a(t.target),a(n))})})},t.initializeTabs=function(){const t=a("body"),o=function(t){const e=t.attr("data-tab-group");return a(`[role="tab"][data-tab-group="${e}"]`)},n=function(t){const e=t.attr("data-tab-group");return a(`[role="tabpanel"][data-tab-group="${e}"]`)},r=function(t){const a=o(t),e=n(t),r=e.filter(`[aria-labelledby="${t.attr("id")}"]`);t.attr({tabindex:0,"aria-selected":!0}),a.not(t).attr("tabindex",-1).removeAttr("aria-selected"),r.removeAttr("aria-hidden").trigger("visible"),e.not(r).attr("aria-hidden",!0),t.trigger("tab:active")};t.on("tabs:close",'[role="tab"]',function(){const t=a(this),e=o(t),r=n(t);e.attr("tabindex",-1).removeAttr("aria-selected"),r.attr("aria-hidden",!0)}),t.on("click",'[role="tab"]',function(t){t.preventDefault(),r(a(this))}),t.on("keydown",'[role="tab"]',function(t){const n=a(this),i=o(n),s=i.index(n);let c=s;switch(t.keyCode){case e.LEFT:c=s>0?s-1:s;break;case e.RIGHT:c=s+1}const g=i.eq(c);s!==c&&g.length&&(r(g),g.focus())})},t.initializeIframes=function(){const t=function(t){t.contentWindow.document.body&&(t.height=a(t.contentWindow.document).outerHeight(!0))},e=function(){a("iframe").each(function(){t(this)})};e(),a("iframe").on("load",function(){t(this)}),a(window).on("resize",e)},t}(window.Herman||{},window.jQuery);