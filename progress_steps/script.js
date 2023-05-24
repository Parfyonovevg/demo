const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.step');

let step = 0;
let percent = 0;

nextButton.addEventListener('click', () => {
  step++;
  percent = (step / (circles.length - 1)) * 100;
  prevButton.removeAttribute('disabled');
  progress.style.width = percent + '%';
  circles[step].classList.add('active-step');
  if (step === circles.length - 1) {
    nextButton.setAttribute('disabled', true);
  }
});

prevButton.addEventListener('click', () => {
  percent = percent - (1 / (circles.length - 1)) * 100;
  progress.style.width = percent + '%';
  circles[step].classList.remove('active-step');
  step--;
  if (step === 0) {
    prevButton.setAttribute('disabled', true);
  }
  nextButton.removeAttribute('disabled');
});
