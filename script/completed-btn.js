document.addEventListener("DOMContentLoaded", function () {
    const taskButtons = document.querySelectorAll(".btn-primary:not(.clear-btn)");
    const taskCount = document.getElementById("task-count");
    const navbarCount = document.getElementById("navbar-count");
    const activityLog = document.getElementById("activity-log");
    const clearHistoryBtn = document.querySelector(".clear-btn");

    document.getElementById("current-date").innerHTML = new Date().toLocaleDateString("en-US", {
        weekday: "short", month: "short", day: "numeric", year: "numeric"
    }).replace(",", "<br>");

    taskButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            alert("Board Updated Successfully");

            let currentCount = parseInt(taskCount.innerText);
            taskCount.innerText = currentCount > 1 ? currentCount - 1 : "No Tasks Left";
            navbarCount.innerText = parseInt(navbarCount.innerText) + 1;

            button.disabled = true;
            button.innerText = "Completed";
            button.classList.add("bg-gray-400", "cursor-not-allowed");

            const taskTitle = button.closest(".card").querySelector(".task-title").innerText;
            const currentTime = new Date().toLocaleTimeString();
            const logEntry = document.createElement("p");
            logEntry.classList.add("completed-task-log"); // Added class to identify completed tasks
            logEntry.style.backgroundColor = "gray";
            logEntry.style.padding = "8px";
            logEntry.style.borderRadius = "5px";
            logEntry.style.marginTop = "5px";
            logEntry.innerText = `You have completed the task: "${taskTitle}" at ${currentTime}`;
            activityLog.appendChild(logEntry);

            if (document.querySelectorAll(".btn-primary:not(.clear-btn):not([disabled])").length === 0) {
                setTimeout(() => {
                    alert(" Congratulations!!!! You have completed all tasks??");
                }, 500);
            }
        });
    });

    clearHistoryBtn.addEventListener("click", function () {
        if (confirm("Are you sure you want to clear the completed tasks?")) {
            document.querySelectorAll(".completed-task-log").forEach(log => log.remove());
        }
    });
});
