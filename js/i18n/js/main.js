(function () {
  "use strict";

  var D = window.PORTFOLIO_DATA;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var t = function (k) { return window.i18n.t(k); };

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function tagList(items) {
    var w = el("div", "tags");
    items.forEach(function (x) { w.appendChild(el("span", "tag", x)); });
    return w;
  }

  /* ---------- Dynamic sections ---------- */
  function renderSkills() {
    var grid = $("#skillsGrid");
    grid.textContent = "";
    D.skills.forEach(function (s) {
      var card = el("article", "skill-card reveal");
      card.appendChild(el("h3", null, t("skills.groups." + s.id + ".title")));
      var ul = el("ul");
      (t("skills.groups." + s.id + ".points") || []).forEach(function (p) { ul.appendChild(el("li", null, p)); });
      card.appendChild(ul);
      card.appendChild(tagList(s.tags));
      grid.appendChild(card);
    });
  }

  var activeFilter = "all";
  function renderProjects() {
    var grid = $("#projectGrid");
    grid.textContent = "";
    D.projects.forEach(function (p) {
      var k = "projects.items." + p.id;
      var card = el("article", "card reveal");
      card.setAttribute("data-category", p.category);

      /* Blank thumbnail. To add an image later: put <img src="assets/..." alt=""> inside .card-thumb */
      var thumb = el("div", "card-thumb");
      thumb.setAttribute("data-project", p.id);
      if (p.image) {
        var img = el("img");
        img.src = p.image; img.alt = t("projects.items." + p.id + ".title"); img.loading = "lazy";
        thumb.appendChild(img);
        if (p.zoom) {
          thumb.classList.add("zoomable");
          thumb.tabIndex = 0;
          thumb.setAttribute("role", "button");
          thumb.setAttribute("aria-label", t("ui.zoom"));
          thumb.appendChild(el("span", "zoom-hint", t("ui.zoom")));
          var open = (function (src, alt) { return function (e) {
            if (e.target.closest && e.target.closest("a")) return;
            if (e.type === "keydown" && e.key !== "Enter" && e.key !== " ") return;
            e.preventDefault(); openLightbox(src, alt);
          }; })(p.image, img.alt);
          thumb.addEventListener("click", open);
          thumb.addEventListener("keydown", open);
        }
      } else {
        thumb.classList.add("is-blank");
      }
      if (p.links.length) {
        var ov = el("div", "card-overlay");
        p.links.forEach(function (l) {
          var a = el("a", null, t("projects.links.github"));
          a.href = l.url; a.target = "_blank"; a.rel = "noopener";
          ov.appendChild(a);
        });
        thumb.appendChild(ov);
      }
      card.appendChild(thumb);

      var body = el("div", "card-body");
      var meta = el("div", "card-meta");
      meta.appendChild(el("span", "card-category", t(k + ".tag")));
      if (p.id === "rag") meta.appendChild(el("span", "badge-done", t(k + ".period")));
      body.appendChild(meta);
      body.appendChild(el("h3", null, t(k + ".title")));
      body.appendChild(el("p", "card-desc", t(k + ".summary")));
      var ul = el("ul", "card-points");
      (t(k + ".points") || []).forEach(function (x) { ul.appendChild(el("li", null, x)); });
      body.appendChild(ul);
      body.appendChild(tagList(p.tech));
      card.appendChild(body);
      grid.appendChild(card);
    });
    applyFilter();
    observeReveals();
  }

  function applyFilter() {
    $$("#projectGrid .card").forEach(function (c) {
      var show = activeFilter === "all" || c.getAttribute("data-category") === activeFilter;
      c.classList.toggle("is-hidden", !show);
    });
  }

  function renderTimeline() {
    var box = $("#timeline");
    box.textContent = "";
    D.journey.forEach(function (id) {
      var k = "journey.items." + id;
      var it = el("div", "t-item reveal");
      it.appendChild(el("span", "t-date", t(k + ".date")));
      it.appendChild(el("h3", null, t(k + ".title")));
      it.appendChild(el("p", null, t(k + ".desc")));
      box.appendChild(it);
    });
  }

  function renderStats() {
    $("#statProjects").textContent = D.projects.length;
    $("#statAreas").textContent = D.skills.length;
  }

  function renderAll() {
    renderSkills();
    renderProjects();
    renderTimeline();
    renderStats();
    observeReveals();
    var code = $("#langCode");
    if (code) code.textContent = window.i18n.lang.toUpperCase();
    $$("#langMenu button").forEach(function (b) {
      b.setAttribute("aria-current", b.getAttribute("data-lang") === window.i18n.lang ? "true" : "false");
    });
  }

  /* ---------- Lightbox ---------- */
  function openLightbox(src, alt) {
    var box = el("div", "lightbox");
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    var img = el("img"); img.src = src; img.alt = alt;
    var close = el("button", "lightbox-close", "×");
    close.type = "button"; close.setAttribute("aria-label", t("ui.close"));
    box.appendChild(img); box.appendChild(close);
    function done() {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      if (box.parentNode) box.parentNode.removeChild(box);
    }
    function onKey(e) { if (e.key === "Escape") done(); }
    box.addEventListener("click", function (e) { if (e.target !== img) done(); });
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    document.body.appendChild(box);
    close.focus();
  }

  /* ---------- Reveal on scroll ---------- */
  var io = null;
  function observeReveals() {
    var items = $$(".reveal:not(.visible)");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (n) { n.classList.add("visible"); });
      return;
    }
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    }
    items.forEach(function (n) { io.observe(n); });
  }

  /* ---------- Nav: scrolled state, scroll spy, mobile menu ---------- */
  function setupNav() {
    var nav = $("#nav"), links = $$("#navLinks a"), menuBtn = $("#menuBtn"), list = $("#navLinks");

    function onScroll() { nav.classList.toggle("scrolled", window.scrollY > 40); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    var ids = links.map(function (a) { return a.getAttribute("href").slice(1); });
    if ("IntersectionObserver" in window) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            links.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id); });
          }
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      ids.forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });
    }

    function closeMenu() { list.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
    menuBtn.addEventListener("click", function () {
      var open = list.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.forEach(function (a) { a.addEventListener("click", closeMenu); });
    window.addEventListener("resize", function () { if (window.innerWidth > 768) closeMenu(); });
  }

  /* ---------- Theme ---------- */
  function setupTheme() {
    var root = document.documentElement;
    var meta = $('meta[name="theme-color"]');
    function sync() { if (meta) meta.setAttribute("content", root.getAttribute("data-theme") === "light" ? "#F6F7FB" : "#0A0A0F"); }
    sync();
    $("#themeBtn").addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      sync();
    });
  }

  /* ---------- Language menu ---------- */
  function setupLang() {
    var box = $("#lang"), btn = $("#langBtn");
    function close() { box.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = box.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    $$("#langMenu button").forEach(function (b) {
      b.addEventListener("click", function () { window.i18n.setLang(b.getAttribute("data-lang")); close(); });
    });
    document.addEventListener("click", function (e) { if (!box.contains(e.target)) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }

  /* ---------- Filters ---------- */
  function setupFilters() {
    $$("#filters .filter").forEach(function (b) {
      b.addEventListener("click", function () {
        activeFilter = b.getAttribute("data-filter");
        $$("#filters .filter").forEach(function (x) { x.classList.toggle("active", x === b); });
        applyFilter();
      });
    });
  }

  /* ---------- Contact ---------- */
  function setupContact() {
    var list = $("#contactList");
    var items = (D.contacts || []).slice();
    if ((D.email || "").trim()) items.push({ label: "Email", value: D.email.trim(), url: "mailto:" + D.email.trim() });
    items.forEach(function (c) {
      var li = el("li");
      var a = el("a");
      a.href = c.url;
      if (/^https?:/.test(c.url)) { a.target = "_blank"; a.rel = "noopener"; }
      a.appendChild(el("span", "c-label", c.label));
      a.appendChild(el("span", "c-value", c.value));
      a.appendChild(el("span", "c-arrow", "→"));
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  /* ---------- Boot ---------- */
  document.addEventListener("i18n:change", renderAll);
  setupNav();
  setupTheme();
  setupLang();
  setupFilters();
  setupContact();
  window.i18n.init();
})();
