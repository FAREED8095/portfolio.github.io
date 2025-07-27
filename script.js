// Highlight active section on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('main section');
  const links    = document.querySelectorAll('.sidebar nav a');
  let currentId = '';
  sections.forEach(sec => {
    const top    = sec.offsetTop - 80;
    const bottom = top + sec.offsetHeight;
    if (window.scrollY >= top && window.scrollY < bottom) {
      currentId = sec.id;
    }
  });
  links.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + currentId);
  });
});

// Smooth scroll behavior
document.querySelectorAll('.sidebar nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    window.scrollTo({ top: target.offsetTop - 50, behavior: 'smooth' });
  });
});
