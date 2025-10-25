const buttons = document.querySelectorAll('section:nth-of-type(3) button');
const addButton = document.getElementById('add-task');

const workInput = document.getElementById('work-time');
const breakInput = document.getElementById('break-time');
const taskInput = document.getElementById('new-task');
const timer = document.getElementById('timer');

// Add a click event to each button
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(`${btn.id} clicked!`);
    });
});

let workDuration = parseInt(workInput.value) || 25 * 60; // in seconds
let breakDuration = parseInt(breakInput.value) || 5 * 60; // in seconds
let timeRemaining = workDuration;
let isRunning = false;
let pomodoroCount = 0;

const taskList = document.getElementById('task-list');

// take the text from the task input and append it to the task list
addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = ''; // clear the input
    }
});
