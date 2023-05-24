const questions = [
  {
    question: 'What language runs in a web browser?',
    a: 'JavaScript',
    b: 'HTML',
    c: 'CSS',
    d: 'Python',
    correctAnswer: 'a',
  },
  {
    question: 'What extensions has JavaScript file?',
    a: 'index.html',
    b: 'index.js',
    c: 'index.css',
    d: 'index.py',
    correctAnswer: 'b',
  },
  {
    question: 'What extensions has CSS file?',
    a: 'index.js',
    b: 'index.html',
    c: 'index.css',
    d: 'index.py',
    correctAnswer: 'c',
  },
  {
    question: 'What extensions hase Python file?',
    a: 'index.py',
    b: 'index.html',
    c: 'index.css',
    d: 'index.js',
    correctAnswer: 'a',
  },
];

const submitBtn = document.getElementById('submit');
const quiz = document.getElementById('quiz');
const questionText = document.getElementById('questionText');
const answers = document.querySelectorAll('.answer');
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');

let correct = 0;
let currentQuestionIndex = 0;

const clearAnswers = () => {
  answers.forEach(answer => {
    answer.checked = false;
  });
};

const renderQuestion = () => {
  clearAnswers();

  const currentQuestion = questions[currentQuestionIndex];
  questionText.innerText = currentQuestion.question;
  a_text.innerText = currentQuestion.a;
  b_text.innerText = currentQuestion.b;
  c_text.innerText = currentQuestion.c;
  d_text.innerText = currentQuestion.d;
};

renderQuestion(currentQuestionIndex);

const getSelected = () => {
  let attempt;

  answers.forEach(answerEl => {
    if (answerEl.checked) {
      attempt = answerEl.id;
    }
  });
  return attempt;
};

const checkAnswer = answer => {
  if (answer === questions[currentQuestionIndex].correctAnswer) {
    correct++;
  }
};

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  checkAnswer(answer);
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    quiz.innerHTML = `
    <h2>You have completed the quiz!</h2>
    <p>The result is:${correct}/${questions.length}</p>
    <button onClick="location.reload()">Reload</button>
    `;
    return;
  }
  renderQuestion();
});
