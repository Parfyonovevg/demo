const count = document.querySelectorAll('.count');

const time = 2;
const steps = 200;

count.forEach((el) => {
  el.innerText = '0';

  const updateCount = () => {
    const target = +el.getAttribute('data-target');
    const step = target / steps;
    let currentValue = +el.innerText;

    if (currentValue < target) {
      el.innerText = `${Math.ceil(currentValue + step)}`;
      setTimeout(updateCount, 1);
    } else {
      el.innerText = target;
    }
  };

  updateCount();
});
