const textarea = document.getElementById('textarea');
const tabs = document.getElementById('tabs');
textarea.focus();

textarea.addEventListener('keyup', (event) => {

  createTabs(event.target.value);

  if (event.key === 'Enter') {
    setTimeout(() => (event.target.value = ''), 10);
    randomSelect();
  }
});

const createTabs = (input) => {
  
  const arrayOfTabs = input
    .split(',')
    .filter((tab) => tab.trim() !== '')
    .map((tab) => tab.trim());

  tabs.innerHTML = '';

  arrayOfTabs.forEach((tab) => {
    const tabEl = document.createElement('p');
    tabEl.innerText = tab;
    tabs.appendChild(tabEl);
  });
};

const randomSelect = () => {
  const times = 30;

  const interval = setInterval(() => {
    const randomTab = pickRandom();

    highlight(randomTab);

    setTimeout(() => {
      unHighlight(randomTab);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const random = pickRandom();

      highlight(random)
    }, 100);
  }, times * 100);
};

const pickRandom = () => {
  const tabs = document.querySelectorAll('p');
  return tabs[Math.floor(Math.random() * tabs.length)];
};

const highlight = (tab) => {
  tab.classList.add('active');
};
const unHighlight = (tab) => {
  tab.classList.remove('active');
};
