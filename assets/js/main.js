const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
let tasks = [];
addTaskButton.addEventListener("click", function () {
    if (taskInput.value.trim().length === 0) return;
    const newTask = taskInput.value.trim();
    tasks.push(newTask);

    renderTask(tasks);

    taskInput.value = "";
    taskInput.focus();
});


function renderTask(elementos) {
    taskList.innerHTML = ""; // limpiar lista

    for (let i = 0; i < elementos.length; i++) {
        const taskItem = document.createElement("li");
        taskItem.textContent = elementos[i].trim();
        taskList.appendChild(taskItem);
    }
}

