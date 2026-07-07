const state = {
  taskName: "",
  tasks: [
    {
      id: "todo-0",
      name: "Learn some frameworks!",
    },
    {
      id: "todo-0",
      name: "Dream!",
    },
  ],
};

const divEl = document.querySelector("div");

function buildTodoList() {
  const ulEl = document.createElement("ul");
  state.tasks.forEach((task) => {
    const liEl = document.createElement("li");
    liEl.textContent = task.name;
    ulEl.appendChild(liEl);
  });
  divEl.appendChild(ulEl);
}

buildTodoList();
