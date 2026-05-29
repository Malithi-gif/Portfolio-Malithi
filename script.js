<<<<<<< HEAD
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
const toTop = document.getElementById('toTop');
const navLinks = document.querySelectorAll('.side-nav a');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });
});

window.addEventListener('scroll', () => {
  toTop.classList.toggle('show', window.scrollY > 500);

  let current = '';
  document.querySelectorAll('section[id]').forEach(section => {
    if (window.scrollY >= section.offsetTop - 160) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
=======
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  themeToggle.textContent = 'Light';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeToggle.textContent = isDark ? 'Light' : 'Dark';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
>>>>>>> 51ab5319f6810951c216942d92644d6d3c6b8d8d
