function resetColor() {
    filterButtons.forEach(button => {
        button.classList.remove('bg-[#3B82F6]', 'text-[#FFFFFF]');  
        button.classList.add('bg-white', 'text-[#64748B]');
    });
}