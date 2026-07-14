/**
 * Dark / light theme toggle
 * Preference: localStorage "theme" = "light" | "dark"
 * If unset, follow prefers-color-scheme
 */
(function () {
  var STORAGE_KEY = "theme";
  var root = document.documentElement;

  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function getStored() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStored(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      /* private mode / blocked storage */
    }
  }

  function resolveTheme() {
    var stored = getStored();
    if (stored === "light" || stored === "dark") return stored;
    return systemPrefersDark() ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;

    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", theme === "dark" ? "#0f1419" : "#ffffff");
    }

    updateToggle(theme);
  }

  function updateToggle(theme) {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;

    var isDark = theme === "dark";
    btn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    btn.setAttribute("title", isDark ? "Light mode" : "Dark mode");
    btn.setAttribute("aria-pressed", isDark ? "true" : "false");

    var iconSun = btn.querySelector(".theme-toggle__sun");
    var iconMoon = btn.querySelector(".theme-toggle__moon");
    if (iconSun && iconMoon) {
      // In dark mode show sun (switch to light); in light mode show moon
      iconSun.hidden = !isDark;
      iconMoon.hidden = isDark;
    }
  }

  // Apply ASAP if early head script missed (should already be set)
  applyTheme(resolveTheme());

  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  onReady(function () {
    applyTheme(resolveTheme());

    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        setStored(next);
        applyTheme(next);
      });
    }

    // Follow OS changes only when user has not forced a preference
    if (window.matchMedia) {
      var mq = window.matchMedia("(prefers-color-scheme: dark)");
      var handler = function () {
        if (!getStored()) applyTheme(resolveTheme());
      };
      if (mq.addEventListener) {
        mq.addEventListener("change", handler);
      } else if (mq.addListener) {
        mq.addListener(handler);
      }
    }
  });
})();
