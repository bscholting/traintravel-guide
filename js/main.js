/* ============================================================
   traintravel.guide — Main JavaScript
   ============================================================ */

// ── COMPONENT LOADER ──
// Fetches shared nav and footer HTML and injects them into the page.
// Each page just needs <div id="nav-placeholder"></div> and <div id="footer-placeholder"></div>

async function loadComponents() {
  // Work out the path depth so components resolve from any subfolder
  const depth = (window.location.pathname.match(/\//g) || []).length - 1;
  const prefix = depth > 0 ? '../'.repeat(depth) : './';

  try {
    const [navRes, footerRes] = await Promise.all([
      fetch(`${prefix}components/nav.html`),
      fetch(`${prefix}components/footer.html`)
    ]);
    const [navHTML, footerHTML] = await Promise.all([
      navRes.text(),
      footerRes.text()
    ]);

    const navEl = document.getElementById('nav-placeholder');
    const footerEl = document.getElementById('footer-placeholder');
    if (navEl) navEl.innerHTML = navHTML;
    if (footerEl) footerEl.innerHTML = footerHTML;

    // Highlight active nav link
    highlightActiveNav();
  } catch (e) {
    console.warn('Component load failed:', e);
  }
}

function highlightActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('#site-nav .nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && path.includes(href) && href !== '/') {
      link.style.color = 'var(--gold-light)';
    }
  });
}

// ── SCROLL ANIMATIONS ──
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ── READING PROGRESS BAR ──
function initProgressBar() {
  const fill = document.getElementById('progress-fill');
  if (!fill) return;
  window.addEventListener('scroll', () => {
    const doc = document.documentElement;
    const scrolled = doc.scrollTop || document.body.scrollTop;
    const total = doc.scrollHeight - doc.clientHeight;
    fill.style.width = ((scrolled / total) * 100) + '%';
  }, { passive: true });
}

// ── SMOOTH ANCHOR SCROLL (offset for fixed nav) ──
function initAnchorScroll() {
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  });
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  loadComponents();
  initScrollAnimations();
  initProgressBar();
  initAnchorScroll();
});
