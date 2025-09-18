// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
// Form handler
document.querySelector('#contact form').addEventListener('submit', e => {
  e.preventDefault(); alert('Thanks! We’ll get back to you within 1 business day.'); e.target.reset();
});
// Scroll-triggered fade-in with stagger
const observer=new IntersectionObserver((entries,obs)=>{
 entries.forEach(entry=>{
  if(entry.isIntersecting){
   if(entry.target.classList.contains('stagger-parent')){
    const children=entry.target.querySelectorAll('.fade-in');
    children.forEach((child,i)=>{setTimeout(()=>child.classList.add('visible'),i*150);});
   } else {entry.target.classList.add('visible');}
   obs.unobserve(entry.target);
  }
 });
},{threshold:.15});
document.querySelectorAll('.fade-in,.stagger-parent').forEach(el=>observer.observe(el));
