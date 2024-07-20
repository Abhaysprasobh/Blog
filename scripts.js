const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check the saved theme on initial load
if (localStorage.getItem('dark-mode') === 'true') {
    body.classList.add('dark-mode');
    toggleButton.classList.add('dark-mode-active');
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle
