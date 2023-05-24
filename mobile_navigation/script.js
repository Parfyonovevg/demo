const backgrounds = {
  Home: 'https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQZUkwT6XhdDnNqAsPrZiQWWHvhpJo0cviRndWweNeFE0G6sOOa7ltzrwXSocCIsqRqAcruHZtEk-MBx_qLAJz-43yAbJAJXmEYKEMD78GRjJ3ro5x5T97jaAj0NwMiaHvO4mNGLRmwNAPE2yA0LWWV1UfQI.jpg?r=48b',
  Work: 'https://alis.alberta.ca/media/699227/work-search-tools-desk-istock-820850710.jpg',
  Blog: 'https://mockups-design.com/wp-content/uploads/2022/03/Free_Notepad_Mockup_2-scaled.jpg',
  'About Us':
    'https://st.depositphotos.com/3258217/4341/i/950/depositphotos_43418081-stock-photo-mailbox.jpg',
};

const imgContainer = document.getElementById('img-container');

const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    buttons.forEach((button) => button.classList.remove('active'));
    const text = button.innerText;
    imgContainer.style.backgroundImage = `url(${backgrounds[text]})`;
    button.classList.add('active');
  });
});
