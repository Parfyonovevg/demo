const toggles = document.querySelectorAll('.toggle');
const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

toggles.forEach((toggle) =>
  toggle.addEventListener('change', (e) => changeChecked(e.target))
);

changeChecked = (clicked) => {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === clicked) {
      cheap.checked = false;
    }
    if (cheap === clicked) {
      fast.checked = false;
    }
    if (fast === clicked) {
      good.checked = false;
    }
  }
};
