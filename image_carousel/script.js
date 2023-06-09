const images = document.getElementById('imgs');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const img = document.querySelectorAll('#imgs img');

let idx = 0;

const run = () => {
  idx++;
  changeImage();
};
let interval = setInterval(run, 2000);

const changeImage = () => {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  images.style.transform = `translateX(${-idx * 60}vw)`;
};

const resetInterval = () => {
  clearInterval(interval);
  interval = setInterval(run, 2000);
};

nextButton.addEventListener('click', () => {
  idx++;
  changeImage();
});
prevButton.addEventListener('click', () => {
  idx--;
  changeImage();
  resetInterval();
});
