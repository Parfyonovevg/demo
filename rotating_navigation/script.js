const button = document.getElementById('toggle-menu');
const main = document.querySelector('main');
const nav = document.getElementById('nav');

button.addEventListener('click', () => {
  main.classList.toggle('rotated');
  nav.classList.toggle('active-nav');
  button.classList.toggle('toggle-menu--opened');
});
