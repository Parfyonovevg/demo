const glasses = document.querySelectorAll('.glass');
const modal = document.getElementById('modal');
const goal = document.getElementById('goal');
const remain = document.getElementById('remain');
const done = document.getElementById('done');

const goalMl = 2000;
const glassCapacity = 250;
const percent = glassCapacity / goalMl;

goal.innerText = `Goal: ${goalMl / 1000} Liters`;

remain.innerText = goalMl / 1000; 
done.textContent = 0;

glasses.forEach((glass) => {
  glass.innerText = `${glassCapacity} ml`;

  glass.addEventListener('click', () => {
    if (!glass.classList.contains('filled')) {
      glass.classList.add('filled');

      const donePercent = +done.textContent;
      const current = +remain.innerText;
      console.log(current);

      remain.innerText = current - glassCapacity / 1000;
      done.innerText = donePercent + percent * 100;
      modal.style.height = `${done.innerText}%`;
    }
  });
});
