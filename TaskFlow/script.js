
document.addEventListener("DOMContentLoaded", () => {
    const openTaskButton = document.getElementById("open-task-form");
    const emptyAddButton = document.getElementById("empty-add-task");
    const closeTaskButton = document.getElementById("close-task-form");
    // const cancelTaskButton = document.getElementById("cancel-task");

    const taskDialog = document.getElementById("task-dialog");
    const taskForm = document.getElementById("task-form");
    const taskList = document.getElementById("task-list");
    const emptyState = document.getElementById("empty-state");

    const taskTitle = document.getElementById("task-title");
    const taskDescription = document.getElementById("task-description");
    const taskStartDate = document.getElementById("task-start-date");
    const taskDueDate = document.getElementById("task-due-date");

    const dialogTitle = taskDialog.querySelector(".dialog-header h2");
    const submitButton = taskForm.querySelector('button[type="submit"]');

    const totalCount = document.getElementById("total-count");
    const pendingCount = document.getElementById("pending-count");
    const completedCount = document.getElementById("completed-count");


    const deleteDialog = document.getElementById("delete-dialog");
    const cancelDeleteButton = document.getElementById("cancel-delete");
    const confirmDeleteButton = document.getElementById("confirm-delete");

    let tasks = [];
    let editingTaskId = null;
    let nextTaskId = 1;
    let taskToDeleteId = null;

  
    document.getElementById("current-date").value =
        new Date().toISOString().split("T")[0];

    function formatDate(date) {
        if (!date) return "Not set";

        const [year, month, day] = date.split("-");
        return `${day}-${month}-${year}`;
    }


    function openTaskDialog(task = null) {
        taskForm.reset();
        editingTaskId = task ? task.id : null;

        dialogTitle.textContent = task
            ? "Edit Task"
            : "Create New Task";

        submitButton.textContent = task
            ? "Save Changes"
            : "Create Task";

        if (task) {
            taskTitle.value = task.title;
            taskDescription.value = task.description;
            taskStartDate.value = task.startDate;
            taskDueDate.value = task.dueDate;
        }

        taskDialog.showModal();
        taskTitle.focus();
    }

    openTaskButton.addEventListener("click", () => openTaskDialog());
    emptyAddButton.addEventListener("click", () => openTaskDialog());

    function closeTaskDialog() {
        taskDialog.close();
        taskForm.reset();
        editingTaskId = null;
    }

    closeTaskButton.addEventListener("click", closeTaskDialog);
    // cancelTaskButton.addEventListener("click", closeTaskDialog);


    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const title = taskTitle.value.trim();
        const description = taskDescription.value.trim();
        const startDate = taskStartDate.value;
        const dueDate = taskDueDate.value;

        if (!title || !startDate || !dueDate) {
            alert("Please enter a title and select both dates.");
            return;
        }

        if (dueDate < startDate) {
            alert("Due Date cannot be earlier than Start Date.");
            taskDueDate.focus();
            return;
        }

        if (editingTaskId !== null) {
            
            tasks = tasks.map((task) =>
                task.id === editingTaskId
                    ? {
                        ...task,
                        title,
                        description,
                        startDate,
                        dueDate
                    }
                    : task
            );
        } else {
           
            tasks.push({
                id: nextTaskId++,
                title,
                description,
                startDate,
                dueDate,
                completed: false
            });
        }

        closeTaskDialog();
        renderTasks();
    });

    cancelDeleteButton.addEventListener("click", () => {
        deleteDialog.close();
        taskToDeleteId = null;
    });

   
    confirmDeleteButton.addEventListener("click", () => {
        if (taskToDeleteId === null) return;

        tasks = tasks.filter(
            item => item.id !== taskToDeleteId
        );

        deleteDialog.close();
        taskToDeleteId = null;

        renderTasks();
    });

    function renderTasks() {
        taskList.replaceChildren();

        const completed = tasks.filter(
            task => task.completed
        ).length;

        const pending = tasks.length - completed;

        totalCount.textContent = tasks.length;
        pendingCount.textContent = pending;
        completedCount.textContent = completed;

        emptyState.hidden = tasks.length > 0;

        tasks.forEach((task) => {
            const card = document.createElement("article");
            card.className = "task-card";

            if (task.completed) {
                card.classList.add("completed");
            }

            const taskMain = document.createElement("div");
            taskMain.className = "task-main";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "complete-checkbox";
            checkbox.checked = task.completed;

            checkbox.setAttribute(
                "aria-label",
                `Mark ${task.title} as ${
                    task.completed ? "pending" : "completed"
                }`
            );

            checkbox.addEventListener("change", () => {
                task.completed = checkbox.checked;
                renderTasks();
            });

            
            const content = document.createElement("div");
            content.className = "task-content";

            const heading = document.createElement("h3");
            heading.textContent = task.title;

            const description = document.createElement("p");
            description.className = "task-description";
            description.textContent =
                task.description || "No description added.";

          
            const metadata = document.createElement("div");
            metadata.className = "task-metadata";

            const dates = document.createElement("span");
            dates.textContent =
                `▦ ${formatDate(task.startDate)} ↔ ${formatDate(task.dueDate)}`;

            const status = document.createElement("span");
            status.className = task.completed
                ? "status-badge status-completed"
                : "status-badge status-pending";

            status.textContent = task.completed
                ? "Completed"
                : "Pending";

            metadata.append(dates, status);
            content.append(heading, description, metadata);
            taskMain.append(checkbox, content);

            const actions = document.createElement("div");
            actions.className = "task-actions";

            if (task.completed) {
             
                const undoButton = document.createElement("button");
                undoButton.type = "button";
                undoButton.className = "undo-task";

                const undoIcon = document.createElement("img");
                undoIcon.src = "./images/undo.svg";
                undoIcon.alt = "Undo";

                undoButton.appendChild(undoIcon);
                undoButton.setAttribute(
                    "aria-label",
                    "Undo completion"
                );

                undoButton.addEventListener("click", () => {
                    task.completed = false;
                    renderTasks();
                });

                actions.appendChild(undoButton);
            } else {
          
                const editButton = document.createElement("button");
                editButton.type = "button";
                editButton.textContent = "✎";
                editButton.className = "edit-task";
                editButton.setAttribute("aria-label", "Edit task");

                editButton.addEventListener("click", () => {
                    openTaskDialog(task);
                });

                actions.appendChild(editButton);
            }

            const deleteButton = document.createElement("button");
            deleteButton.type = "button";
            deleteButton.className = "delete-task";
            deleteButton.setAttribute("aria-label", "Delete task");

            const deleteIcon = document.createElement("img");
            deleteIcon.src = "./images/delete.svg";
            deleteIcon.alt = "Delete";

            deleteButton.appendChild(deleteIcon);

           
            deleteButton.addEventListener("click", () => {
                taskToDeleteId = task.id;

                // deleteTaskName.textContent =
                //     `"${task.title}"?`;

                deleteDialog.showModal();
            });

            actions.appendChild(deleteButton);

            card.append(taskMain, actions);
            taskList.appendChild(card);
        });
    }

    taskDialog.addEventListener("click", (event) => {
        if (event.target === taskDialog) {
            closeTaskDialog();
        }
    });

    deleteDialog.addEventListener("click", (event) => {
        if (event.target === deleteDialog) {
            deleteDialog.close();
            taskToDeleteId = null;
        }
    });

    renderTasks();
});
