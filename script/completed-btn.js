document.addEventListener("DOMContentLoaded", function () {
    const taskButtons = document.querySelectorAll(".btn-primary:not(.clear-btn)");
    let totalTasks = taskButtons.length;

    taskButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Board Updated Successfully");

            const taskCount = document.getElementById("task-count");
            let currentCount = parseInt(taskCount.innerText);

            if (currentCount > 1) {
                taskCount.innerText = currentCount - 1;
            } else {
                taskCount.innerText = "No Tasks Left";
            }

            const navbarCount = document.getElementById("navbar-count");
            navbarCount.innerText = parseInt(navbarCount.innerText) + 1;

            button.disabled = true;
            button.innerText = "Completed";
            button.classList.add("bg-gray-400", "cursor-not-allowed");

            const taskTitle = button.closest(".card").querySelector(".task-title").innerText;
            const currentTime = new Date().toLocaleTimeString();

            const activityLog = document.getElementById("activity-log");
            const logEntry = document.createElement("p");
            logEntry.innerText = `You have completed the task: "${taskTitle}" at ${currentTime}`;
            activityLog.appendChild(logEntry);
        });
    });


    const clearHistoryBtn = document.querySelector(".clear-btn");
    clearHistoryBtn.addEventListener("click", function () {
        const confirmDelete = confirm("Are you sure you want to clear the activity log?");

        if (confirmDelete) {
            const activityLog = document.getElementById("activity-log");
            activityLog.querySelectorAll("p").forEach(log => log.remove());
        }
    });
});
