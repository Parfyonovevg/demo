const password = document.getElementById('password');
const background = document.getElementById('background');
let length = 5;
let currentBlur = 20;
const step = currentBlur / length;

password.addEventListener('input', () => {
  currentBlur = currentBlur - step;
  // if (currentBlur <= 0) {
  //   currentBlur = 0;
  // }
  background.style.filter = `blur(${currentBlur}px)`;
});
