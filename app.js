let addBtn = document.getElementById("addBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let pendingCount = document.getElementById("pendingCount");

function updatePendingCount() {
  pendingCount.textContent = "Pending Tasks: " + taskList.children.length;
}

addBtn.addEventListener("click", function () {
  let taskText = taskInput.value.trim();
  if (taskText === "") return;

  let li = document.createElement("li");
  li.textContent = taskText;

  let removeBtn = document.createElement("button");
  removeBtn.textContent = "x";

  removeBtn.addEventListener("click", function () {
    li.remove();
    updatePendingCount();
  });

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = "";
  updatePendingCount();
});


updatePendingCount();
