// Footer year 2025
document.getElementById('year').textContent = new Date().getFullYear();

// Form handler
document.querySelector('#contact form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks! We’ll get back to you within 1 business day.');
  e.target.reset();
});

<<<<<<< HEAD
// Fade-in with stagger
const io = new IntersectionObserver((entries, obs) => {
  entries.forEach(ent => {
    if (!ent.isIntersecting) return;
    if (ent.target.classList.contains('stagger-parent')) {
      ent.target.querySelectorAll('.fade-in').forEach((el,i)=>setTimeout(()=>el.classList.add('visible'), i*150));
    } else {
      ent.target.classList.add('visible');
=======
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
      obs.unobserve(entry.target); // animate only once
>>>>>>> parent of 23c2792 (h6)
    }
    obs.unobserve(ent.target);
  });
},{threshold:0.15});
document.querySelectorAll('.fade-in,.stagger-parent').forEach(el=>io.observe(el));

<<<<<<< HEAD
// Floating CTA — Windows screensaver bounce + gradient swap
const cta = document.querySelector('.floating-cta');
let x = 50, y = 50, dx = 2, dy = 2;
const gradients = [
  ["#83ECA7","#FDCDDD"],
  ["#FFFF96","#83ECA7"],
  ["#F6BBFD","#FDCDDD"],
  ["#83ECA7","#F6BBFD"],
  ["#FFFF96","#FDCDDD"]
];
let gi = 0;
function setGrad(){ const [a,b]=gradients[gi]; cta.style.background = `linear-gradient(135deg, ${a}, ${b})`; }
function tick(){
  const r = cta.getBoundingClientRect(), W = innerWidth, H = innerHeight;
  let bounce=false;
  if (x<=0 || x+r.width>=W){ dx*=-1; bounce=true; }
  if (y<=0 || y+r.height>=H){ dy*=-1; bounce=true; }
  x+=dx; y+=dy; cta.style.left = x+'px'; cta.style.top = y+'px';
  if(bounce){ gi=(gi+1)%gradients.length; setGrad(); }
  requestAnimationFrame(tick);
}
setGrad(); tick();
=======
// Observe all elements with .fade-in and grids with .stagger-parent
document.querySelectorAll('.fade-in, .stagger-parent').forEach(el => observer.observe(el));

/// === Floating CTA bounce like Windows screensaver ===
const floatingCTA = document.querySelector('.floating-cta');
let x = 50, y = 50; // starting position
let dx = 2, dy = 2; // speed per frame

// Nice gradient pairs to cycle through
const gradients = [
  ["#ff6d9a", "#FDCC2A"],
  ["#6dd5ed", "#2193b0"],
  ["#ff9966", "#ff5e62"],
  ["#a18cd1", "#fbc2eb"],
  ["#00c6ff", "#0072ff"],
  ["#f7971e", "#ffd200"]
];
let currentGradient = 0;

function updateGradient() {
  const [c1, c2] = gradients[currentGradient];
  floatingCTA.style.background = `linear-gradient(135deg, ${c1}, ${c2})`;
}

function moveCTA() {
  const rect = floatingCTA.getBoundingClientRect();
  const winW = window.innerWidth;
  const winH = window.innerHeight;

  let bounced = false;

  if (x + rect.width >= winW || x <= 0) {
    dx *= -1;
    bounced = true;
  }
  if (y + rect.height >= winH || y <= 0) {
    dy *= -1;
    bounced = true;
  }

  x += dx;
  y += dy;

  floatingCTA.style.left = x + "px";
  floatingCTA.style.top = y + "px";

  // Change gradient on bounce
  if (bounced) {
    currentGradient = (currentGradient + 1) % gradients.length;
    updateGradient();
  }

  requestAnimationFrame(moveCTA);
}

// Initialize absolute positioning and gradient
floatingCTA.style.position = "fixed";
floatingCTA.style.left = x + "px";
floatingCTA.style.top = y + "px";
updateGradient();

// Kick off animation
moveCTA();

// === Background color changes per section ===
const sectionColors = {
  hero: "#fff7fa",
  toolbox: "#ffe5ed",
  work: "#e9f7ff",
  about: "#f0e5ff",
  contact: "#fff3d1"
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
>>>>>>> parent of 23c2792 (h6)
