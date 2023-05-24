const header = document.getElementById('header');

const toggleHeader = () => {
  const headerBottom = header.getBoundingClientRect().bottom;

  if (window.scrollY > headerBottom * 3) {
    header.classList.add('header_toggled');
  } else {
    header.classList.remove('header_toggled');
  }
};

window.addEventListener('scroll', toggleHeader);
