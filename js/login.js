const login = document.querySelector(".login-form")
const loginInput = document.querySelector(".login-form__input")
const usernameText = document.querySelector(".username-text")

function loginSubmit(event) {
    event.preventDefault();
    login.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem("username", username);
    paintGreetings(username);
}

function paintGreetings(username) {
    usernameText.innerText = `Hello ${username}`;
    usernameText.classList.remove("hidden");
    usernameText.classList.add("is-in")
}

const savedUsername = localStorage.getItem("username");

if(savedUsername === null){
    login.classList.remove("hidden");
    login.addEventListener("submit", loginSubmit) ;
} else {
    paintGreetings(savedUsername);
}



