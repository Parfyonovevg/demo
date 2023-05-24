const panels = document.querySelectorAll('.panel');

panels.forEach((el) =>
  el.addEventListener('click', () => {
    panels.forEach((el) => el.classList.remove('active'));
    el.classList.add('active');
  })
);
