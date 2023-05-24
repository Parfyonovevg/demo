const screens = document.querySelectorAll('.screen');
const startButton = document.getElementById('startButton');
const insectsButtons = document.querySelectorAll('.insects-button');
const gameContainer = document.getElementById('game-container');
const message = document.getElementById('message');

const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');

const width = window.innerWidth;
const height = window.innerHeight;
let score = 0;
let seconds = 0;
let selectedInsect = {};

startButton.addEventListener('click', () => screens[0].classList.add('up'));

insectsButtons.forEach(insect => {
  insect.addEventListener('click', () => {
    const image = insect.querySelector('img');
    const src = image.getAttribute('src');
    const alt = image.getAttribute('alt');
    selectedInsect = {
      alt,
      src,
    };
    screens[1].classList.add('up');
    setTimeout(createInsect(selectedInsect), 1000);
    startGame();
  });
});

const startGame = () => {
  setInterval(increaseTime, 1000);
};
const increaseTime = () => {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeEl.innerHTML = `${m}:${s}`;

  seconds++;
};

const createInsect = () => {
  const insect = document.createElement('div');
  insect.classList.add('insect');

  insect.style.top = `${Math.random() * (height - 200) + 100}px`;
  insect.style.left = `${Math.random() * (width - 200) + 100}px`;
  insect.style.transform = `rotate(${Math.random() * 360}deg)`;

  insect.innerHTML = `
  <img src='${selectedInsect.src}' alt=${selectedInsect.alt} />
  `;
  gameContainer.appendChild(insect);
  insect.addEventListener('click', catchInsect);
};

function catchInsect() {
  increaseScore();
  setTimeout(() => this.remove(), 1000);
  addInsects();
}

const addInsects = () => {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1500);
};

const increaseScore = () => {
  score++;
  scoreEl.innerHTML = score;
  if (score === 10) {
    message.classList.add('visible');
  }
};

// const insectAttack = (name) => {
//   score++;
//   if (score === 10) {
//     message.classList.add('visible');
//   }
//   const chosenInsect = insectsSrc.filter((insect) => insect.name === name)[0];
//   console.log(chosenInsect);

//   const insect = document.createElement('div');
//   insect.classList.add('insect');
//   insect.innerHTML = `
//   <img src='${chosenInsect.src}' alt=${chosenInsect.name} />
//   `;
//   insect.style.top = `${Math.random() * height}px`;
//   insect.style.left = `${Math.random() * width}px`;
//   insect.style.transform = `rotate(${Math.random() * 360}deg)`;
//   gameContainer.appendChild(insect);
//   insect.addEventListener('click', () => {
//     insect.remove();
//     insectAttack(name);
//     insectAttack(name);
//   });
// };

// insectAttack();
