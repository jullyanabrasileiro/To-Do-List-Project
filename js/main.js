const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('.list-container');
const userName = localStorage.getItem('')

/* SAVING NAME */

document.getElementById('submit-name').addEventListener('click', function(event) {
    const user = document.querySelector(`#user-name`).value;

    if (user.trim() === '') {
        event.preventDefault();
        alert('Hey, You need to write you name!');
    } else {
        localStorage.setItem('user', user);
        window.location.href = "list.html"
    }
});


/* TO DO LIST */

function addTask() {
    if(inputBox.value === '') {
        alert("You must write something!")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = '';
        saveData();

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    listContainer.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();            
        }
        else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    }, false)
};

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
};

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
};

showTask();