const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
let tasks = [];
let indice = 0;
addTaskButton.addEventListener("click", function () {
    if (taskInput.value.trim().length === 0) return;
    const newTask = {
        id: Date.now(),
        text: taskInput.value.trim(),
        done: false
    };
    tasks.push(newTask);
    console.log(newTask);
    renderTask(tasks);

    taskInput.value = "";
    taskInput.focus();
});


function renderTask(elementos) {
    taskList.innerHTML = "";

    for (let i = 0; i < elementos.length; i++) {
        const taskItem = document.createElement("li");
        const deleteItem = document.createElement("button");

        taskItem.textContent = elementos[i].text;
        taskItem.className = "mt-1";

        deleteItem.textContent = "Borrar";
        deleteItem.className = "px-8 py-1 bg-[#ff5050] rounded-md cursor-pointer ml-4";

        deleteItem.addEventListener("click", function () {
            tasks = tasks.filter(task => task.id !== elementos[i].id);
            renderTask(tasks);
        });

        taskItem.appendChild(deleteItem);
        taskList.appendChild(taskItem);
    }

    taskInput.value = "";
    taskInput.focus();
}

