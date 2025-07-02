// Progress Bar
window.addEventListener('scroll', () => {
  const s = document.documentElement.scrollTop;
  const h = document.documentElement.scrollHeight - window.innerHeight;
  document.querySelector('.progress-bar').style.width = `${(s/h)*100}%`;
});

// Scroll Reveal
document.querySelectorAll('.reveal').forEach(el => {
  const obs = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { e.target.classList.add('active'); obs.unobserve(e.target); }
  }, { threshold: 0.2 });
  obs.observe(el);
});

// Mobile Nav Toggle
const navToggle = document.getElementById('nav-toggle');
navToggle.addEventListener('change', () => {
  document.querySelector('.nav-links').classList.toggle('active', navToggle.checked);
  document.querySelector('.nav-cta').classList.toggle('active', navToggle.checked);
});

// Carousel Auto-Slide
const slides = document.querySelector('.carousel .slides');
const imgs = slides.querySelectorAll('img');
let slideIndex = 0;
function autoSlide() {
  slideIndex = (slideIndex + 2) % imgs.length;
  slides.style.transform = `translateX(-${(slideIndex / imgs.length) * 100}%)`;
}
let slideInterval = setInterval(autoSlide, 3000);

// Pause on hover
slides.parentElement.addEventListener('mouseenter', () => clearInterval(slideInterval));
slides.parentElement.addEventListener('mouseleave', () => slideInterval = setInterval(autoSlide, 3000));
