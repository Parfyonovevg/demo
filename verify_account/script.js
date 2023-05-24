const digits = document.querySelectorAll('.digit');

digits[0].focus();

digits.forEach((digit, idx) => {
  digit.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      digits[idx].value = '';
      if (idx < digits.length - 1) {
        setTimeout(() => digits[idx + 1].focus(), 10);
      } else return;
    } else if ((e.key = 'Backspace') && idx > 0) {
      setTimeout(() => digits[idx - 1].focus(), 10);
    }
  });
});
