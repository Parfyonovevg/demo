const img = document.querySelector('img');
const percentage = document.querySelector('.loading');

let percent = 0;
const transition = 3000;
const clear = () => (percentage.innerHTML = '');

const blur = () => {
  img.classList.add('loaded');
  img.style.transition = `filter ${transition}ms ease`;

  const count = setInterval(() => {
    percent++;
    percentage.innerHTML = percent + '%';
    if (percent > 99) {
      clearInterval(count);
      setTimeout(clear, 1000);
    }
  }, transition / 100);
};

setTimeout(blur, 0);
