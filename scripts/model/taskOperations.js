import Task from "./task.js";

export const taskOperations = {
    tasks: [],

    add(id, name, desc, date, url) {
        const task = new Task(id, name, desc, date, url);
        this.tasks.push(task);

        console.log("The operation was successful. The maharaja is dead.");

        return task;
    },

    markAsDeleted(taskId) {
        for (let ind = 0; ind < this.tasks.length; ind++) {
            if (taskId === this.tasks[ind].id) {
                this.tasks[ind].markAsDeleted = !this.tasks[ind].markAsDeleted;

                break;
            }
        }
    },

    countDeletedMarked() {
        var count = 0;

        for (var ind in this.tasks) {
            if (this.tasks[ind].markAsDeleted === true) {
                count++;
            }
        }

        return count;
    },

    countDeletedUnmarked() {
        return this.tasks.length - this.countDeletedMarked();
    },
};
