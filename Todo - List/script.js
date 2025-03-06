// script.js

// Select elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

// Load tasks from local storage
window.onload = function() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => addTaskToDOM(task));
};

// Add task event
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        addTaskToDOM(taskText);
        saveTaskToLocalStorage(taskText);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
});

// Add task to DOM
function addTaskToDOM(taskText) {
    const li = document.createElement('li');
    li.classList.add('task-item');

    const span = document.createElement('span');
    span.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'X';

    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
        removeTaskFromLocalStorage(taskText);
    });

    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
}

// Save task to local storage
function saveTaskToLocalStorage(task) {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(savedTasks));
}

// Remove task from local storage
function removeTaskFromLocalStorage(task) {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = savedTasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}
