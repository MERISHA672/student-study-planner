function addTask() {
    const taskInput = document.getElementById("taskInput");
    const subjectInput = document.getElementById("subjectInput");
    const taskList = document.getElementById("taskList");

    const task = taskInput.value.trim();
    const subject = subjectInput.value;

    if (task === "" || subject === "") {
        alert("Please enter a task and choose a subject.");
        return;
    }

    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    taskDiv.innerHTML = `
        <div>
            <h3>${task}</h3>
            <p>Subject: ${subject}</p>
        </div>

        <div>
            <button onclick="completeTask(this)">Done</button>
            <button class="delete-btn" onclick="deleteTask(this)">
                Delete
            </button>
        </div>
    `;

    taskList.appendChild(taskDiv);

    taskInput.value = "";
    subjectInput.value = "";
}

function completeTask(button) {
    const task = button.parentElement.parentElement;
    task.classList.toggle("completed");
}

function deleteTask(button) {
    const task = button.parentElement.parentElement;
    task.remove();
}
