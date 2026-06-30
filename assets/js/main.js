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
    renderTask(tasks);
    upgradeCounter();

    taskInput.value = "";
    taskInput.focus();
});

function renderTask(elementos) {
    taskList.innerHTML = "";

    for (let i = 0; i < elementos.length; i++) {
        const taskItem = document.createElement("li");
        const deleteItem = document.createElement("button");

        taskItem.textContent = elementos[i].text;
        taskItem.classList.add("mt-1");
        if (elementos[i].done) {
            taskItem.classList.add("line-through");
            taskItem.classList.add("text-neutral-400");
        }

        deleteItem.textContent = "Borrar";
        deleteItem.className = "text-black px-8 py-1 bg-[#ff5050] rounded-md cursor-pointer ml-4";

        deleteItem.addEventListener("click", function () {
            tasks = tasks.filter(task => task.id !== elementos[i].id);
            renderTask(tasks);
            upgradeCounter();
        });

        // cambiamos el estado a done
        taskItem.addEventListener("click", function () {

            tasks = tasks.map(task =>
                task.id === elementos[i].id
                    ? { ...task, done: !task.done }
                    : task
            );

            renderTask(tasks);
            upgradeCounter();
        });

        taskItem.appendChild(deleteItem);
        taskList.appendChild(taskItem);
    }
    taskInput.value = "";
    taskInput.focus();
}

const taskCounter = document.getElementById("taskCounter");

function upgradeCounter() {
    const total = tasks.length;
    const pending = tasks.filter(task => !task.done).length;

    if (pending === 0) {
        taskCounter.textContent = "No hay tareas pendientes";
    } else {
        taskCounter.textContent = `${pending} tareas pendientes. (${total} total)`;
    }
}