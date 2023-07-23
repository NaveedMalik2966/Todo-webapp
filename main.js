const arr = [];
const doneTasks = [];

function Addtask(tasks, targetElement) {
  const outputDiv = document.getElementById(targetElement);
  outputDiv.innerHTML = ""; // Clear the existing content before rendering

  tasks.forEach((task, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.textContent = task.string;

    // Create the "DONE" button and add an event listener to move the task to "DONE TASKS"
    const doneButton = document.createElement("button");
    doneButton.textContent = "DONE";
    doneButton.addEventListener("click", () => {
      task.isCompleted = true;
      tasks.splice(index, 1);
      doneTasks.push(task);
      Addtask(arr, "output");
      Addtask(doneTasks, "doneTasks");
    });

    // Create the "DELETE" button and add an event listener to remove the task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "DELETE";
    deleteButton.addEventListener("click", () => {
      tasks.splice(index, 1);
      Addtask(arr, "output");
    });

    taskDiv.appendChild(doneButton);
    taskDiv.appendChild(deleteButton);
    outputDiv.appendChild(taskDiv);
  });
}

function Display() {
  const inputElement = document.getElementById('input');
  const inputString = inputElement.value.trim();
  
  if (inputString !== "") {
    const object = {
      string: inputString,
      isCompleted: false,
    }
    arr.push(object);
    inputElement.value = "";
    Addtask(arr, "output");
  }
}

const addButton = document.getElementById("Add");
addButton.addEventListener("click", Display);



// let stringStorage = {
//   strings: [],
// };

// function displayText() {
//   const inputElement = document.getElementById("input");
//   const inputString = inputElement.value.trim();

//   if (inputString !== "") {
//     const entry = {
//       string: inputString,
//       isCompleted: false,
//     };
//     stringStorage.strings.push(entry);
//     inputElement.value = "";
//     displayAllTasks();
//   }
// }

// function toggleComplete(index) {
//   if (index >= 0 && index < stringStorage.strings.length) {
//     stringStorage.strings[index].isCompleted =
//       !stringStorage.strings[index].isCompleted;
//     displayAllTasks();
//   }
// }

// function deleteTask(index) {
//   if (index >= 0 && index < stringStorage.strings.length) {
//     stringStorage.strings.splice(index, 1);
//     displayAllTasks();
//   }
// }

// function displayAllTasks(output) {
//   const outputElement = document.getElementById("output");
//   const doneTasksElement = document.getElementById("doneTasks");
//   outputElement.innerHTML = "";
//   doneTasksElement.innerHTML = "";

//   if (stringStorage.strings.length > 0) {
//     stringStorage.strings.forEach((entry, index) => {
//       const div = document.createElement("div");
//       const ul = document.createElement("ul");

//       const li1 = document.createElement("li");
//       li1.textContent = entry.string;

//       const completeButton = document.createElement("div");
//       completeButton.textContent = "Complete";
//       completeButton.classList.add("button-box", "complete-button");
//       completeButton.addEventListener("click", () => toggleComplete(index));

//       const deleteButton = document.createElement("div");
//       deleteButton.textContent = "Delete";
//       deleteButton.classList.add("button-box", "delete-button");
//       deleteButton.addEventListener("click", () => deleteTask(index));

//       ul.appendChild(li1);
//       div.appendChild(completeButton);
//       div.appendChild(deleteButton);

//       if (entry.isCompleted) {
//         doneTasksElement.appendChild(div);
//       } else {
//         const checkbox = document.createElement("input");
//         checkbox.type = "checkbox";
//         checkbox.checked = entry.isCompleted;
//         checkbox.addEventListener("click", () => toggleComplete(index));
//         div.appendChild(checkbox);
//         outputElement.appendChild(div);
//       }
//     });
//   } else {
//     outputElement.textContent = "No tasks added yet.";
//   }
// }

// const addButton = document.getElementById("Add");
// addButton.addEventListener("click", displayText);

// // Display existing tasks on page load
// displayAllTasks(output);
