// Set initial counts based on HTML content
const initialCount = document.getElementsByClassName("job-cards").length;

if (document.getElementById("available-jobs")) {
    document.getElementById("available-jobs").innerText = initialCount;
}
if (document.getElementById("total-jobs")) {
    document.getElementById("total-jobs").innerText = initialCount;
}