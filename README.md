# Veda Technology – Task 16: Simple To-Do List

## Project Overview

The Simple To-Do List is a responsive web application developed using HTML, CSS, and JavaScript as part of the Veda Technology Web Development Internship.

It allows users to add tasks, view their task list, and delete individual tasks. Tasks are stored in a JavaScript array and are not saved after the page is refreshed.

## Features

- Add new tasks using an input field.
- Display tasks dynamically from a JavaScript array.
- Delete individual tasks.
- Clear all tasks.
- Display the current number of tasks.
- Show messages when tasks are added or deleted.
- Responsive design for desktop and mobile devices.
- Event delegation for handling delete button clicks.

## Technologies Used

- HTML5 – Page structure
- CSS3 – Styling and responsive layout
- JavaScript – Array manipulation, DOM rendering, and event handling

## Project Structure

```text
veda-task-16-todo-list/
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    └── script.js
```

## How to Run

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` using the Live Server extension.
4. Enter a task and click **Add**.
5. Click **Delete** to remove an individual task.
6. Click **Clear All Tasks** to remove all tasks.

## How It Works

1. Tasks are stored in a JavaScript array.
2. The application renders the array as a list of HTML elements.
3. Event listeners handle task submission and deletion.
4. Event delegation handles clicks on delete buttons.
5. The task count updates whenever the list changes.

**Note:** This is an in-memory application. Tasks disappear when the browser page is refreshed.

## Learning Outcomes

- JavaScript array manipulation.
- DOM manipulation and rendering.
- Event listeners and event delegation.
- Form handling and input validation.
- Responsive web design.
- Separating HTML, CSS, and JavaScript files.

## Internship Details

- **Organization:** Veda Technology
- **Task Number:** 16
- **Task Name:** Simple To-Do List (In-Memory)
- **Domain:** Web Development

## Author

Mullapati Nagalaxmi

## License

Developed for educational and internship purposes.
