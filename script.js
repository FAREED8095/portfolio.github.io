// script.js

// Active navigation highlight on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('.sidebar nav a');
  let current = '';
  sections.forEach(section => {
    const secTop = section.offsetTop - 80;
    const secHeight = section.clientHeight;
    if (scrollY >= secTop && scrollY < secTop + secHeight) {
      current = section.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});
