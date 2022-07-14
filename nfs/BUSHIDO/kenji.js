let login = document.querySelector('#login');
login.addEventListener('click', formSubmitHandler);


function formSubmitHandler() {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    if (username === "Razor" && password === "bmwm3") {
        window.location.href = '.html';
    } else {
        alert("HaHaHa,try again🤣")
    }
}