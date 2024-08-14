document.addEventListener('DOMContentLoaded', function() {
    // Show user's name
    const userName = localStorage.getItem('userName');
    const greetingElement = document.getElementById('greeting');

    if (greetingElement) {
        greetingElement.textContent = userName ? userName : 'Guest';
    }

    const inputBox = document.querySelector('#input-box');
    const addTaskBtn = document.querySelector('#add-task-button');
    const taskList = document.querySelector('#task-list');

    function addTask() {
        const taskText = inputBox.value.trim();

        if (taskText === '') {
            alert('You must write something!');
        } else {
            const li = document.createElement('li');
            li.textContent = taskText;
        }
    }

    function saveTasks() {
        localStorage.setItem('tasks', taskList.innerHTML);
    }

    function loadTasks() {
        taskList.innerHTML = localStorage.getItem('tasks') || '';
    }

    addTaskBtn.addEventListener('click', addTask);
    loadTasks();
});
