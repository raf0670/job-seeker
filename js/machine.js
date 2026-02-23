// only the filter and window change
function filterChange(currentID, nextID) {
    const currentIDJobs = document.getElementById(currentID);
    currentIDJobs.classList.remove("bg-[#3B82F6]", "text-[#FFFFFF]");
    currentIDJobs.classList.add("text-[#64748B]", "bg-white");

    document.getElementById(nextID).classList.remove("text-[#64748B]", "bg-white");
    document.getElementById(nextID).classList.add("bg-[#3B82F6]", "text-[#FFFFFF]");
    
    if (document.getElementById(nextID).innerText === "Interview") {
        window.location.assign("/interview.html");
    } else if (document.getElementById(nextID).innerText === "Rejected") {
        window.location.assign("/rejected.html");
    }
}

function decreaseCount(id) {
    const newNum = Number(id.innerText) - 1;
    id.innerText = newNum;
}

function increaseCount(id) {
    const newNum = Number(id.innerText) + 1;
    id.innerText = newNum;
}