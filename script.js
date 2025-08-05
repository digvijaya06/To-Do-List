// Get elements
const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add task event
addBtn.addEventListener('click', addTask);

// Add task on Enter key
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') addTask();
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    const li = document.createElement('li');
    li.className = 'task-item';
    li.textContent = taskText;

    // Create buttons
    const btnContainer = document.createElement('div');
    btnContainer.className = 'task-buttons';

    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = '✔';
    completeBtn.className = 'complete';
    completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '🗑';
    deleteBtn.className = 'delete';
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    // Append buttons
    btnContainer.appendChild(completeBtn);
    btnContainer.appendChild(deleteBtn);
    li.appendChild(btnContainer);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
}
