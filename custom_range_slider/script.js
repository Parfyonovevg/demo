const range = document.getElementById('range');

range.addEventListener('input', (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  const range_width = getComputedStyle(e.target).getPropertyValue('width');
  const label_width = getComputedStyle(label).getPropertyValue('width');

  const num_range_width = parseFloat(range_width);
  const num_label_width = parseFloat(label_width);

  const max = +e.target.max;
  const min = +e.target.min;

  const left = value * (num_range_width / max) - num_label_width / 2;

  label.style.left = `${left}px`;

  label.innerHTML = value;
});
