//import Task  from "../model/task.js";
import { taskOperations } from "../model/taskOperations.js";
window.addEventListener("load", myMain);

function myMain() {
    document.querySelector("#add").addEventListener("click", addTask);
}

function addTask() {
    var id = document.querySelector("#id").value;
    var name = document.querySelector("#name").value;
    var desc = document.querySelector("#desc").value;
    var date = document.querySelector("#date").value;
    var url = document.querySelector("#url").value;

    const task = taskOperations.add(id, name, desc, date, url);

    printTask(task);
}

function printTask(task) {
    const tbody = document.querySelector("#taskBody");

    var tr = tbody.insertRow();

    var cellNumber = 0;
    for (var key in task) {
        var th = tr.insertCell(cellNumber);

        th.innerHTML = task[key];

        cellNumber++;
    }
}

console.log("running");
