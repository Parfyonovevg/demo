const title = document.getElementById('title');
const keys = document.getElementById('keys');

window.addEventListener('keydown', (event) => {
  title.classList.add('hidden');
  if (event.key === ' ') {
    console.log('this');
  }
  // keys.classList.remove('hidden');
  keys.innerHTML = `  
<div class="key">
  ${event.key === ' ' ? 'space' : event.key}
  <small>event.key</small>
</div>
<div class="key keyCode">
  ${event.keyCode}
  <small>event.keyCode</small>
</div>
<div class="key code">
  ${event.code}
  <small>event.code</small>
</div>`;
});
