const menu = document.querySelector('.menu');
const nav = document.querySelector('.navigation');
const modalBlack = document.querySelector('.modal_black');
const modalRed = document.querySelector('.modal_red');
const close = document.querySelector('.close');

menu.addEventListener('click', () => {
  nav.classList.add('open');
  modalBlack.classList.add('open');
  modalRed.classList.add('open');
});

close.addEventListener('click', () => {
  nav.classList.remove('open');
  modalBlack.classList.remove('open');
  modalRed.classList.remove('open');
});
