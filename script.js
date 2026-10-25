
const todoForm = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");
const emptyMessage = document.getElementById("empty-message");
const statusMessage = document.getElementById("status-message");
const clearButton = document.getElementById("clear-btn");

// In-memory array: tasks are not saved after refreshing.
let tasks = [];
let nextId = 1;

// Render the task list from the array.
function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function (task) {
        const li = document.createElement("li");
        li.className = "task-item";
        li.dataset.id = task.id;

        const text = document.createElement("span");
        text.className = "task-text";
        text.textContent = task.text;

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "delete-btn";
        deleteButton.dataset.action = "delete";
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute(
            "aria-label",
            `Delete task: ${task.text}`
        );

        li.append(text, deleteButton);
        taskList.appendChild(li);
    });

    const count = tasks.length;
    taskCount.textContent = `${count} ${count === 1 ? "task" : "tasks"}`;
    emptyMessage.hidden = count !== 0;
}

// Add a new task.
todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = taskInput.value.trim();

    if (text === "") {
        statusMessage.textContent = "Please enter a task.";
        taskInput.focus();
        return;
    }

    tasks.push({
        id: nextId++,
        text: text
    });

    renderTasks();
    statusMessage.textContent = "Task added successfully!";
    todoForm.reset();
    taskInput.focus();
});

// Event delegation: handle clicks on delete buttons.
taskList.addEventListener("click", function (event) {
    const deleteButton = event.target.closest('[data-action="delete"]');

    if (!deleteButton || !taskList.contains(deleteButton)) {
        return;
    }

    const item = deleteButton.closest(".task-item");
    const id = Number(item.dataset.id);
    const task = tasks.find(function (item) {
        return item.id === id;
    });

    tasks = tasks.filter(function (item) {
        return item.id !== id;
    });

    renderTasks();
    statusMessage.textContent = task
        ? `"${task.text}" deleted.`
        : "Task deleted.";
});

// Remove all tasks.
clearButton.addEventListener("click", function () {
    if (tasks.length === 0) {
        statusMessage.textContent = "There are no tasks to clear.";
        return;
    }

    tasks = [];
    renderTasks();
    statusMessage.textContent = "All tasks cleared.";
});

// Show the initial empty state.
renderTasks();
