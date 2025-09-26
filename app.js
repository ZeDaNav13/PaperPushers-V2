// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Form handler
document.querySelector('#contact form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks! We’ll get back to you within 1 business day.');
  e.target.reset();
});

// Fade-in + stagger
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('stagger-parent')) {
        entry.target.querySelectorAll('.fade-in').forEach((child,i) => {
          setTimeout(() => child.classList.add('visible'), i*150);
        });
      } else {
        entry.target.classList.add('visible');
      }
      obs.unobserve(entry.target);
    }
  });
},{threshold:0.15});
document.querySelectorAll('.fade-in,.stagger-parent').forEach(el => observer.observe(el));

// Floating CTA bounce
const cta = document.querySelector('.floating-cta');
let x=50, y=50, dx=2, dy=2;
const gradients=[
  ["#F55353","#FEB139"],
  ["#FEB139","#F6F54D"],
  ["#F6F54D","#A91079"],
  ["#A91079","#F55353"],
  ["#143F6B","#F6F54D"]
];
let paused = false;

function move(){
  if (paused) {
    requestAnimationFrame(move);
    return;
  }
  const r=cta.getBoundingClientRect(),W=innerWidth,H=innerHeight;
  let bounce=false;
  if(x<=0||x+r.width>=W){dx*=-1;bounce=true;}
  if(y<=0||y+r.height>=H){dy*=-1;bounce=true;}
  x+=dx;y+=dy;cta.style.left=x+"px";cta.style.top=y+"px";
  if(bounce){gi=(gi+1)%gradients.length;updateGradient();}
  requestAnimationFrame(move);
}

cta.addEventListener("mouseenter", ()=>paused=true);
cta.addEventListener("mouseleave", ()=>paused=false);

updateGradient();move();