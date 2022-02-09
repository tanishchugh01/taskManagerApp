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
    // returned only last task but is stored in taskOperations.tasks

    printTask(task);
    showCount();
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
    
    var oper=tr.insertCell(cellNumber);
    
    oper.appendChild(createIcon('trash'));
    oper.appendChild(createIcon('pen-to-square'));
}

function createIcon(name)
{
    let icon=document.createElement('i');
    
    icon.className=`fa-solid fa-${name}`;
    return icon;
}

function  showCount()
{
    document.querySelector('#totalRec').innerText=taskOperations.tasks.length;
    document.querySelector('#markRec').innerText=0;
    document.querySelector('#unmarkRec').innerText=0;
}

console.log("running");
