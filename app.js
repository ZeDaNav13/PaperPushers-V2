// === Footer year ===
document.getElementById('year').textContent = new Date().getFullYear();

// === Simple form handler ===
document.querySelector('#contact form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks! We’ll get back to you within 1 business day.');
  e.target.reset();
});

// === Scroll-triggered fade-in animations ===
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target); // animate only once
    }
  });
}, { threshold: 0.15 });

// Observe all elements with .fade-in
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
