// Main shared scripts: mobile nav, scroll reveal, gallery filter, accordion

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('nav.primary');
if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('nav--open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Scroll reveal
const revealEls = Array.from(document.querySelectorAll('[data-reveal]'));
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// Gallery filter (on gallery page only)
const filterBar = document.querySelector('[data-filter-bar]');
if (filterBar) {
  const items = Array.from(document.querySelectorAll('[data-category]'));
  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-filter]');
    if (!btn) return;
    const filter = btn.getAttribute('data-filter');
    items.forEach((item) => {
      const category = item.getAttribute('data-category');
      const match = filter === 'all' || category === filter;
      item.classList.toggle('hidden', !match);
    });
    filterBar.querySelectorAll('[aria-pressed]')
      .forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
  });
}

// Accordion (on services page only)
document.querySelectorAll('[data-accordion-btn]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const panelId = btn.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    panel.classList.toggle('hidden', expanded);
  });
});


