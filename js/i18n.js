/* Tiny i18n engine. Dictionaries are in js/i18n/<lang>.js (window.I18N.<lang>).
   Static text:  <span data-i18n="hero.name"></span>
   Attributes:   <button data-i18n-attr="aria-label:ui.theme;title:ui.theme"></button> */
(function () {
  "use strict";

  var SUPPORTED = ["ko", "en", "zh", "ja"];
  var DEFAULT = "ko";
  var current = DEFAULT;
  var dict = window.I18N || {};

  function lookup(lang, key) {
    var node = dict[lang];
    var parts = key.split(".");
    for (var i = 0; i < parts.length; i++) {
      if (node == null || typeof node !== "object" || !(parts[i] in node)) return undefined;
      node = node[parts[i]];
    }
    return node;
  }

  function t(key) {
    var v = lookup(current, key);
    if (v === undefined) v = lookup(DEFAULT, key);
    return v === undefined ? key : v;
  }

  function has(key) {
    return lookup(current, key) !== undefined || lookup(DEFAULT, key) !== undefined;
  }

  function each(selector, fn) {
    Array.prototype.forEach.call(document.querySelectorAll(selector), fn);
  }

  function apply() {
    document.documentElement.lang = current;

    each("[data-i18n]", function (node) {
      node.textContent = t(node.getAttribute("data-i18n"));
    });

    each("[data-i18n-attr]", function (node) {
      node.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var p = pair.split(":");
        if (p.length === 2) node.setAttribute(p[0].trim(), t(p[1].trim()));
      });
    });

    document.title = t("meta.title");
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t("meta.desc"));

    document.dispatchEvent(new CustomEvent("i18n:change", { detail: { lang: current } }));
  }

  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = DEFAULT;
    current = lang;
    try { localStorage.setItem("lang", lang); } catch (e) {}
    apply();
  }

  function init() {
    var saved = null;
    try { saved = localStorage.getItem("lang"); } catch (e) {}
    current = SUPPORTED.indexOf(saved) > -1 ? saved : DEFAULT;
    apply();
  }

  window.i18n = {
    t: t,
    has: has,
    setLang: setLang,
    init: init,
    supported: SUPPORTED,
    get lang() { return current; }
  };
})();
