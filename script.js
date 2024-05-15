let tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const priorityInput = document.getElementById("priorityInput");
  const dateInput = document.getElementById("dateInput");
  const descriptionInput = document.getElementById("descriptionInput");
  
  const taskText = taskInput.value.trim();
  const priority = priorityInput.value.trim();
  const date = dateInput.value;
  const description = descriptionInput.value.trim();
  
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }
  
  tasks.push({ text: taskText, priority: priority, date: date, description: description, completed: false });
  displayTasks();
  
  taskInput.value = "";
  priorityInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
}

function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "task";
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleCompleted(index));
    li.appendChild(checkbox);
    
    const span = document.createElement("span");
    span.textContent = task.text;
    if (task.completed) {
      span.className = "completed";
    }
    li.appendChild(span);
    li.appendChild(document.createElement("br")); // Add a line break
    
    const prioritySpan = document.createElement("span");
    prioritySpan.textContent = "Priority: " + task.priority;
    li.appendChild(prioritySpan);
    li.appendChild(document.createElement("br")); // Add a line break
    
    const dateSpan = document.createElement("span");
    dateSpan.textContent = "Date: " + task.date;
    li.appendChild(dateSpan);
    li.appendChild(document.createElement("br")); // Add a line break
    
    const descriptionSpan = document.createElement("span");
    descriptionSpan.textContent = "Description: " + task.description;
    li.appendChild(descriptionSpan);
    li.appendChild(document.createElement("br")); // Add a line break
    
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => editTask(index));
    li.appendChild(editButton);
    li.appendChild(document.createElement("br")); // Add a line break
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteTask(index));
    li.appendChild(deleteButton);
    li.appendChild(document.createElement("br")); // Add a line break
    
    taskList.appendChild(li);
  });
}

function toggleCompleted(index) {
  tasks[index].completed = !tasks[index].completed;
  displayTasks();
}

function editTask(index) {
  const task = tasks[index];
  const newText = prompt("Edit task:", task.text);
  if (newText !== null) {
    task.text = newText.trim();
    const newPriority = prompt("Edit priority:", task.priority);
    task.priority = newPriority.trim();
    const newDate = prompt("Edit date:", task.date);
    task.date = newDate.trim();
    const newDescription = prompt("Edit description:", task.description);
    task.description = newDescription.trim();
    displayTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

displayTasks();
