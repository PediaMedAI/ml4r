// Mobile menu, "Past editions" dropdown, and active-section highlighting.
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open);
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.querySelectorAll('.dropdown-toggle').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = btn.parentElement.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open);
    });
  });
  document.addEventListener('click', function () {
    document.querySelectorAll('.dropdown.is-open').forEach(function (d) {
      d.classList.remove('is-open');
      d.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
    });
  });

  if (!('IntersectionObserver' in window)) return;
  var links = {};
  document.querySelectorAll('.site-nav a[href*="#"]').forEach(function (a) {
    links[a.hash.slice(1)] = a;
  });
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var link = links[entry.target.id];
      if (!link) return;
      if (entry.isIntersecting) {
        Object.keys(links).forEach(function (k) { links[k].classList.remove('is-active'); });
        link.classList.add('is-active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('main section[id]').forEach(function (s) { observer.observe(s); });
})();
