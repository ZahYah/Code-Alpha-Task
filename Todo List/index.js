let todoList = JSON.parse(localStorage.getItem("todoHTML")) || [
  { name: "Watch dishes", dueDate: "2022:2:19" },
  { name: "Learn Programming", dueDate: "2023:1:17" }
];

let editIndex = null; // Tracks if we're editing

renderTodoList();

function renderTodoList() {
  let todoListHTML = ``;

  for (let i = 0; i < todoList.length; i++) {
    const { name, dueDate } = todoList[i];
    const html = `
      <input type="checkbox">
      <div>${name}</div>
      <div>${dueDate}</div>
      <div>
        <button onclick="editTodo(${i})">Edit</button>
        <button onclick="deleteTodo(${i})">Delete</button>
      </div>
    `;
    todoListHTML += html;
  }

  document.querySelector(".js-list-output").innerHTML = todoListHTML;
  localStorage.setItem("todoHTML", JSON.stringify(todoList));
}

function addList() {
  const inputName = document.querySelector(".js-input-name");
  const name = inputName.value;

  const date = document.querySelector(".js-date");
  const dueDate = date.value;


    if (editIndex !== null) {
      // Update existing todo
      todoList[editIndex] = { name, dueDate };
      editIndex = null; // Reset edit mode
      document.querySelector(".js-add-btn").textContent = "Add"; // Change button text back
    } else {
      // Add new todo
      todoList.push({ name, dueDate });
    }
    renderTodoList();
  

  inputName.value = ``;
  date.value = ``;
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
}

function editTodo(index) {
  const todo = todoList[index];
  document.querySelector(".js-input-name").value = todo.name;
  document.querySelector(".js-date").value = todo.dueDate;
  editIndex = index;
  document.querySelector(".js-add-btn").textContent = "Update"; // Change button text
}
