const homeTotalJobs = document.getElementById("home-total-jobs");
homeTotalJobs.innerText = document.getElementsByClassName("job-cards").length;
document.getElementById("available-jobs").innerText = homeTotalJobs.innerText;

// filter change actions
document.getElementById("home-interview-btn").addEventListener("click", function() {
    filterChange("home-all-btn", "home-interview-btn");
});
document.getElementById("home-rejected-btn").addEventListener("click", function() {
    filterChange("home-all-btn", "home-rejected-btn");
});

const deleteBtns = document.querySelectorAll(".home-delete-btn");
// console.log(deleteBtns);
deleteBtns.forEach(element => {
    element.addEventListener("click", function() {
        this.closest(".job-cards").remove();
        // console.log(document.getElementsByClassName("job-cards").length);
        decreaseCount(homeTotalJobs);
        decreaseCount(document.getElementById("available-jobs"));

        if (element.parentElement.parentElement.parentElement.querySelector(".status-badge").innerText === "INTERVIEW") {
            decreaseCount(document.getElementById("home-interview-jobs"));
        } else if (element.parentElement.parentElement.parentElement.querySelector(".status-badge").innerText === "REJECTED") {
            decreaseCount(document.getElementById("home-rejected-jobs"));
        }
    });
});

const jobCardsList = document.querySelectorAll(".job-cards");

jobCardsList.forEach(jobCard => {
    const statusBadge = jobCard.querySelector(".status-badge");

    const resetBadge = () => {
        statusBadge.classList.remove("text-white", "bg-[#10B981]", "bg-[#EF4444]");
        statusBadge.classList.add("bg-[#EEF4FF]", "text-[#002C5C]");
        // statusBadge.innerText = "NOT APPLIED";
    }

    jobCard.querySelector("#home-apply-interview-btn").addEventListener("click", function() {
        if (statusBadge.innerText === "REJECTED") {
            decreaseCount(document.getElementById("home-rejected-jobs"));
        }
        if (statusBadge.innerText !== "INTERVIEW") {
            resetBadge();
            increaseCount(document.getElementById("home-interview-jobs"));
            statusBadge.classList.remove("bg-[#EEF4FF]", "text-[#002C5C]");
            statusBadge.classList.add("text-white", "bg-[#10B981]");
            statusBadge.innerText = "INTERVIEW";
        }
        
        
    });
    
    jobCard.querySelector("#home-apply-rejected-btn").addEventListener("click", function() {
        if (statusBadge.innerText === "INTERVIEW") {
            decreaseCount(document.getElementById("home-interview-jobs"));
        }
        if (statusBadge.innerText !== "REJECTED") {
            resetBadge();
            increaseCount(document.getElementById("home-rejected-jobs"));
            statusBadge.classList.remove("bg-[#EEF4FF]", "text-[#002C5C]");
            statusBadge.classList.add("text-white", "bg-[#EF4444]");
            statusBadge.innerText = "REJECTED";
        }


    });
});