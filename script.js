const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

let tasks = [];

// Add Task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const task = {
    id: Date.now(),
    text: taskText,
    completed: false
  };

  tasks.push(task);
  taskInput.value = "";

  renderTasks();
}

// Render Tasks
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");

    if (task.completed) {
      li.classList.add("completed");
    }

    li.innerHTML = `
      <span>${task.text}</span>

      <div class="task-buttons">
        <button class="done-btn" onclick="toggleTask(${task.id})">
          ${task.completed ? "Undo" : "Done"}
        </button>

        <button class="delete-btn" onclick="deleteTask(${task.id})">
          Delete
        </button>
      </div>
    `;

    taskList.appendChild(li);
  });

  updateStats();
}

// Mark Task as Done
function toggleTask(id) {
  tasks = tasks.map(task => {
    if (task.id === id) {
      return {
        ...task,
        completed: !task.completed
      };
    }
    return task;
  });

  renderTasks();
}

// Delete Task
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

// Update Statistics
function updateStats() {
  totalTasks.textContent = `Total Tasks: ${tasks.length}`;

  const completedCount = tasks.filter(task => task.completed).length;

  completedTasks.textContent = `Completed Tasks: ${completedCount}`;
}

// Button Click Event
addBtn.addEventListener("click", addTask);

// Enter Key Support
taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});