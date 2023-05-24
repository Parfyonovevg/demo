const smiles = document.querySelectorAll('.smile-btn');
const send = document.getElementById('send');
const container = document.getElementById('container');

container.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('smile-btn')) {
    smiles.forEach((smile) => smile.classList.remove('active'));
    e.target.parentNode.classList.toggle('active');
  }
  if (e.target.classList.contains('smile-btn')) {
    smiles.forEach((smile) => smile.classList.remove('active'));
    e.target.classList.toggle('active');
  }
});

send.addEventListener('click', () => {
  smiles.forEach((smile) => {
    if (smile.classList.contains('active')) {
      sendFeedback(smile.innerText);
    }
  });
});

sendFeedback = (text) => {
  container.classList.add('hide');
  const message = document.createElement('div');
  message.classList.add('message-container');
  message.innerHTML = `
    <i class="fa-solid fa-heart"></i>
    <p>Thank you!</p>
    <p>Feedback: <span>${text}</span></p>
    <p>We'll use your feedback to improve our customer support.</p>
  `;

  document.body.appendChild(message);
};

//Of course, there are betters solutions. But I wanted to try another way.
