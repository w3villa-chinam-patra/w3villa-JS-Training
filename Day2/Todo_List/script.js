const addButton = document.querySelector(".addButton");
const inputField = addButton.previousElementSibling;
const taskContainer = document.querySelector(".task-container");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const createTask = (task) => {
  const div = document.createElement("div");
  div.id = task.id;
  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = task.isCompleted;
  input.addEventListener("change", (event) => {
    tasks = tasks.map((task) => {
      if (task.id === div.id) {
        task.isCompleted = event.target.checked;
        return task;
      }
      return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });
  const span = document.createElement("span");
  span.innerText = task.task;
  const button = document.createElement("button");
  button.innerText = "Delete";
  button.addEventListener("click", () => {
    div.innerHTML = "";
    tasks = tasks.filter((task) => task.id !== div.id);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });
  div.append(input, span, button);
  return div;
};

const renderTasks = () => {
  tasks.map((task) => {
    taskContainer.append(createTask(task));
  });
};
renderTasks();

addButton.addEventListener("click", () => {
  if (inputField.value.trim() === "") {
    alert("Please enter some task");
    return;
  }
  const task = {
    id: crypto.randomUUID(),
    task: inputField.value,
    isCompleted: false,
  };
  tasks.push(task);
  taskContainer.append(createTask(task));
  localStorage.setItem("tasks", JSON.stringify(tasks));
  inputField.value = "";
});
