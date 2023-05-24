const startButton = document.getElementById('replay');
const numbers = document.querySelectorAll('.counter span');
const counter = document.querySelector('.start');
const finish = document.querySelector('.finish');

const runAnimation = () => {
  numbers.forEach((number, idx) => {
    const nextToLast = numbers.length - 1;

    number.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        number.classList.remove('shown');
        number.classList.add('out');
      } else if (e.animationName === 'goOut' && number.nextElementSibling) {
        number.nextElementSibling.classList.add('shown');
      } else {
        counter.classList.add('hide');
        finish.classList.add('show');
      }
    });
  });
};

runAnimation();

startButton.addEventListener('click', () => {
  finish.classList.remove('show');
  finish.classList.add('hide');
  counter.classList.remove('hide');
  counter.classList.add('show');
  numbers.forEach((num) => {
    num.classList.value = '';
  });
  numbers[0].classList.add('shown');

  runAnimation();
});
