const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const themeToggle = document.getElementById('themeToggle');
const filters = document.querySelectorAll('.filter');
const papers = document.querySelectorAll('.paper');
const abstractButtons = document.querySelectorAll('.abstract-btn');

menuToggle?.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    papers.forEach(paper => {
      const show = filter === 'all' || paper.dataset.category === filter;
      paper.style.display = show ? 'grid' : 'none';
    });
  });
});

abstractButtons.forEach(button => {
  button.addEventListener('click', () => {
    const abstract = button.closest('.paper-content').querySelector('.abstract');
    abstract.classList.toggle('hidden');
    button.textContent = abstract.classList.contains('hidden') ? 'abstract' : 'hide abstract';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
