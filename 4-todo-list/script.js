const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addTodoBtn.addEventListener("click", () => {
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    const listItem = document.createElement("li");
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    listItem.textContent = todoText;
    todoList.appendChild(listItem);
    removeBtn.textContent = "Remove";
    listItem.appendChild(removeBtn);

    todoInput.value = "";

    removeBtn.addEventListener("click", () => {
      todoList.removeChild(listItem);
    });
  }
});
