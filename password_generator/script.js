const UPPERCASES = [65, 90];

const LOWERCASES = [97, 122];

const NUMBERS = [48, 57];

const SYMBOLS = [
  [33, 47],
  [58, 64],
  [91, 96],
  [123, 126],
];

const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const password = document.getElementById('password');
const copy = document.getElementById('copy');

const generate = document.getElementById('generate');

generate.addEventListener('click', (e) => {
  e.preventDefault();
  const length = document.getElementById('length');
  const passwordLength = +length.value;
  let arr = [];
  if (uppercase.checked) {
    for (let i = UPPERCASES[0]; i <= UPPERCASES[1]; i++) {
      arr.push(i);
    }
  }
  if (lowercase.checked) {
    for (let i = LOWERCASES[0]; i <= LOWERCASES[1]; i++) {
      arr.push(i);
    }
  }
  if (numbers.checked) {
    for (let i = NUMBERS[0]; i <= NUMBERS[1]; i++) {
      arr.push(i);
    }
  }
  if (symbols.checked) {
    SYMBOLS.forEach((el) => {
      for (let i = el[0]; i <= el[1]; i++) {
        arr.push(i);
      }
    });
  }

  const arrayOfChars = generateRandomString(arr, passwordLength);
  console.log(arrayOfChars);

  password.value = transformToPassword(arrayOfChars);
});

const generateRandomString = (arr, times) => {
  const randoms = [];

  for (let i = 0; i < times; i++) {
    randoms.push(arr[Math.floor(Math.random() * arr.length)]);
  }

  return randoms;
};

const transformToPassword = (arr) => {
  let password = '';
  arr.forEach((num) => {
    password += String.fromCharCode(num);
  });
  return password;
};

copy.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const copiedPassword = password.value;
  if (!password) {
    return;
  }
  textarea.value = copiedPassword;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied!');
});
