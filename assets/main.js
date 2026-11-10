/* Feng Binghui · Portfolio — Apple-inspired interactions (zero dependencies) */
(function () {
  'use strict';

  var root = document.documentElement;
  var THEME_KEY = 'fb-theme';
  var metaTheme = document.querySelector('meta[name="theme-color"]');
  var ICON_SUN = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';
  var ICON_MOON = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>';

  /* ---------- 主题：默认浅色，可选深色并记忆 ---------- */
  var stored = null;
  try { stored = localStorage.getItem(THEME_KEY); } catch (e) { /* ignore */ }
  var initial = stored === 'dark' ? 'dark' : 'light';
  applyTheme(initial);

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (metaTheme) metaTheme.setAttribute('content', theme === 'dark' ? '#000000' : '#ffffff');
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) { /* ignore */ }
    var toggleEl = document.getElementById('theme-toggle');
    if (toggleEl) {
      toggleEl.innerHTML = theme === 'dark' ? ICON_SUN : ICON_MOON;
      toggleEl.setAttribute('aria-label', theme === 'dark' ? '切换到浅色主题' : '切换到深色主题');
      toggleEl.setAttribute('title', theme === 'dark' ? '切换到浅色主题' : '切换到深色主题');
      toggleEl.setAttribute('aria-pressed', String(theme === 'dark'));
    }
  }

  var toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }

  /* ---------- 导航滚动状态 ---------- */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle('gnav--stuck', window.scrollY > 8);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- 滚动渐入 ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- 数字滚动 ---------- */
  var counters = document.querySelectorAll('.stat__num[data-count]');
  function animate(el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    var start = null;
    var duration = 900;
    function frame(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  if ('IntersectionObserver' in window && counters.length) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animate(entry.target);
          cio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(function (el) { el.textContent = el.getAttribute('data-count'); });
  }

  /* ---------- 年份 ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
