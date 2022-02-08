import Task from "./task.js";

export const taskOperations = {
    tasks: [],
    add(id, name, desc, date, url) {
        const task = new Task(id, name, desc, date, url);
        this.tasks.push(task);

        console.log("The operation was successful. The maharaja is dead.");
        return task;
    },
};
