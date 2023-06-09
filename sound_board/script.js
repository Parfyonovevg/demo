const sounds = [
  'game-over',
  'whistle',
  'trailer',
  'geese',
  'sneeze',
  'fanfare',
];

sounds.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopAudio();

    document.getElementById(sound).play();
  });

  document.getElementById('buttons').appendChild(btn);
});

const stopAudio = () => {
  sounds.forEach((sound) => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
};
