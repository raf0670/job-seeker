document.getElementById("available-jobs").innerText = document.getElementsByClassName("job-cards").length;
document.getElementById("total-jobs").innerText = document.getElementsByClassName("job-cards").length;
const interviewJobs = document.getElementById("interview-jobs");
const rejectedJobs = document.getElementById("rejected-jobs");

const filterButtons = document.querySelectorAll('.flex.gap-2.mb-4 .btn');

filterButtons.forEach(clickedButton => {
    clickedButton.addEventListener('click', function() {
        resetColor();

        this.classList.remove('bg-white', 'text-[#64748B]');
        this.classList.add('bg-[#3B82F6]', 'text-[#FFFFFF]');

        const btnText = this.innerText;
        if (btnText === "Interview") {
            window.location.assign("/interview.html");
        } else if (btnText === "Rejected") {
            window.location.assign("/rejected.html");
        } else {
            window.location.assign("/index.html");
        }
    });
});