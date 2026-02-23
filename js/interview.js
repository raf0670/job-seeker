window.addEventListener('load', () => {
    const container = document.getElementById('interview-container');
    const noJobsPreview = document.getElementById('interview-no-jobs-preview');
    // Read from the memory we saved in machine.js
    const jobs = JSON.parse(sessionStorage.getItem('interviewJobs')) || [];

    // Update Header Numbers
    if(document.getElementById("interview-jobs")) document.getElementById("interview-jobs").innerText = jobs.length;
    if(document.getElementById("interview-available-jobs")) document.getElementById("interview-available-jobs").innerText = jobs.length;

    if (jobs.length > 0) {
        if (noJobsPreview) noJobsPreview.classList.add('hidden');
        
        // Loop through saved jobs and create HTML for each
        jobs.forEach(job => {
            const cardHTML = `
                <div class="job-cards rounded-lg bg-white p-5 space-y-5 mb-4 shadow-sm border border-base-200">
                    <h1 class="text-[#002C5C] font-bold text-2xl">${job.company}</h1>
                    <h2 class="text-[#64748B]">${job.role}</h2>
                    <div class="bg-[#10B981] text-white w-28 h-9 rounded-md flex justify-center items-center text-xs font-semibold">INTERVIEW</div>
                    <p class="text-[#323B49]">${job.details}</p>
                </div>
            `;
            container.innerHTML += cardHTML;
        });
    }
});