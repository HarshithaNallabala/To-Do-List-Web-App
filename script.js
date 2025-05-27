const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = taskText;

  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const delBtn = document.createElement("button");
  delBtn.className = "delete-btn";
  delBtn.textContent = "Delete";

  delBtn.addEventListener("click", () => {
    li.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    li.style.opacity = "0";
    li.style.transform = "translateX(50px)";
    setTimeout(() => {
        li.remove();
        }, 300);
    });


  li.appendChild(span);
  li.appendChild(delBtn);
  li.classList.add("fade-in");
  taskList.appendChild(li);


  taskInput.value = "";
}
