// === Footer year ===
document.getElementById('year').textContent = new Date().getFullYear();

// === Simple form handler ===
document.querySelector('#contact form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks! We’ll get back to you within 1 business day.');
  e.target.reset();
});

// === Scroll-triggered fade-in animations with stagger ===
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('stagger-parent')) {
        const children = entry.target.querySelectorAll('.fade-in');
        children.forEach((child, i) => {
          setTimeout(() => child.classList.add('visible'), i * 150);
        });
      } else {
        entry.target.classList.add('visible');
      }
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in, .stagger-parent').forEach(el => observer.observe(el));

// === Background gradients per section ===
const sectionColors = {
  hero: "linear-gradient(135deg, #FDCDDD, #fff)",
  toolbox: "linear-gradient(145deg, #FFFF96, #fff)",
  work: "linear-gradient(120deg, #83ECA7, #fff)",
  about: "linear-gradient(160deg, #F6BBFD, #fff)",
  contact: "#fff"
};

const sections = document.querySelectorAll("section");

const bgObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id || "hero";
      if (sectionColors[id]) {
        document.body.style.background = sectionColors[id];
      }
    }
  });
}, { threshold: 0.5 });

sections.forEach(sec => bgObserver.observe(sec));

// === Floating CTA bounce with gradient change ===
const floatingCTA = document.querySelector('.floating-cta');
let x = 50, y = 50;
let dx = 2, dy = 2;

const gradients = [
  ["#83ECA7", "#FFFF96"],
  ["#FDCDDD", "#02594E"],
  ["#F6BBFD", "#83ECA7"],
  ["#FFFF96", "#FDCDDD"],
  ["#02594E", "#F6BBFD"]
];
let currentGradient = 0;

function updateGradient() {
  const [c1, c2] = gradients[currentGradient];
  floatingCTA.style.background = `linear-gradient(135deg, ${c1}, ${c2})`;
  floatingCTA.style.color = "#02594E"; // deep teal text always
}

function moveCTA() {
  const rect = floatingCTA.getBoundingClientRect();
  const winW = window.innerWidth;
  const winH = window.innerHeight;

  let bounced = false;

  if (x + rect.width >= winW || x <= 0) { dx *= -1; bounced = true; }
  if (y + rect.height >= winH || y <= 0) { dy *= -1; bounced = true; }

  x += dx;
  y += dy;

  floatingCTA.style.left = x + "px";
  floatingCTA.style.top = y + "px";

  if (bounced) {
    currentGradient = (currentGradient + 1) % gradients.length;
    updateGradient();
  }

  requestAnimationFrame(moveCTA);
}

floatingCTA.style.position = "fixed";
floatingCTA.style.left = x + "px";
floatingCTA.style.top = y + "px";
updateGradient();
moveCTA();
