window.addEventListener('load', () => {
    const container = document.getElementById('rejected-container');
    const noJobsPreview = document.getElementById('rejected-no-jobs-preview');
    const jobs = JSON.parse(sessionStorage.getItem('rejectedJobs')) || [];

    if(document.getElementById("rejected-jobs")) document.getElementById("rejected-jobs").innerText = jobs.length;
    if(document.getElementById("rejected-available-jobs")) document.getElementById("rejected-available-jobs").innerText = jobs.length;

    if (jobs.length > 0) {
        if (noJobsPreview) noJobsPreview.classList.add('hidden');
        
        jobs.forEach(job => {
            const cardHTML = `
                <div class="job-cards rounded-lg bg-white p-5 space-y-5 mb-4 shadow-sm border border-base-200">
                    <h1 class="text-[#002C5C] font-bold text-2xl">${job.company}</h1>
                    <h2 class="text-[#64748B]">${job.role}</h2>
                    <div class="bg-[#EF4444] text-white w-28 h-9 rounded-md flex justify-center items-center text-xs font-semibold">REJECTED</div>
                    <p class="text-[#323B49]">${job.details}</p>
                </div>
            `;
            container.innerHTML += cardHTML;
        });
    }
});