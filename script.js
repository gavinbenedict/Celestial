// ===== NAV SCROLL =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ===== REVEAL ON SCROLL =====
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

// ===== SEARCH OVERLAY =====
const overlay = document.getElementById('search-overlay');
const searchBtn = document.getElementById('nav-search-btn');
const closeBtn = document.getElementById('search-close-btn');
const searchInput = document.getElementById('search-input');

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  overlay.classList.add('open');
  setTimeout(() => searchInput.focus(), 300);
});
closeBtn.addEventListener('click', () => overlay.classList.remove('open'));
overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('open'); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') overlay.classList.remove('open'); });

// ===== CONTACT FORM =====
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Enquiry Sent ✓';
  btn.style.background = '#4a7c59';
  setTimeout(() => { btn.textContent = 'Send Enquiry'; btn.style.background = ''; }, 4000);
});

// ===== HERO DEPTH — subtle image panel shift on scroll =====
const heroPanel = document.querySelector('.hero__image-panel');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (heroPanel && y < window.innerHeight) {
    // Very subtle shift gives depth without breaking layout
    heroPanel.style.transform = `translateY(${y * 0.06}px)`;
  }
}, { passive: true });

// ===== MAGNETIC BUTTONS =====
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  });
  btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
});
