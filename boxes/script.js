const boxes = document.getElementById('boxes');
const btn = document.getElementById('button');

const createBoxes = () => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundPosition = `${-j * 7.8125}rem ${-i * 7.8125}rem`;
      boxes.appendChild(box);
    }
  }
};

createBoxes();

btn.addEventListener('click', () => boxes.classList.toggle('big'));
