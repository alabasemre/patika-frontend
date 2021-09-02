let btnAdd = document.querySelector("#btnAdd");
let todoList = document.querySelector("#todoList");
let todoText = document.querySelector("#todoText");
let toast = document.querySelector(".toast");
let storage = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

function create() {
  storage.forEach((element) => {
    createTodoItem(element);
  });
}

function add() {
  if (todoText.value.trim() != "") {
    createTodoItem(todoText.value);
    storage.push(todoText.value);
    localStorage.setItem("items", JSON.stringify(storage));
    todoText.value = "";
  } else {
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function (toastEl) {
      return new bootstrap.Toast(toastEl, {
        animation: true,
        autohide: true,
        delay: 1000,
      })
    });
    toastList.forEach(toast => toast.show());
  }
}

function deleteTodo(e) {
  let parent = e.target.parentElement;
  let index = Array.from(parent.parentNode.children).indexOf(parent);
  storage.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(storage));
  e.target.parentElement.remove();
}

function done(e) {
  let element = e.target;

  if (element.classList.contains("done")) {
    element.classList.remove("done");
  } else {
    element.classList.add("done");
  }
}

function createTodoItem(text) {
  let create = document.createElement("li");
  let btnCreate = document.createElement("button");
  create.textContent = text;
  create.className = "list-group-item d-flex justify-content-between align-items-center";
  create.addEventListener("click", done);

  btnCreate.className = "btn bg-primary text-light btn-remove";
  btnCreate.textContent = "X";

  btnCreate.addEventListener("click", deleteTodo);

  create.appendChild(btnCreate);
  todoList.appendChild(create);
}


create();
btnAdd.addEventListener("click", add);