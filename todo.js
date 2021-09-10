const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input");

function deletTodo(event) {
  console.log(event.target.parentElement);
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "🤏";
  button.addEventListener("click", deletTodo);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo;
  todoList.appendChild(li);
}

function onSubmitForm(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  paintTodo(newTodo);
}

document.querySelector("#todo-form").addEventListener("submit", onSubmitForm);
