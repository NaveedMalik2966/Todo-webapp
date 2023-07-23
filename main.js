const TASKS = [];

const addButton = document.getElementById('Add');

addButton.addEventListener('click', Display);

function AddTask(tasks, targetElement) {
  const outputDiv = document.getElementById(targetElement);
  outputDiv.innerHTML = ''; // Clear the existing content before rendering

  tasks.forEach((task, index) => {
    const taskDiv = document.createElement('div');
    taskDiv.textContent = task.string;

    // Create the "DONE" button and add an event listener to move the task to "DONE TASKS"
    const doneButton = document.createElement('button');
    doneButton.textContent = 'DONE';

    doneButton.addEventListener('click', () => handleDoneTask(index));

    // Create the "DELETE" button and add an event listener to remove the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'DELETE';
    deleteButton.addEventListener('click', () => handleDeleteTask(index));

    taskDiv.appendChild(doneButton);
    taskDiv.appendChild(deleteButton);
    outputDiv.appendChild(taskDiv);
  });
}

function Display() {
  const inputElement = document.getElementById('input');
  const inputString = inputElement.value.trim();

  if (inputString !== '') {
    const object = {
      string: inputString,
      isCompleted: false,
    };
    TASKS.push(object);
    inputElement.value = '';
    AddTask(TASKS, 'output');
  }
}

const handleDoneTask = index => {
  TASKS[index].isCompleted = true;
  AddTask(
    TASKS.filter(el => !el.isCompleted),
    'output'
  );
  AddTask(
    TASKS.filter(el => el.isCompleted),
    'doneTasks'
  );
};

const handleDeleteTask = index => {
  TASKS.splice(index, 1);
  AddTask(TASKS, 'output');
};
