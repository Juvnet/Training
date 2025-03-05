document.addEventListener("DOMContentLoaded", function () {
    function addTask() {
        let input = document.getElementById("taskInput");
        let dateInput = document.getElementById("taskDate");
        let taskText = input.value.trim();
        let taskDate = dateInput.value.trim();

        if (taskText === "" || taskDate === "") return;

        let li = document.createElement("li");
        li.className = "flex justify-between items-center p-2 bg-white shadow-md rounded-md my-2";

        let span = document.createElement("span");
        span.textContent = `${taskText} - ${taskDate}`;

        let editButton = document.createElement("button");
        editButton.textContent = "Modifier";
        editButton.className = "ml-2 px-2 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-700";
        editButton.onclick = function () {
            let newTask = prompt("Modifier la tâche :", taskText);
            let newDate = prompt("Modifier la date :", taskDate);
            if (newTask !== null && newDate !== null) {
                span.textContent = `${newTask.trim()} - ${newDate.trim()}`;
            }
        };

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Supprimer";
        deleteButton.className = "ml-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-700";
        deleteButton.onclick = function () {
            li.remove();
        };

        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        document.getElementById("taskList").appendChild(li);
        input.value = "";
        dateInput.value = "";
    }

    window.addTask = addTask;
});
