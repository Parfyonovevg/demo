const btn = document.getElementById('btn');
const alerts = document.getElementById('alerts');

const messages = [
  'Message 1',
  'Message 2',
  'Message 3',
  'Message 4',
  'Message 5',
  'Message 6',
];

const colors = [
  'blue',
  'red',
  'green',
  'fuchsia',
  '	crimson',
  'darkgreen	',
  'lightslategrey',
  'teal',
];

btn.addEventListener('click', () => {
  const randomColor = Math.floor(Math.random() * colors.length);
  const randomMessage = Math.floor(Math.random() * messages.length);
  const alert = document.createElement('div');
  alert.className = 'alert';
  alert.innerText = messages[randomMessage];
  alert.style.backgroundColor = colors[randomColor];
  alerts.appendChild(alert);
  setTimeout(() => alert.remove(), 3000);
});
