// 1. Navigation for Top Filter Buttons
const filterButtons = document.querySelectorAll('.filter-btn .btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const btnText = this.innerText.trim();
        if (btnText === "Interview") window.location.assign("interview.html");
        else if (btnText === "Rejected") window.location.assign("rejected.html");
        else window.location.assign("index.html");
    });
});

// 2. The Logic to "Send" cards to other pages
const allJobsContainer = document.getElementById('all-jobs');
if (allJobsContainer) {
    allJobsContainer.addEventListener('click', function(e) {
        const target = e.target;
        const card = target.closest('.job-cards');
        if (!card) return;

        // Grab data from the card you clicked
        const jobData = {
            company: card.querySelector('h1').innerText,
            role: card.querySelector('h2').innerText,
            details: card.querySelector('p').innerText
        };

        if (target.classList.contains('apply-interview-btn')) {
            saveToSession('interviewJobs', jobData);
            window.location.assign('interview.html');
        } else if (target.classList.contains('apply-rejected-btn')) {
            saveToSession('rejectedJobs', jobData);
            window.location.assign('rejected.html');
        }
    });
}

// Helper to save data to short-term memory
function saveToSession(key, data) {
    let list = JSON.parse(sessionStorage.getItem(key)) || [];
    list.push(data);
    sessionStorage.setItem(key, JSON.stringify(list));
}