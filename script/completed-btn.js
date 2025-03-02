document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".btn-primary").forEach(button => {
        button.addEventListener("click", function () {
            alert("Board Updated Successfully");

            
            const taskCount = document.getElementById("task-count");
            taskCount.innerText = Math.max(0, parseInt(taskCount.innerText) - 1);

            
            const navbarCount = document.getElementById("navbar-count");
            navbarCount.innerText = parseInt(navbarCount.innerText) + 1;

           
            button.disabled = true;
            button.innerText = "Completed ";
            button.classList.add("bg-gray-400", "cursor-not-allowed");
        });
    });
});
