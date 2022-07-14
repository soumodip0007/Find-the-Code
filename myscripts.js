let login = document.querySelector('#login');
login.addEventListener('click', formSubmitHandler);


function formSubmitHandler() {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    if (username === "Kinkar Kishore Roy" && password === "KiKiRa") {
        window.location.href = 'new.html';
    } else {
        alert("Nothing is impossible. The word itself says 'I'm possible!🗝")
    }
}