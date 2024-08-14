document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.querySelector('#submit-name');

    submitBtn.addEventListener('click', function() {
        const userName = document.getElementById('user-name').value;

        if (userName === '') {
            alert('Please enter your name!');
        } else {
            localStorage.setItem('userName', userName);

            window.location.href = 'list.html';
        }
    })
})

