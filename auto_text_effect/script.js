const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'Just some dummy text';

let idx = 1;
let speed = 300 / speedEl.value;

speedEl.addEventListener('input', e => (speed = 300 / e.target.value));

const typeText = () => {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(typeText, speed);
};

typeText(text);
