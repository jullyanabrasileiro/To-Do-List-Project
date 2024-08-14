document.addEventListener('DOMContentLoaded', function() {
    // Display the user's name
    const userName = localStorage.getItem('userName');
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        greetingElement.textContent = userName ? userName : 'Guest';
    }
});
