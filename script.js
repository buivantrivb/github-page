const taskInput = document.getElementById('task-input');
const dueDateInput = document.getElementById('due-date');
const priorityInput = document.getElementById('priority');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

let tasks = []; // Our array to store task objects

// Load Tasks on Page Load
loadTasks(); 

addButton.addEventListener('click', addTask);

function addTask() {
    const task = taskInput.value;
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;

    if (task) {
        const newTask = {
            id: Date.now(),  // Simple unique identifier
            task,
            dueDate,
            priority,
            completed: false
        };

        tasks.push(newTask);
        saveTasks();
        renderTasks();
        clearForm(); 
    } 
}

function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        renderTasks(); 
    }
}

function renderTasks() {
    taskList.innerHTML = ''; // Clear existing tasks

    tasks.forEach(task => {
        const listItem = createTaskItem(task);
        taskList.appendChild(listItem);
    });
}

function createTaskItem(task) {
    const listItem = document.createElement('li');
    listItem.dataset.taskId = task.id;
    listItem.classList.toggle('completed', task.completed); // Add 'completed' class if needed
 
    const label = document.createElement('span');
    label.textContent = task.task;
    listItem.appendChild(label);

    // Add due date, priority, etc. if you want to display them

    const completeButton = document.createElement('button');
    completeButton.textContent = task.completed ? 'Undo' : 'Complete';
    completeButton.addEventListener('click', () => toggleTaskComplete(task.id)); 
    listItem.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(task.id)); 
    listItem.appendChild(deleteButton);

    return listItem;
}

function toggleTaskComplete(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
    }
}

function deleteTask(taskId) {
    tasks = tasks.filter(t => t.id !== taskId);
    saveTasks();
    renderTasks();
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearForm() {
    taskInput.value = '';
    dueDateInput.value = '';
    priorityInput.value = 'low';
}
