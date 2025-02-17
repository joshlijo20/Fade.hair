// Open the login modal
function openModal() {
    document.getElementById('loginModal').style.display = 'block';
}

// Close the login modal
function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Close modal if clicked outside
window.onclick = function(event) {
    let modal = document.getElementById('loginModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
