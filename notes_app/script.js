const addNoteButton = document.getElementById('add');
const notesContainer = document.getElementById('notes');

const savedNotes = JSON.parse(localStorage.getItem('notes'));

createNote = (text = '') => {
  const note = document.createElement('div');
  note.classList.add('note');
  note.innerHTML = `
  <div class="note__header">
    <button class="btn" id="edit">
      <i class="fa-solid fa-file-pen"></i>
    </button>
    <button class="btn" id="remove">
      <i class="fa-solid fa-trash"></i>
    </button>
  </div>
  <div class="text">
     <textarea class="note__text ${text ? 'hidden' : ''}">
</textarea> 
    <div class="note__text ${text ? '' : 'hidden'}" id="note-text">${text}</div>
  </div>
  `;

  const editButton = note.querySelector('#edit');
  const deleteButton = note.querySelector('#remove');
  const noteText = note.querySelector('#note-text');
  const textArea = note.querySelector('textarea');

  textArea.value = text;
  noteText.innerHTML = marked.parse(text);

  deleteButton.addEventListener('click', () => {
    note.remove();
    updateLocalStorage();
  });

  editButton.addEventListener('click', () => {
    noteText.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  });

  textArea.addEventListener('input', (e) => {
    const { value } = e.target;

    noteText.innerHTML = marked.parse(value);
    updateLocalStorage(value);
  });

  notesContainer.appendChild(note);
};

addNoteButton.addEventListener('click', () => createNote());

const updateLocalStorage = () => {
  const notesText = document.querySelectorAll('textarea');
  const notes = [];

  notesText.forEach((note) => notes.push(note.value));
  localStorage.setItem('notes', JSON.stringify(notes));
};

if (savedNotes) {
  savedNotes.forEach((note) => createNote(note));
}
