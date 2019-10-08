let todo = [];

function addTodoList() {
  const input = document.getElementById("thingstodo").value;
  const item = { description: input, isDone: false };
  todo.push(item);
  document.getElementById("thingstodo").value = "";
  renderTodos(todo);
}

function renderTodos(arr) {
  let status;
  const html = arr
    .map((item, i) => {
      if (item.isDone === true) {
        // status = "mark undone";
      } else if (item.isDone === false) {
        // status = "mark done";
      }
      console.log(item);
      return `<li class="list-group-item list-group-item-action list-group-item-info ${
        item.isDone ? "is-done" : ""
      }"><span class="px-5" onclick="toggleDone(${i})">${
        item.description
      }</span><span onclick="remove(${i})"><i class="far fa-trash-alt"></i></span></li>`;
    })
    .join("");
  document.getElementById("result").innerHTML = html;
}

function remove(index) {
  todo.splice(index, 1);
  renderTodos(todo);
}

function toggleDone(index) {
  let status = todo[index].isDone;
  todo[index].isDone = !status;

  renderTodos(todo);
}

function removeAll() {
  todo = [];
  renderTodos(todo);
}

function filterStatus(status) {
  let filterList;
  if (status === "done") {
    filterList = todo.filter(todo => todo.isDone);
  } else if (status === "undone") {
    filterList = todo.filter(todo => !todo.isDone);
  } else {
    filterList = todo;
  }
  renderTodos(filterList);
}
