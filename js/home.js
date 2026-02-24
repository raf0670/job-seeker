const homeTotalJobs = document.getElementById("home-total-jobs");
homeTotalJobs.innerText = document.getElementsByClassName("home-job-cards").length;
document.getElementById("available-jobs").innerText = homeTotalJobs.innerText;

// filter change color actions
document.getElementById("home-interview-btn").addEventListener("click", function () {
    filterChange("home-interview-btn");
    showOnly("interview-container");
    document.getElementById("available-jobs").innerText = document.getElementById("home-interview-jobs").innerText;
    if (document.getElementById("available-jobs").innerText === "0") {
        show("interview-no-jobs-preview");
    }
});
document.getElementById("home-rejected-btn").addEventListener("click", function () {
    filterChange("home-rejected-btn");
    showOnly("rejected-container");
    document.getElementById("available-jobs").innerText = document.getElementById("home-rejected-jobs").innerText;
    if (document.getElementById("available-jobs").innerText === "0") {
        show("rejected-no-jobs-preview");
    }
});
document.getElementById("home-all-btn").addEventListener("click", function () {
    filterChange("home-all-btn");
    showOnly("home-all-jobs");
    document.getElementById("available-jobs").innerText = homeTotalJobs.innerText;
    if (document.getElementById("available-jobs").innerText === "0") {
        show("home-all-no-jobs-preview");
    }
});

const deleteBtns = document.querySelectorAll(".home-delete-btn");
// console.log(deleteBtns);
deleteBtns.forEach(element => {
    element.addEventListener("click", function () {
        const toBeDeleted = this.closest(".home-job-cards");
        const status = toBeDeleted.querySelector(".status-badge").innerText;
        const jobId = toBeDeleted.getAttribute("data-job-id");
        decreaseCount(homeTotalJobs);
        decreaseCount(document.getElementById("available-jobs"));

        if (status === "INTERVIEW") {
            decreaseCount(document.getElementById("home-interview-jobs"));

            const clone = document.getElementById(`clone-${jobId}`);
            if (clone) {
                clone.remove();
            }
        } else if (status === "REJECTED") {
            decreaseCount(document.getElementById("home-rejected-jobs"));

            const clone = document.getElementById(`clone-${jobId}`);
            if (clone) clone.remove();
        }

        toBeDeleted.remove();
        if (homeTotalJobs.innerText === "0") {
            document.getElementById("home-all-no-jobs-preview").classList.remove("hidden");
        }
    });
});

const jobCardsList = document.querySelectorAll(".home-job-cards");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");

jobCardsList.forEach((jobCard, index) => {
    const uniqueId = `job-card-${index}`;
    jobCard.setAttribute("data-job-id", uniqueId);

    const statusBadge = jobCard.querySelector(".status-badge");
    const interviewBtn = jobCard.querySelector("#home-apply-interview-btn");
    const rejectedBtn = jobCard.querySelector("#home-apply-rejected-btn");

    const resetBadge = () => {
        statusBadge.classList.remove("text-white", "bg-[#10B981]", "bg-[#EF4444]");
        statusBadge.classList.add("bg-[#EEF4FF]", "text-[#002C5C]");
        // statusBadge.innerText = "NOT APPLIED";
    }

    interviewBtn.addEventListener("click", function () {
        if (statusBadge.innerText === "INTERVIEW") {
            return;
        }
        if (statusBadge.innerText === "REJECTED") {
            decreaseCount(document.getElementById("home-rejected-jobs"));

            const existingClone = document.getElementById(`clone-${uniqueId}`);
            if (existingClone) {
                existingClone.remove();
            }
        }
        if (statusBadge.innerText !== "INTERVIEW") {
            resetBadge();
            increaseCount(document.getElementById("home-interview-jobs"));
            statusBadge.classList.remove("bg-[#EEF4FF]", "text-[#002C5C]");
            statusBadge.classList.add("text-white", "bg-[#10B981]");
            statusBadge.innerText = "INTERVIEW";
        }

        const clone = jobCard.cloneNode(true);
        clone.id = `clone-${uniqueId}`;
        interviewContainer.append(clone);
        // console.log();
    });

    rejectedBtn.addEventListener("click", function () {
        if (statusBadge.innerText === "REJECTED") {
            return;
        }
        if (statusBadge.innerText === "INTERVIEW") {
            decreaseCount(document.getElementById("home-interview-jobs"));

            const existingClone = document.getElementById(`clone-${uniqueId}`);
            if (existingClone) {
                existingClone.remove();
            }
        }
        if (statusBadge.innerText !== "REJECTED") {
            resetBadge();
            increaseCount(document.getElementById("home-rejected-jobs"));
            statusBadge.classList.remove("bg-[#EEF4FF]", "text-[#002C5C]");
            statusBadge.classList.add("text-white", "bg-[#EF4444]");
            statusBadge.innerText = "REJECTED";
        }

        const clone = jobCard.cloneNode(true);
        clone.id = `clone-${uniqueId}`;
        rejectedContainer.append(clone);
    });
});

interviewContainer.addEventListener("click", function (event) {
    const dltBtn = event.target.closest(".home-delete-btn");
    if (dltBtn) {
        const cardToRemove = dltBtn.closest(".home-job-cards");
        const jobId = cardToRemove.id.replace("clone-", "");

        // const resetBadge = () => {
        //     statusBadge.classList.remove("text-white", "bg-[#10B981]", "bg-[#EF4444]");
        //     statusBadge.classList.add("bg-[#EEF4FF]", "text-[#002C5C]");
        //     // statusBadge.innerText = "NOT APPLIED";
        // }

        decreaseCount(document.getElementById("home-interview-jobs"));
        const originalCard = document.querySelector(`[data-job-id="${jobId}"]`);
        if (originalCard) {
            const originalBadge = originalCard.querySelector(".status-badge");
            originalBadge.innerText = "NOT APPLIED";
            originalBadge.classList.remove("text-white", "bg-[#10B981]", "bg-[#EF4444]");
            originalBadge.classList.add("bg-[#EEF4FF]", "text-[#002C5C]");
        }
        cardToRemove.remove();

        if (document.getElementById("home-interview-jobs").innerText === "0") {
            show("interview-no-jobs-preview");
        }

        return;
    }

    const rejBtn = event.target.closest("#home-apply-rejected-btn");
    if (!rejBtn) return;

    const cardToMove = rejBtn.closest(".home-job-cards");
    const jobId = cardToMove.id.replace("clone-", "");
    const statusBadge = cardToMove.querySelector(".status-badge");

    decreaseCount(document.getElementById("home-interview-jobs"));
    increaseCount(document.getElementById("home-rejected-jobs"));

    statusBadge.innerText = "REJECTED";
    statusBadge.classList.remove("bg-[#10B981]", "text-white");
    statusBadge.classList.add("bg-[#EF4444]", "text-white");

    const originalCard = document.querySelector(`[data-job-id="${jobId}"]`);
    if (originalCard) {
        const originalBadge = originalCard.querySelector(".status-badge");
        originalBadge.innerText = "REJECTED";
        originalBadge.className = statusBadge.className;
    }

    rejectedContainer.append(cardToMove);

    if (document.getElementById("home-interview-jobs").innerText === "0") {
        show("interview-no-jobs-preview");
    }
});


rejectedContainer.addEventListener("click", function (event) {
    const dltBtn = event.target.closest(".home-delete-btn");
    if (dltBtn) {
        const cardToRemove = dltBtn.closest(".home-job-cards");
        const jobId = cardToRemove.id.replace("clone-", "");

        decreaseCount(document.getElementById("home-rejected-jobs"));
        const originalCard = document.querySelector(`[data-job-id="${jobId}"]`);
        if (originalCard) {
            const originalBadge = originalCard.querySelector(".status-badge");
            originalBadge.innerText = "NOT APPLIED";
            originalBadge.classList.remove("text-white", "bg-[#10B981]", "bg-[#EF4444]");
            originalBadge.classList.add("bg-[#EEF4FF]", "text-[#002C5C]");
        }
        cardToRemove.remove();

        if (document.getElementById("home-rejected-jobs").innerText === "0") {
            show("rejected-no-jobs-preview");
        }
        return;
    }

    const intBtn = event.target.closest("#home-apply-interview-btn");
    if (!intBtn) return;

    const cardToMove = intBtn.closest(".home-job-cards");
    const jobId = cardToMove.id.replace("clone-", "");
    const statusBadge = cardToMove.querySelector(".status-badge");

    decreaseCount(document.getElementById("home-rejected-jobs"));
    increaseCount(document.getElementById("home-interview-jobs"));

    statusBadge.innerText = "INTERVIEW";
    statusBadge.classList.remove("bg-[#EF4444]", "text-white");
    statusBadge.classList.add("bg-[#10B981]", "text-white");

    const originalCard = document.querySelector(`[data-job-id="${jobId}"]`);
    if (originalCard) {
        const originalBadge = originalCard.querySelector(".status-badge");
        originalBadge.innerText = "INTERVIEW";
        originalBadge.className = statusBadge.className;
    }

    interviewContainer.append(cardToMove);

    if (document.getElementById("home-rejected-jobs").innerText === "0") {
        show("rejected-no-jobs-preview");
    }
});