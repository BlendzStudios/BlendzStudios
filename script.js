// Hamburger Menu
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('active');
});

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Trigger once
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate').forEach(el => {
  observer.observe(el);
});
