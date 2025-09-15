// Year update
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form handler
document.querySelector('#contact form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks! We’ll get back to you within 1 business day.');
  e.target.reset();
});
