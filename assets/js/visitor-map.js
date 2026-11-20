/**
 * Visitor map (mapmyvisitors). Loads the widget once, in the colors of the
 * theme active at page load. Theme toggles afterwards are handled in CSS,
 * because reloading the widget would report another visit.
 */
(function () {
  var box = document.querySelector("[data-visitor-map]");
  if (!box) return;

  var theme = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  var script = document.createElement("script");
  script.id = "mapmyvisitors";
  script.src = "//mapmyvisitors.com/map.js?d=" + encodeURIComponent(box.getAttribute("data-visitor-map")) +
    "&w=a&" + box.getAttribute("data-" + theme);

  box.setAttribute("data-rendered", theme);
  box.appendChild(script);
})();
