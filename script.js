document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const datetimeInput = document.getElementById("datetimeInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    const calendarContainer = document.getElementById("calendar");

    // Render Calendar function remains the same

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        const dateTimeText = datetimeInput.value;
        if (taskText !== "" && dateTimeText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${taskText}</strong> - ${new Date(dateTimeText).toLocaleString()}`;
            li.classList.add("fade-in"); // Add fade-in class for animation

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.classList.add("deleteBtn");
            deleteBtn.addEventListener("click", function() {
                li.classList.remove("fade-in");
                li.addEventListener("transitionend", function() {
                    li.remove();
                });
            });

            li.appendChild(deleteBtn);
            taskList.appendChild(li);
            taskInput.value = "";
            datetimeInput.value = "";
        } else {
            alert("Please enter both task and date/time.");
        }
    });
});
