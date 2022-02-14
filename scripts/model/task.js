function Task(id, name, description, date, url) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.date = date;
    this.url = url;
    this.markAsDeleted = false;
}

export default Task;
