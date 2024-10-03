document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    const addTaskBtn = document.getElementById('add-task-btn');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    let isDarkMode = false;

    // Toggle Dark Mode
    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        isDarkMode = !isDarkMode;
        themeToggleBtn.innerText = isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode';
    });

    // Add Task
    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value;
        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        // Create new task element
        const newTask = document.createElement('li');
        newTask.innerHTML = `
            <span class="task-text">${taskText}</span>
            <div>
                <button class="edit-btn">Edit</button>
                <button class="update-btn">Update</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        // Append to task list
        taskList.appendChild(newTask);

        // Clear input
        taskInput.value = "";

        const taskTextElement = newTask.querySelector('.task-text');
        const editBtn = newTask.querySelector('.edit-btn');
        const updateBtn = newTask.querySelector('.update-btn');
        const deleteBtn = newTask.querySelector('.delete-btn');

        // Edit Task functionality
        editBtn.addEventListener('click', function() {
            taskInput.value = taskTextElement.textContent;
            updateBtn.style.display = 'inline-block';
            editBtn.style.display = 'none';
        });

        // Update Task functionality
        updateBtn.addEventListener('click', function() {
            const updatedText = taskInput.value;
            if (updatedText !== "") {
                taskTextElement.textContent = updatedText;
                taskInput.value = "";
            }
            updateBtn.style.display = 'none';
            editBtn.style.display = 'inline-block';
        });

        // Delete Task functionality
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(newTask);
        });
    });
});
