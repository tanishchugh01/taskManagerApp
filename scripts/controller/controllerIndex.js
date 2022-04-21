//import Task  from "../model/task.js";
import { taskOperations } from "../model/taskOperations.js";

window.addEventListener("load", myMain);

function myMain() {
  eventListeners();
  showCount();
}

function eventListeners() {
  document.querySelector("#add").addEventListener("click", addTask);
  document
    .querySelector("#delete")
    .addEventListener("click", deleteAllMarkedTasks);
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
    if (key === "markAsDeleted" || typeof task[key] === "function") {
      continue;
    }
    var th = tr.insertCell(cellNumber);

    th.innerHTML = task[key];

    cellNumber++;
  }

  var oper = tr.insertCell(cellNumber);

  oper.appendChild(createIcon(task.id, "trash", toggleDelete));
  oper.appendChild(createIcon(task.id, "pen-to-square", editTask));
}

function createIcon(id, className, func) {
  let icon = document.createElement("i");

  icon.className = `fa-solid fa-${className} me-2 hand`;
  icon.setAttribute("task-id", id);
  icon.setAttribute("role", 'button');
  icon.addEventListener("click", func);

  return icon;
}

function showCount() {
  document.querySelector("#totalRec").innerText = taskOperations.tasks.length;

  updateMarkedUnmarked();
}

function toggleDelete() {
  var taskId = this.getAttribute("task-id");

  var icon = this;
  var row = icon.parentNode.parentNode;

  row.classList.toggle("alert-danger");

  taskOperations.markAsDeleted(taskId);

  updateMarkedUnmarked();
}

function editTask() {
  var taskId = this.getAttribute("task-id");

  console.log(`task ${taskId} is edited`);
}

function updateMarkedUnmarked() {
  var marked = document.querySelector("#markRec");
  var unmarked = document.querySelector("#unmarkRec");

  var markedCount = taskOperations.countDeletedMarked();
  marked.innerText = markedCount;
  unmarked.innerText = taskOperations.countDeletedUnmarked();

  markedCount > 0 ? enableDeleteButton() : disableDeleteButton();
}

function deleteAllMarkedTasks() {
  let tasks = taskOperations.deleteAllMarked();

  document.querySelector("#taskBody").innerHTML = "";
  // tasks.forEach(task=>printTask(task));
  tasks.forEach(printTask);

  showCount();
}

function clearFields() {}

function disableDeleteButton() {
  document.querySelector("#delete").setAttribute("disabled", "");
}

function enableDeleteButton() {
  document.querySelector("#delete").removeAttribute("disabled");
}
