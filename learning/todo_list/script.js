const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.classList.add("todo-item");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("todo-checkbox");

  const span = document.createElement("span");
  span.textContent = text;
  span.classList.add("todo-text");

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-button");
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed", checkbox.checked);
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = "";
});
