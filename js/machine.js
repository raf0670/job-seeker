// only the filter and window change
function filterChange(nextID) {
    const all = document.getElementById("home-all-btn");
    const interview = document.getElementById("home-interview-btn");
    const rejected = document.getElementById("home-rejected-btn");

    all.classList.remove("bg-[#3B82F6]", "text-[#FFFFFF]");
    interview.classList.remove("bg-[#3B82F6]", "text-[#FFFFFF]");
    rejected.classList.remove("bg-[#3B82F6]", "text-[#FFFFFF]");
    all.classList.add("text-[#64748B]", "bg-white");
    interview.classList.add("text-[#64748B]", "bg-white");
    rejected.classList.add("text-[#64748B]", "bg-white");

    document.getElementById(nextID).classList.remove("text-[#64748B]", "bg-white");
    document.getElementById(nextID).classList.add("bg-[#3B82F6]", "text-[#FFFFFF]");
}

function showOnly(container) {
    document.getElementById("home-all-jobs").classList.add("hidden");
    document.getElementById("interview-container").classList.add("hidden");
    document.getElementById("rejected-container").classList.add("hidden");
    document.getElementById("home-all-no-jobs-preview").classList.add("hidden");
    document.getElementById("interview-no-jobs-preview").classList.add("hidden");
    document.getElementById("rejected-no-jobs-preview").classList.add("hidden");

    document.getElementById(container).classList.remove("hidden");
}

function show(container) {
    document.getElementById(container).classList.remove("hidden");
}

function decreaseCount(id) {
    const newNum = Number(id.innerText) - 1;
    id.innerText = newNum;
}

function increaseCount(id) {
    const newNum = Number(id.innerText) + 1;
    id.innerText = newNum;
}