const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";

let todos = [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deletTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "🤏";
  button.addEventListener("click", deletTodo);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo.text;
  todoList.appendChild(li);
}

function onSubmitForm(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObject = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObject);
  paintTodo(newTodoObject);
  saveTodos();
}

document.querySelector("#todo-form").addEventListener("submit", onSubmitForm);

const savedTodods = localStorage.getItem(TODOS_KEY);

if (saveTodos !== null) {
  const parsedTodos = JSON.parse(savedTodods);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
