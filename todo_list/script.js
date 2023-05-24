const input = document.querySelector('input');
const form = document.getElementById('form');

const todosList = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos')) ?? [];

const renderTodos = () => {
  todosList.innerHTML = '';
  todos.forEach((todo) => {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo');
    if (todo.status === 'done') {
      todoItem.classList.add('done');
    }
    todoItem.innerText = todo.title;
    todoItem.addEventListener('click', () => toggleTodo(todoItem));
    todoItem.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      deleteTodo(todoItem);
    });
    todosList.appendChild(todoItem);
  });
};

renderTodos();

const toggleTodo = (todoItem) => {
  todos.forEach((todo) => {
    if (todo.title === todoItem.innerText && todo.status === 'active') {
      todo.status = 'done';
    } else if (todo.title === todoItem.innerText && todo.status === 'done') {
      todo.status = 'active';
    }
  });
  localStorage.clear;
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos();
};

const addTodo = (title) => {
  const newTodo = {
    title: input.value,
    status: 'active',
  };
  todos.push(newTodo);
  renderTodos();
  input.value = '';

  localStorage.clear;
  localStorage.setItem('todos', JSON.stringify(todos));
};

const deleteTodo = (todoItem) => {
  todos.forEach((todo, index) => {
    if (todo.title === todoItem.innerText) {
      todos.splice(index, 1);
    }
  });
  localStorage.clear;
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos();
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value !== '') {
    addTodo(input.value);
  }
});
