import Task from "./task.js";

export const taskOperations = {
  tasks: [],

  add(id, name, desc, date, url) {
    const task = new Task(id, name, desc, date, url);
    this.tasks.push(task);

    console.log("The (add) operation was successful. The maharaja is dead.");

    return task;
  },

  markAsDeleted(taskId) {
    // for (let ind = 0; ind < this.tasks.length; ind++) {
    //     if (taskId === this.tasks[ind].id) {
    //         this.tasks[ind].markAsDeleted = !this.tasks[ind].markAsDeleted;

    //         break;
    //     }
    // }
    // deletedTask.markAsDeleted=!deletedTask.markAsDeleted;

    var deletedTask = this.tasks.find((task) => task.id === taskId);

    deletedTask.toggle();
  },

  countDeletedMarked() {
    // var count = 0;

    // for (var ind in this.tasks) {
    //     if (this.tasks[ind].markAsDeleted === true) {
    //         count++;
    //     }
    // }

    // return count;

    return this.tasks.filter((task) => task.markAsDeleted).length;
  },

  countDeletedUnmarked() {
    return this.tasks.length - this.countDeletedMarked();
  },

  deleteAllMarked() {
    this.tasks = this.tasks.filter((task) => !task.markAsDeleted);

    return this.tasks;
  },

  clearAll() {
    this.tasks = [];
  },
};
