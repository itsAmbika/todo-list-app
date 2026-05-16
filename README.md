# 📝 To-Do List Web Application

A simple, responsive, and interactive To-Do List web application built using **HTML**, **CSS**, and **JavaScript**.  
The application allows users to efficiently manage daily tasks by adding, completing, and deleting tasks in real time.

---

# 📌 Project Overview

This project was developed as a lightweight task management application with focus on:

- Simplicity
- Clean UI/UX
- Practical implementation
- Interactive functionality
- Responsive design

The application demonstrates core frontend development concepts including:

- DOM Manipulation
- Event Handling
- Dynamic Rendering
- State Management using JavaScript arrays
- Responsive Styling using CSS

---

# 🚀 Features

## ✅ Add Tasks
Users can add tasks dynamically through the input field.

## ✅ Mark Tasks as Completed
Tasks can be marked as completed using the **Done** button.

## ✅ Undo Completed Tasks
Completed tasks can be reverted back using the **Undo** button.

## ✅ Delete Tasks
Tasks can be permanently removed from the list.

## ✅ Real-Time Statistics
The application automatically updates:
- Total tasks
- Completed tasks

## ✅ Responsive UI
The application is centered and responsive across different screen sizes.

## ✅ Enter Key Support
Users can press **Enter** to add tasks quickly.

---

# 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML | Structure of the application |
| CSS | Styling and responsiveness |
| JavaScript | Functionality and interactivity |

---

# 📂 Project Structure

```text
todo-list-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# ⚙️ How to Run the Project

## Step 1
Download or clone the repository.

```bash
git clone https://github.com/your-username/todo-list-app.git
```

## Step 2
Open the project folder.

## Step 3
Run the application by opening:

```text
index.html
```

in any browser.

---

# 💡 Problem-Solving Approach

The problem was broken down into smaller functional components to ensure modularity and maintainability.

## Step-by-Step Approach

### 1. User Input Handling
Created an input field and button to capture tasks from users.

### 2. Data Representation
Tasks are stored using JavaScript objects inside an array.

Example:

```javascript
{
    id: Date.now(),
    text: "Study JavaScript",
    completed: false
}
```

### 3. Dynamic Rendering
Instead of hardcoding tasks, JavaScript dynamically creates task elements using DOM manipulation.

### 4. State Management
The UI updates automatically whenever:
- a task is added
- marked completed
- deleted

### 5. Statistics Tracking
The application continuously tracks:
- total tasks
- completed tasks

using array operations.

---

## Design Principles Followed

- Clean separation of concerns
- HTML for structure
- CSS for presentation
- JavaScript for logic

## Readable Code Structure

Functions were divided based on responsibility:

| Function | Purpose |
|---|---|
| addTask() | Adds a new task |
| renderTasks() | Displays all tasks |
| toggleTask() | Marks tasks complete/incomplete |
| deleteTask() | Removes tasks |
| updateStats() | Updates counters |

This makes the code:
- easy to debug
- scalable
- beginner friendly

---

# 📸 Application Screenshots

## Empty State

![Empty State](./assets/Screenshot%202026-05-16%20114907.png)

---

## Adding a Task

![Adding Task](./assets/Screenshot%202026-05-16%20114932.png)

---

## Completed Task

![Completed Task](./assets/Screenshot%202026-05-16%20114953.png)

---

## Delete Tasks

![Multiple Tasks](./assets/Screenshot%202026-05-16%20115031.png)

---

# 🔍 Key JavaScript Concepts Used

## DOM Manipulation

```javascript
document.createElement()
appendChild()
innerHTML
```

## Event Listeners

```javascript
addEventListener()
```

## Array Methods

```javascript
map()
filter()
forEach()
```

## Conditional Rendering

```javascript
if(task.completed)
```
# 🔮 Future Improvements

Possible future enhancements include:

- Local Storage support
- Dark Mode
- Task deadlines
- Task categories
- Drag-and-drop sorting
- Mobile optimization
- Search & filter tasks

---

# 🧪 Testing Performed

The following cases were tested:

| Test Case | Status |
|---|---|
| Empty input validation | ✅ Passed |
| Add task | ✅ Passed |
| Complete task | ✅ Passed |
| Undo task | ✅ Passed |
| Delete task | ✅ Passed |
| Statistics update | ✅ Passed |
| Multiple tasks handling | ✅ Passed |

---

# 📚 Learning Outcomes

Through this project, the following concepts were strengthened:

- Frontend architecture
- DOM manipulation
- Event-driven programming
- Dynamic UI updates
- Responsive CSS design
- JavaScript array operations

---

# 👨‍💻 Author

**Ambika Soni**  
Third Year Undergraduate  
Indian Institute of Technology Bombay (IIT Bombay)

